// 检测当前是否中国大陆地区，是否需要显示提示框
(function(){
	
	checkArea();
	
	document.addEventListener('visibilitychange', function() {
		if (document.visibilityState === 'visible') {
			// 页面从后台切换到了前台
			console.log('页面已切换到前台');
			checkArea();
		} else {
			// 页面从前台切换到了后台
			console.log('页面已切换到后台');
		}
	});
	
	function checkArea(){
		// 使用第三方API获取IP地址信息
		fetch(`https://api.ip.sb/geoip/`)
		  .then(response => response.json())
		  .then(data => {
			// 检查用户地理位置是否为中国
			if (data.country_code === 'CN') {
			  console.log('用户位于中国地区');
			  alert( '根据您所在地区的政策要求，访问请求已被终止...');
			  location.replace("/html/other/403");
			} else {
			  console.log('用户不位于中国地区');
			}
		  })
		  .catch(error => {
			console.error('获取IP地址地理位置信息时发生错误:', error);
		  });
	}

})();
