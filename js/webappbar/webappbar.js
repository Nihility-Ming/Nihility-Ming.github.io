(function(){
	var webappbar = document.querySelector(".webappbar");
	var container = document.querySelector(".container");
	
	// 判断是否是iOS系统
	function isIOS() {
		let u = navigator.userAgent;
		return / (iPhone|iPad|iPod|iOS)/i.test(u);
	}
	
	// 不是就结束执行
	if(!isIOS()) return;
	
	if(window.navigator.standalone) {
		webappbar.style.visibility = "hidden";
	} else {
		var currentUrl = window.location.href;
		var suffix = "install";
		// 判断当前网址是不是"install"或"install.html"
		if(currentUrl.endsWith(suffix) || currentUrl.endsWith(suffix + '.html')) {
			webappbar.style.visibility = "hidden";
		} else {
			webappbar.style.visibility = "visible";
			container.style.marginTop = "70px";
		}
	}
})();