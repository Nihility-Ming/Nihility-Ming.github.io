// 下拉刷新组件
(function(){
	// 手机webapp端
	if(window.navigator.standalone) {
		var script = document.createElement("script");
		script.src = "/js/pulltorefresh/pulltorefresh.min.js";
		script.addEventListener("load", ()=>{
			PullToRefresh.init({
				onRefresh: function() { 
					window.location.reload();
				}
			});
		},false);
		document.body.appendChild(script);
	}
})();