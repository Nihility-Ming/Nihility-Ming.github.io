(function(){
	var myFrame = document.querySelector("#myFrame");
	
	if(window.navigator.standalone) {
		myFrame.src = "/";
	} else {
		myFrame.src = "/install.html";
	}
	
	document.body.addEventListener('touchmove', function(e) {
		e.preventDefault(); //阻止默认的滚动行为
	}, { passive: false }); //passive 参数不能省略，用来兼容ios和android
	
	window.addEventListener("load",function(){
		var meta = document.querySelector('meta[name="theme-color"]');
		meta.setAttribute("content", StatusBarColor);
	},false);
	
	// 监听 iframe 的加载事件
	myFrame.addEventListener("load", function () {
		// 获取 iframe 内部的 title 标签内容
		var iframeTitle = myFrame.contentDocument.title;

		// 设置到父页面的 title
		document.title = iframeTitle;
	});
})();