// 是否点击了跳过按钮
var IS_CLICK_SKIP_A = false;

(function(){
	var opts = {
	  lines: 16, 
	  length: 5,
	  width: 2, 
	  radius: 10,
	  scale: 1, 
	  corners: 1, 
	  speed: 1,
	  rotate: 0, 
	  animation: 'spinner-line-fade-quick',
	  direction: 1, 
	  color: '#ddd', 
	  fadeColor: 'transparent', 
	  top: '310px', 
	  left: '50%', 
	  shadow: '1px 1px 1px #333',
	  zIndex: 2000000000, 
	  className: 'spinner',
	  position: 'absolute',
	};
	var foo = document.querySelector('.cover-content');
	var spinner = new Spinner(opts).spin(foo);
	var cover = document.querySelector(".cover");
	cover.style.opacity = 1.0;
	const now = new Date();
	const month = now.getMonth();
	if(month===0 || month===1 || month===11) {
		if (window.screen.width < 1000) { cover.style.backgroundColor = StatusBarColor; }
		document.querySelector('meta[name="theme-color"]').setAttribute("content", StatusBarColor);
	}
	
	var fadeOut = null;
	
	if (window.screen.width > 1000) {
		var animatedTitle = document.querySelector(".animated-title");
		animatedTitle.style.display = "block";
		
		const btc_price = sessionStorage.getItem("btc_price");
		if(btc_price != null) {
			var animatedBtcprice = document.querySelector(".animated-btcprice");
			animatedBtcprice.innerHTML = `<p>$BTC: ${btc_price}</p><p>$BTC: ${btc_price}</p>`;
			animatedBtcprice.style.display = "block";
		}
	}

	var skipA = document.querySelector(".cover .skip a");
	skipA.onclick = function(){
		IS_CLICK_SKIP_A = true;
		fadeOutFun();
		return false;
	}
	
	setTimeout(function(){
		skipA.style.visibility = 'visible';
	}, 8000);

	window.addEventListener("load", ()=>{

		var time = 0;
		if (window.screen.width > 1000) {
			time = 2000;
		}

		setTimeout(fadeOutFun, time);
	}, false);

	function fadeOutFun(){
		fadeOut = setInterval(coverFadeOut, 20);
		changeStatusBarColor();
	}

	function coverFadeOut(){
		cover.style.opacity -= 0.1;
		if(cover.style.opacity <= 0) {
			clearInterval(fadeOut);
			cover.remove();
			document.body.style.overflow = 'auto';
			//controller.abort(); // 解除禁止触摸事件
		}
	}

	// 修改状态颜色
	var changeStatusBarColor = function(){
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if(scrollTop >= StatusBarColorChangeOffsetValue) {
			return;
		}
		
		var meta = document.querySelector('meta[name="theme-color"]');

		// 定义初始颜色和目标颜色
		var initialColor = InitStatusBarColor;
		var targetColor = StatusBarColor;

		// 定义渐变的时间（多少毫秒后完成渐变）
		var duration = 200;

		function blendColors(color1, color2, ratio) {
		  var c1 = color1.match(/\w\w/g).map(x => parseInt(x, 16));
		  var c2 = color2.match(/\w\w/g).map(x => parseInt(x, 16));

		  var r = Math.round(c1[0] + (c2[0] - c1[0]) * ratio);
		  var g = Math.round(c1[1] + (c2[1] - c1[1]) * ratio);
		  var b = Math.round(c1[2] + (c2[2] - c1[2]) * ratio);

		  var hex = [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");

		  return "#" + hex;
		}

		function changeThemeColor() {
		  var now = Date.now();

		  var ratio = Math.min((now - startTime) / duration, 1);

		  var currentColor = blendColors(initialColor, targetColor, ratio);

		  meta.setAttribute("content", currentColor);

		  if (ratio < 1) {
			requestAnimationFrame(changeThemeColor);
		  }
		}

		var startTime = Date.now();

		changeThemeColor();
	}

	function createVideoBackground() {

		if (window.screen.width < 1000) {
			return;
		}
		
		var url = "/js/cover/pc_video_backgroud.mp4";
		
		const now = new Date();
		const month = now.getMonth();
		if(month===0 || month===1 || month===11) {
			url = "/js/cover/new_year_pc_video_backgroud.mp4";
		}
	
		fetch(url).then(response => {
			if (response.ok) {
			  return response.blob();
			}
			throw new Error('Network response was not ok.');
		}).then(blob => {
			const urlblob = URL.createObjectURL(blob);
			
			// 创建一个 video 元素
			var videoBackground = document.querySelector(".video-background");
			
			// 创建一个 source 元素
			var source = document.createElement("source");
			source.src = urlblob; 
			source.type = "video/mp4";
			
			videoBackground.appendChild(source);
			videoBackground.style.display = "block";
			videoBackground.style.animation = "video-fadeIn 2.5s";
		});
	}
	
	createVideoBackground();
})();