var currentUrl=window.location.href,menuItems=document.querySelectorAll(".menu-item .menu-item-link");selectedIndex=-1,currentUrl==window.location.origin+"/"?selectedIndex=0:currentUrl.includes("/%E8%A1%8C%E6%83%85%E5%88%86%E6%9E%90/")?selectedIndex=1:currentUrl.includes(themeMenuUrl2)?selectedIndex=2:currentUrl.includes(themeMenuUrl3)?selectedIndex=3:currentUrl.includes(themeMenuUrl4)?selectedIndex=4:currentUrl.includes(themeMenuUrl5)&&(selectedIndex=5),selectedIndex>-1&&menuItems[selectedIndex].setAttribute("id","selected");