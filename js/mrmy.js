/** 随机生成名人名言，添加到div#mrmy中去 */
(function () {
  // 拍平后的所有名言大池子
  let flatQuotesPool = [];

  const div = document.getElementById("mrmy");

  if (!div) return;

  div.innerHTML = "<blockquote><p>正在加载信仰语录...</p></blockquote>";
  div.style.cursor = "pointer";

  div.addEventListener("click", function () {
    show();
  });

  // 渲染名言
  function show() {
    if (flatQuotesPool.length > 0) {
      // 直接从大池子里彻底随机选出一个对象
      const length = flatQuotesPool.length;
      const index = Math.floor(Math.random() * length);
      const targetQuote = flatQuotesPool[index];

      // 拼接 HTML 并渲染
      const result = "<blockquote><p>" + targetQuote.sentence + "</p><p>—— " + targetQuote.author + "</p></blockquote>";
      div.innerHTML = result;
    } else {
      div.innerHTML = "<blockquote><p>语录加载中或数据为空，请稍后再试...</p></blockquote>";
    }
  }

  // 发送 HTTP 请求获取 JSON 数据
  fetch("/js/mrmy.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("网络请求错误，无法加载 JSON");
      }
      return response.json();
    })
    .then((mydata) => {
      // 【核心改动】把层级结构全部拆开，平铺进大池子里
      mydata.forEach((item) => {
        const author = item.author;
        item.content.forEach((sentence) => {
          flatQuotesPool.push({
            author: author,
            sentence: sentence,
          });
        });
      });

      show(); // 初始化展示
    })
    .catch((error) => {
      console.error("加载名言失败:", error);
      div.innerHTML = "<blockquote><p>语录加载失败，请检查网络或 JSON 路径。</p></blockquote>";
    });
})();
