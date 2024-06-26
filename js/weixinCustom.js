(function(){
	// 判断用户是否使用微信浏览器
	function isWeixin() {
	  var ua = navigator.userAgent.toLowerCase();
	  if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	  } else {
		return false;
	  }
	}

	// 提示用户在默认浏览器中打开
	function openDefaultBrowserTips() {
		//创建一个h4元素
		var h4 = document.createElement("h4");
		h4.setAttribute("class", "weixinCustom");
		//设置h4元素的样式
		h4.style.margin = "0";
		h4.style.color = "white";
		h4.style.padding = "10px 20px";
		h4.style.backgroundColor = "red";
		h4.style.position = 'fixed';
		h4.style.top = '0';
		h4.style.left = '0';
		h4.style.width = window.screen.width;
		h4.style.zIndex= '20';
		//设置h4元素的文本内容
		h4.textContent = "请点击右上角按钮“在浏览器中打开”本页面，否则部分链接将无法访问！";
		//获取body元素
		var body = document.body;
		//将h4元素插入到body元素的最前面
		body.insertBefore(h4, body.firstChild);
		body.style.marginTop = '55px';
	}

	// 如果是微信浏览器
	if (isWeixin()) {
		openDefaultBrowserTips();
	}
})();
