(function(){
	if(screen.width < 1200) {
		return;
	}
	
	window.addEventListener("load", function(){
		const manifest = document.createElement("link");
		manifest.setAttribute("rel", "manifest");
		manifest.setAttribute("href", "/webapp/manifest.json");
		document.getElementsByTagName("head")[0].appendChild(manifest);
	}, false);
})();