var btcPriceChart = null;
var global_btc_price = 0;
(function () {
  var btc_price = document.getElementById("btc_price");
  // btc_price.textContent = "Trends are the cornerstone of trading markets.";
  btc_price.setAttribute("title", "当前比特币价格（单位：美元）");
  btc_price.textContent = "$BTC：-----.-- USD";

  var current = 0.0;
  var symbol = "";

  function openBtcWS() {
    // 获取比特币价格
    const pricesWs = new WebSocket("wss://api.hyperliquid.xyz/ws");

    pricesWs.onopen = function () {
      // 构造官方标准的订阅请求格式
      const subscribeMessage = {
        method: "subscribe",
        subscription: {
          type: "allMids", // 订阅所有代币的中间价
        },
      };

      // 发送给服务器
      pricesWs.send(JSON.stringify(subscribeMessage));
    };

    pricesWs.onmessage = function (msg) {
      try {
        const response = JSON.parse(msg.data);

        // 筛选出价格推送通道（allMids）的数据
        if (response.channel === "allMids" && response.data) {
          const btcPrice = response.data.mids["BTC"];

          if (btcPrice) {
            const price = parseFloat(btcPrice).toFixed(2);
            global_btc_price = price;
            sessionStorage.setItem("btc_price", price);

            if (current == 0.0) {
              btc_price.style.color = "blue";
            } else if (current > price) {
              btc_price.style.color = "red";
              symbol = "↓";
            } else if (current < price) {
              btc_price.style.color = "green";
              symbol = "↑";
            }

            current = price;
            btc_price.textContent = "$BTC：" + price + " USD" + symbol;

            if (btcPriceChart != null) {
              btcPriceChart(price, btc_price.textContent, btc_price.style.color);
            }
          }
        }
      } catch (error) {
        console.error("解析数据失败:", error);
      }
    };

    return pricesWs;
  }

  var ws = openBtcWS();

  window.addEventListener("visibilitychange", (e) => {
    if (window.visibilityState === "hidden") {
      ws.close();
    } else {
      ws = openBtcWS();
    }
  });

  btc_price.style.cursor = "pointer";
  btc_price.addEventListener("click", function () {
    // 在这里添加点击事件的处理逻辑
    window.location.href = "/btc_price.html";
  });
})();
