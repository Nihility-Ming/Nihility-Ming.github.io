!function(){var n=-1!==window.location.href.indexOf("#"),e=1===performance.navigation.type,o=2===performance.navigation.type;function i(){if(!IS_CLICK_SKIP_A){var n=document.querySelector(".navbar").offsetTop;document.querySelector(".weixinCustom")&&(n-=68);var e=window.scrollY,o=Math.abs(n-e),i=n>e?1:-1,t=o/45,a=requestAnimationFrame((function o(){e+=t*i,i>0&&e>=n||i<0&&e<=n?(window.scrollTo(0,n),cancelAnimationFrame(a)):(window.scrollTo(0,e),a=requestAnimationFrame(o))}))}}n||e||o||window.addEventListener("load",(function(){var n=250;window.screen.width>1e3&&(n=2250),setTimeout(i,n)}),!1)}();