!function(){var e=sessionStorage.getItem("startPage");if(null==e)return void sessionStorage.setItem("startPage",window.location.href);if(window.location.href===e)return;const t=null!=document.querySelector(".weixinCustom");var n=function(){const e=document.createElement("a");return e.setAttribute("href","#"),e.setAttribute("id","goBackA"),e.innerHTML="返回上一页",e.style.textIndent="-9999px",e.style.display="block",e.style.borderRadius="50%",e.style.height="60px",e.style.width="60px",e.style.background="url(/images/goBack.png) center center no-repeat",e.style.backgroundColor="rgba(0, 0, 0, 0.6)",e.style.backgroundSize="33px 33px",e.style.position="fixed",e.style.zIndex="555",e.style.left="20px",e.style.top="20px",t&&(e.style.top="80px"),e.addEventListener("mouseover",(function(){e.style.backgroundColor="rgba(0, 0, 0, 0.8)"})),e.addEventListener("mouseout",(function(){e.style.backgroundColor="rgba(0, 0, 0, 0.5)"})),e}();if(n.onclick=function(){return window.history.back(),!1},document.getElementsByTagName("body")[0].appendChild(n),window.screen.width<1e3){var o=!0,i=0;window.addEventListener("scroll",(function(e){t?n.style.top="80px":document.querySelector(".bing-search-sticky")?n.style.top="65px":n.style.top="20px";var s=document.documentElement.clientHeight||document.body.clientHeight,r=document.documentElement.scrollTop||document.body.scrollTop,l=document.documentElement.scrollHeight||document.body.scrollHeight,c=function(){n.style.visibility="visible",n.style.transition="0.4s",n.style.opacity="1"},d=function(){n.style.transition="0.4s",n.style.opacity="0",n.style.visibility="hidden"},a=2===performance.navigation.type;if(o&&a)return c(),void(o=!1);r<=0?c():r+s>=l-50?d():Math.abs(r-i)>=10&&(r>i?d():c()),i=r}))}}();