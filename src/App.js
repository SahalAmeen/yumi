import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import "./App.css";
import Icons from "./components/Icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import abi from "./abi/abi.json";

// Ethers
import { ethers } from "ethers";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: black;
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: black;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--accent-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const [totalSupply, setTotalSupply] = useState(0);

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit *mintAmount);

    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
        gasLimit: null,
        maxFee: null,
        maxPriority: null
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getRemaining = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    );

    const contract = new ethers.Contract(
      "0xFF2790802F3ca1777c632892394f8AfaCa92Bd9C",
      abi,
      provider
    );

    const total = await contract.totalSupply();

    setTotalSupply(total.toString());
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
    getRemaining();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="./logo.png" />
        </div>
        <div className="icons">
          <Icons type="twitter" link="https://twitter.com/yuminfts" />
          <Icons type="discord" link="https://discord.gg/STwwF2Ehau" />
          <Icons
            type="opensea"
            link="https://opensea.io/collection/yumiofficial"
          />
        </div>
      </div>
      <div className="main">
        <div className="inner">
          {/* <Slider {...settings}> */}
          <div className="slideImage">
            {/* <GifPlayer
        gif={"./sneakpeak.gif"}
        // still={still}
        // pauseRef={pause => this.pauseGif = pause}
      /> */}
          </div>
          <div className="slideImage">
            <img style={{maxHeight: '516px'}}
              src={`https://cdn.discordapp.com/attachments/960782078406955058/961288159277244467/ezgif.com-gif-maker_7.gif`}
            />
          </div>
          {/* <div className="slideImage"><img src="https://picsum.photos/400/400?random=2"/></div>
                <div className="slideImage"><img src="https://picsum.photos/400/400?random=3"/></div>
                <div className="slideImage"><img src="https://picsum.photos/400/400?random=4"/></div>
                <div className="slideImage"><img src="https://picsum.photos/400/400?random=5"/></div>
                <div className="slideImage"><img src="https://picsum.photos/400/400?random=6"/></div>
                <div className="slideImage"><img src="https://picsum.photos/400/400?random=7"/></div>
                <div className="slideImage"><img src="https://picsum.photos/400/400?random=8"/></div>
                <div className="slideImage"><img src="https://picsum.photos/400/400?random=9"/></div>
                <div className="slideImage"><img src="https://picsum.photos/400/400?random=10"/></div>
            </Slider> */}
        </div>

        <div className="inner">
          <div className="flex justify-center  sm:block">
            {" "}
            {/*sm:pt-28 pt-4 */}
            <p className="connectHeader">YUMI</p>
          </div>
          <div>
            <s.Container
              flex={2}
              jc={"center"}
              ai={"center"}
              style={{
                backgroundColor: "rgb(255 212 212)",
                padding: "48px 24px",
                borderRadius: 24,
                width: "75%",
                margin: "30px auto",
                border: "4px dashed black",
                boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
              }}
            >
              <s.TextTitle
                style={{
                  textAlign: "center",
                  fontSize: 50,
                  fontWeight: "bold",
                  color: "var(--accent)",
                }}
              >
                {totalSupply} / {CONFIG.MAX_SUPPLY}
              </s.TextTitle>
              <s.TextDescription
                style={{
                  textAlign: "center",
                  color: "var(--primary-text)",
                }}
              >
                <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                  {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                </StyledLink>
              </s.TextDescription>
              <s.SpacerSmall />
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <s.TextTitle
                    style={{ textAlign: "center", color: "var(--accent)" }}
                  >
                    The sale has ended.
                  </s.TextTitle>
                  <s.TextDescription
                    style={{ textAlign: "center", color: "var(--accent)" }}
                  >
                    You can still find {CONFIG.NFT_NAME} on
                  </s.TextDescription>
                  <s.SpacerSmall />
                  <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </StyledLink>
                </>
              ) : (
                <>
                  <s.TextTitle
                    style={{ textAlign: "center", color: "var(--accent)" }}
                  >
                    {/* 1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}{CONFIG.NETWORK.SYMBOL}. */}
                    Price: {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}.
                  </s.TextTitle>
                  <s.SpacerXSmall />
                  <s.TextDescription
                    style={{ textAlign: "center", color: "var(--accent)" }}
                  >
                    {/* Excluding gas fees. */}
                  </s.TextDescription>
                  <s.SpacerSmall />
                  {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                    <s.Container ai={"center"} jc={"center"}>
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent)",
                        }}
                      >
                        Connect to the {CONFIG.NETWORK.NAME} network
                      </s.TextDescription>
                      <s.SpacerSmall />
                      <StyledButton
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                      >
                        CONNECT
                      </StyledButton>
                      {blockchain.errorMsg !== "" ? (
                        <>
                          <s.SpacerSmall />
                          <s.TextDescription
                            style={{
                              textAlign: "center",
                              color: "var(--accent)",
                            }}
                          >
                            {blockchain.errorMsg}
                          </s.TextDescription>
                        </>
                      ) : null}
                    </s.Container>
                  ) : (
                    <>
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent)",
                        }}
                      >
                        {feedback}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <StyledRoundButton
                          style={{ lineHeight: 0.4 }}
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </StyledRoundButton>
                        <s.SpacerMedium />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent)",
                          }}
                        >
                          {mintAmount}
                        </s.TextDescription>
                        <s.SpacerMedium />
                        <StyledRoundButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          +
                        </StyledRoundButton>
                      </s.Container>
                      <s.SpacerSmall />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <StyledButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                        >
                          {claimingNft ? "Minting" : "Mint"}
                        </StyledButton>
                      </s.Container>
                    </>
                  )}
                </>
              )}
              <s.SpacerMedium />
            </s.Container>
          </div>
          {/* <div className="quantity pt-4">
                <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg></span>
                <p style={{fontFamily:'coder'}}>1</p>
                <span><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z" fill="currentColor"></path></svg>
                </span>
            </div>
            <div className="pt-4">
                <p className="py-2 bottom font-bold">Install Metamask.</p>
                <p className="py-2 bottom font-bold">Click buy to mint your NFT.</p>
            </div>
            <div className="flex justify-center py-2 pt-2">
                <button className=" py-4 text-black bg-white px-8 rounded-full">
                    <p className="text-center font-bold text-xl" style={{fontFamily: 'Lato'}}  onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}>Connect Wallet</p>
                </button>
            </div> */}
          <div className="info">
            <p className="text-white text-center text-lg">
              Yumi is a collection of 5000 YUMI's babes reincarnated deep down
              from the Animeverse, ready to fascinate with their appearance.
            </p>
            <br />
            <p className="text-center text-white visible ">© 2022 YUMI</p>
          </div>
        </div>
      </div>
      {/* <MainSection/> */}
    </>
  );
}

export default App;
