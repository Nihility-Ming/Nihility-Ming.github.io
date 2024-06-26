(function(){
	if (window.screen.width > 1000) {
		// PC 端
		var script = document.createElement("script");
		script.src = "/js/mychat.js";
		document.body.appendChild(script);
	} else {
		// 移动端
		if(localStorage.getItem('online_contact')) {
			var script = document.createElement("script");
			script.src = "/js/mychat.js";
			document.body.appendChild(script);
			
			document.querySelector(".lrtoolbar").style.marginBottom = "95px";
			document.querySelector(".lrtoolbar .lrtoolbar-contact").style.display = "none";
		}
	}
})();
