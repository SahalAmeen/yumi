(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{245:function(t,e){},248:function(t,e){},251:function(t,e){},255:function(t,e){},282:function(t,e){},284:function(t,e){},293:function(t,e){},295:function(t,e){},305:function(t,e){},307:function(t,e){},425:function(t,e){},427:function(t,e){},434:function(t,e){},435:function(t,e){},550:function(t,e,n){},551:function(t,e,n){},552:function(t,e,n){"use strict";n.r(e);var c,a,r,o,i,s,l,d,p,x,u,j,b,h,C,O,f=n(2),g=n(84),w=n.n(g),v=n(42),m=n(69),y=n(15),A=n(17),N=n.n(A),S=n(56),E=n(67),k=n.n(E),T=n(219),_=n.n(T),M=n(68),L=n(220),I=n(13),D={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},D),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},D),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:e.payload.account});default:return t}},R={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},R),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},U=Object(M.b)({blockchain:F,data:K}),P=[L.a],H=Object(M.c)(M.a.apply(void 0,P)),Y=Object(M.d)(U,H),z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},W=function(){return function(){var t=Object(v.a)(N.a.mark((function t(e){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(z("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},B=function(t){return{type:"CONNECTION_FAILED",payload:t}},V=function(t){return function(){var e=Object(v.a)(N.a.mark((function e(n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(W());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=n(16),G=(Z.a.div(c||(c=Object(y.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),Z.a.div(a||(a=Object(y.a)(["\n  height: 8px;\n  width: 8px;\n"])))),Q=Z.a.div(r||(r=Object(y.a)(["\n  height: 16px;\n  width: 16px;\n"]))),q=Z.a.div(o||(o=Object(y.a)(["\n  height: 24px;\n  width: 24px;\n"]))),X=(Z.a.div(i||(i=Object(y.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Z.a.div(s||(s=Object(y.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"}))),J=Z.a.p(l||(l=Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),$=(Z.a.p(d||(d=Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Z.a.p(p||(p=Object(y.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),tt=(Z.a.div(x||(x=Object(y.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(0)),et=function(t){var e=t.type,n=t.link,c=t._target,a=void 0===c?"_blank":c;return"twitter"==e?Object(tt.jsx)("a",{href:n,target:a,children:Object(tt.jsx)("svg",{stroke:"white",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",height:"40px",width:"40px",xmlns:"http://www.w3.org/2000/svg",children:Object(tt.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})}):"discord"==e?Object(tt.jsx)("a",{href:n,target:a,children:Object(tt.jsx)("svg",{stroke:"white",fill:"white","stroke-width":"0",viewBox:"0 0 640 512",height:"40px",width:"40px",xmlns:"http://www.w3.org/2000/svg",children:Object(tt.jsx)("path",{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"})})}):"opensea"==e?Object(tt.jsx)("a",{href:n,target:a,children:Object(tt.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 90 90",fill:"none",children:[Object(tt.jsx)("path",{d:"M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z",fill:"#ffffff"}),Object(tt.jsx)("path",{d:"M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z",fill:"rgb(17 51 85 / 95%)"}),Object(tt.jsx)("path",{d:"M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1304 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.949C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3023 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.0461 56.7435 35.655 57.7283 37.3934 57.7283H43.866V52.675H37.4673C37.1391 52.675 36.9449 52.2959 37.1345 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9713 50.8257 38.8358 49.4895 39.6958 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4758 44.3438 41.5497 44.1449C41.6746 43.7936 41.804 43.4653 41.8965 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4467 40.3723 42.4467 39.3459C42.4467 38.9437 42.4282 38.523 42.3912 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4573 32.864 41.3278 32.4618C40.9626 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7619 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2857 24.6437 38.1562 24.371 38.0268 24.112C37.9343 23.9132 37.8279 23.7283 37.754 23.5434L36.9634 22.0824C36.8524 21.8836 37.0374 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2294 23.0533 42.234 23.0533L42.8859 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0034 18 46.4089 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5204 25.0968 49.562 25.1153 49.599 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.3341 25.7071 50.5329 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7706 27.8107 52.9185 27.9587C53.723 28.7076 54.6245 29.5861 55.4845 30.557C55.7249 30.8297 55.9607 31.1071 56.2011 31.3984C56.4415 31.6943 56.6958 31.9856 56.9177 32.2769C57.209 32.6652 57.5233 33.0674 57.7961 33.4882C57.9256 33.687 58.0735 33.8904 58.1984 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4097 36.2529 59.5206 36.5257C59.8489 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.3621 39.0963 60.3806 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3436 42.2956C60.2742 42.6239 60.1818 42.9336 60.0708 43.2619C59.9598 43.5763 59.8489 43.9045 59.7056 44.2143C59.4282 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4388 46.5583 58.2908 46.7802C58.129 47.016 57.9626 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.172 48.2828C56.9732 48.5556 56.7697 48.8284 56.5478 49.0688C56.2381 49.434 55.9422 49.7808 55.6324 50.1137C55.4475 50.331 55.2487 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.4581 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0896 52.638 52.9925 52.675 52.8908 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2136 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1032 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z",fill:"rgb(17 51 85 / 95%)"})]})}):void 0},nt=(n(213),n(214),n(119),n(550),Z.a.button(u||(u=Object(y.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"])))),ct=Z.a.button(j||(j=Object(y.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--accent-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),at=(Z.a.div(b||(b=Object(y.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),Z.a.img(h||(h=Object(y.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Z.a.img(C||(C=Object(y.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),Z.a.a(O||(O=Object(y.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));var rt=function(){var t=Object(S.b)(),e=Object(S.c)((function(t){return t.blockchain})),n=Object(S.c)((function(t){return t.data})),c=Object(f.useState)(!1),a=Object(m.a)(c,2),r=a[0],o=a[1],i=Object(f.useState)("Click buy to mint your NFT."),s=Object(m.a)(i,2),l=s[0],d=s[1],p=Object(f.useState)(1),x=Object(m.a)(p,2),u=x[0],j=x[1],b=Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),h=Object(m.a)(b,2),C=h[0],O=h[1],g=function(){""!==e.account&&null!==e.smartContract&&t(W(e.account))},w=function(){var t=Object(v.a)(N.a.mark((function t(){var e,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,O(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.useEffect)((function(){w()}),[]),Object(f.useEffect)((function(){g()}),[e.account]),Object(tt.jsxs)(tt.Fragment,{children:[Object(tt.jsxs)("div",{className:"header",children:[Object(tt.jsx)("div",{className:"logo",style:{marginLeft:"20px",color:"white"},children:Object(tt.jsx)("p",{children:"YUMI"})}),Object(tt.jsxs)("div",{className:"icons",children:[Object(tt.jsx)(et,{type:"twitter",link:"https://twitter.com/"}),Object(tt.jsx)(et,{type:"discord",link:"https://discord.com/"}),Object(tt.jsx)(et,{type:"opensea",link:"https://opensea.io/"})]})]}),Object(tt.jsxs)("div",{className:"main",children:[Object(tt.jsx)("div",{className:"inner",children:Object(tt.jsx)("div",{className:"slideImage",children:Object(tt.jsx)("img",{src:"https://picsum.photos/400/500?random=1"})})}),Object(tt.jsxs)("div",{className:"inner",children:[Object(tt.jsxs)("div",{className:"flex justify-center  sm:block",children:["               ",Object(tt.jsx)("p",{className:"connectHeader",children:"YUMI"})]}),Object(tt.jsx)("div",{children:Object(tt.jsxs)(X,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent-text)",padding:"48px 24px",borderRadius:24,width:"75%",margin:"30px auto",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(tt.jsxs)(J,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent)"},children:[n.totalSupply," / ",C.MAX_SUPPLY]}),Object(tt.jsx)($,{style:{textAlign:"center",color:"var(--primary-text)"}}),Object(tt.jsx)(Q,{}),Number(n.totalSupply)>=C.MAX_SUPPLY?Object(tt.jsxs)(tt.Fragment,{children:[Object(tt.jsx)(J,{style:{textAlign:"center",color:"var(--accent)"},children:"The sale has ended."}),Object(tt.jsxs)($,{style:{textAlign:"center",color:"var(--accent)"},children:["You can still find ",C.NFT_NAME," on"]}),Object(tt.jsx)(Q,{}),Object(tt.jsx)(at,{target:"_blank",href:C.MARKETPLACE_LINK,children:C.MARKETPLACE})]}):Object(tt.jsxs)(tt.Fragment,{children:[Object(tt.jsxs)(J,{style:{textAlign:"center",color:"var(--accent)"},children:["Price: ",C.DISPLAY_COST," ",C.NETWORK.SYMBOL,"."]}),Object(tt.jsx)(G,{}),Object(tt.jsx)($,{style:{textAlign:"center",color:"var(--accent)"}}),Object(tt.jsx)(Q,{}),""===e.account||null===e.smartContract?Object(tt.jsxs)(X,{ai:"center",jc:"center",children:[Object(tt.jsxs)($,{style:{textAlign:"center",color:"var(--accent)"},children:["Connect to the ",C.NETWORK.NAME," network"]}),Object(tt.jsx)(Q,{}),Object(tt.jsx)(nt,{onClick:function(e){e.preventDefault(),t(function(){var t=Object(v.a)(N.a.mark((function t(e){var n,c,a,r,o,i,s,l,d;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=t.sent,t.next=12,a.json();case 12:if(r=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return k.a.setProvider(i),s=new _.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==r.NETWORK.ID?(d=new k.a(c,r.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(t){e(V(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(B("Change network to ".concat(r.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(B("Something went wrong."));case 31:t.next=34;break;case 33:e(B("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(e){return t.apply(this,arguments)}}()),g()},children:"CONNECT"}),""!==e.errorMsg?Object(tt.jsxs)(tt.Fragment,{children:[Object(tt.jsx)(Q,{}),Object(tt.jsx)($,{style:{textAlign:"center",color:"var(--accent)"},children:e.errorMsg})]}):null]}):Object(tt.jsxs)(tt.Fragment,{children:[Object(tt.jsx)($,{style:{textAlign:"center",color:"var(--accent)"},children:l}),Object(tt.jsx)(q,{}),Object(tt.jsxs)(X,{ai:"center",jc:"center",fd:"row",children:[Object(tt.jsx)(ct,{style:{lineHeight:.4},disabled:r?1:0,onClick:function(t){t.preventDefault(),function(){var t=u-1;t<1&&(t=1),j(t)}()},children:"-"}),Object(tt.jsx)(q,{}),Object(tt.jsx)($,{style:{textAlign:"center",color:"var(--accent)"},children:u}),Object(tt.jsx)(q,{}),Object(tt.jsx)(ct,{disabled:r?1:0,onClick:function(t){t.preventDefault(),function(){var t=u+1;t>20&&(t=20),j(t)}()},children:"+"})]}),Object(tt.jsx)(Q,{}),Object(tt.jsx)(X,{ai:"center",jc:"center",fd:"row",children:Object(tt.jsx)(nt,{disabled:r?1:0,onClick:function(n){n.preventDefault(),function(){var n=C.WEI_COST,c=C.GAS_LIMIT,a=String(n*u),r=String(c*u);console.log("Cost: ",a),console.log("Gas limit: ",r),d("Minting your ".concat(C.NFT_NAME,"...")),o(!0),e.smartContract.methods.mint(u).send({gasLimit:String(r),to:C.CONTRACT_ADDRESS,from:e.account,value:a}).once("error",(function(t){console.log(t),d("Sorry, something went wrong please try again later."),o(!1)})).then((function(n){console.log(n),d("WOW, the ".concat(C.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),t(W(e.account))}))}(),g()},children:r?"Minting":"Mint"})})]})]}),Object(tt.jsx)(q,{})]})}),Object(tt.jsxs)("div",{className:"info",children:[Object(tt.jsx)("p",{className:"text-white text-center text-lg",children:"Furukami is the collection of 5555 flowers that will scent the memories come alive!."}),Object(tt.jsx)("br",{}),Object(tt.jsx)("p",{className:"text-white text-center text-lg",children:"You can mint upto 10 Furukami Flower NFT per transaction, max upto 20 per wallet."}),Object(tt.jsx)("br",{}),Object(tt.jsx)("p",{className:"text-center text-white visible ",children:"\xa9 2022 YUMI"})]})]})]})]})},ot=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,557)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};n(551);w.a.render(Object(tt.jsx)(S.a,{store:Y,children:Object(tt.jsx)(rt,{})}),document.getElementById("root")),ot()}},[[552,1,2]]]);
//# sourceMappingURL=main.6b59c531.chunk.js.map