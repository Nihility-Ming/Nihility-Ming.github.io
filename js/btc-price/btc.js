var btcPriceChart = null;

(function(){
	var btc_price = document.getElementById('btc_price');
	btc_price.setAttribute("title", "当前比特币价格（单位：美元）");
	btc_price.textContent = "$BTC：-----.-- USD";

	var current = 0.00;
	var symbol = "";
	
	function openBtcWS() {
		// 获取比特币价格
		const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin');

		pricesWs.onmessage = function (msg) {
			
			const price = parseFloat(JSON.parse(msg.data).bitcoin).toFixed(2);
			sessionStorage.setItem("btc_price", price);
			
			if(current == 0.00) {
				btc_price.style.color = "blue";
			} else if(current > price) {
				btc_price.style.color = "red";
				symbol = "↓"
			} else if(current < price) {
				btc_price.style.color = "green";
				symbol = "↑"
			}
			
			current = price;
			btc_price.textContent = "$BTC：" + price + " USD" + symbol;
			
			if(btcPriceChart != null) {
				btcPriceChart(price, btc_price.textContent, btc_price.style.color);
			}
		}
		
		return pricesWs;
	};
	
	var ws = openBtcWS();
	
	window.addEventListener("visibilitychange", (e) => {
		if (window.visibilityState === "hidden") {
			ws.close();
		} else {
			ws = openBtcWS();
		}
	});

	btc_price.style.cursor = 'pointer';
	btc_price.addEventListener('click', function() {
	  // 在这里添加点击事件的处理逻辑
	  window.location.href = "/btc_price.html";
	});
})();
