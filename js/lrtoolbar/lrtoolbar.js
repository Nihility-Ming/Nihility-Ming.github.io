(function(){
	var lrtoolbar = document.querySelector(".lrtoolbar");
	var contribute = document.querySelector(".lrtoolbar-contribute");
	var share = document.querySelector(".lrtoolbar-share");
	var appstore = document.querySelector(".lrtoolbar-appstore");
	
	// 滚动到页面顶部功能
	(function(){
		var topA = document.querySelector(".lrtoolbar-top a");
		
		topA.addEventListener("click", function(e){
			window.scrollTo({top: 0, behavior: "smooth"});
			e.preventDefault();
		}, false);
		
		var showAndHidden = function() {
		  // 获取窗口的滚动高度
		  var scrollTop = window.scrollY;			
	      if (scrollTop <= 0) {
			topA.style.backgroundColor = "#bbbbbb";
	      } else {
			topA.style.backgroundColor = "rgb(87, 167, 115)";
	      }
		};
		
		window.addEventListener("load", showAndHidden);
	    window.addEventListener("scroll", showAndHidden);
	})();

	// 当前设备是移动设备，下滑隐藏，上滑显示
	if (window.screen.width < 1000) {
		
		var scrollTopLast = 0;
		var threshold = 10; // 滚动距离的阈值

		window.addEventListener("scroll", function(e) {
		  var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		  var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
		  
		  var lshow = function(){
			lrtoolbar.style.visibility = "visible";
			lrtoolbar.style.transition = "0.4s";
			lrtoolbar.style.opacity = "1";
		  };
		  
		  var lhidden = function(){
			lrtoolbar.style.transition = "0.4s";
			lrtoolbar.style.opacity = "0";
			lrtoolbar.style.visibility = "hidden";
		  };
		  
		  if(scrollTop <= 0) {
			lshow();
		  } else if (scrollTop + clientHeight >= scrollHeight-100) {
			lhidden();
		  } else {
			  // 判断滚动距离是否超过阈值
			  if (Math.abs(scrollTop - scrollTopLast) >= threshold) {
				  if (scrollTop > scrollTopLast) {
					lhidden();
				  } else {
					lshow();
				  }
			  }
		  }
		  // 更新上一次滚动距离
		  scrollTopLast = scrollTop;
		});
	}

	function isShowAppStoreIcon() {
		
		const b1 = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
		
		const b2 = !window.navigator.standalone;
		
		var currentUrl = window.location.href;
		var suffix = "install";
		// 判断当前网址是不是"install"或"install.html"
		const b3 = !(currentUrl.endsWith(suffix) || currentUrl.endsWith(suffix + '.html'));
		
		return b1&&b2&&b3;
	}
	
	if(isShowAppStoreIcon()) {
		appstore.style.display = "block";
	}
	
	share.onclick = function(){
		return false;
	};
	
	// 创建一个ClipboardJS实例
	var clipboard = new ClipboardJS(share, {
	  // 定义复制的文本来源
	  text: function() {
		var suffix = "install";
		// 判断当前网址是不是"install"或"install.html"
		if(currentUrl.endsWith(suffix) || currentUrl.endsWith(suffix + '.html')) {
			return WebAppURL;
		} else {
			// 返回当前网页的网址
			return window.location.href;
		}
	  }
	});

	// 监听复制成功事件
	clipboard.on("success", function(e) {
	  // 弹出提示框
	  alert("本页链接已复制，快分享给你的朋友！");
	});

	// 监听复制失败事件
	clipboard.on("error", function(e) {
	  // 弹出提示框
	  alert(`本站网址【${WebsiteDomain}】，快分享给你的朋友！`);
	});
	
	// 最新网站公告显示红点功能
	window.addEventListener("pageshow", function(event){
		var lastNewsDate = localStorage.getItem('NewsDate');
		var newsA = document.querySelector(".lrtoolbar-news a");
		if(!lastNewsDate || lastNewsDate !== NewsDate) {
			newsA.classList.add("badge");
		} else {
			newsA.classList.remove("badge");
		}
	});
})();
