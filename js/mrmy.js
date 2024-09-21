/** 随机生成名人名言，添加到div#mrmy中去 */
(function(){
	var data;

	var div = document.getElementById("mrmy");
	div.addEventListener("click", function() {
	  show();
	});
		
	//定义一个函数，用于从一个数组中随机选择一个元素并返回
	function randomChoice(array) {
	  //获取数组的长度
	  var length = array.length;
	  //生成一个随机的索引，范围是0到length-1
	  var index = Math.floor(Math.random() * length);
	  //返回数组中对应索引的元素
	  return array[index];
	}

	// 处理
	function show() {
		if(data) {
			//从mydata中随机选择一个对象，赋值给quote
			var quote = randomChoice(data);

			//从quote中获取author和content属性的值
			var author = quote.author;
			var content = quote.content;

			//从content中随机选择一条名言，赋值给sentence
			var sentence = randomChoice(content);

			//拼接名言和作者，用“——”分隔，赋值给result
			var result = "<blockquote><p>" + sentence + "</p><p>" + "—— " + author + "</p></blockquote>";
			
			div.innerHTML = result;
		}
	}


	//发送HTTP请求
	fetch('/js/mrmy.json')
	  //将响应转换为JSON对象
	  .then((response) => response.json())
	  //将JSON对象赋值给mrmy变量
	  .then((mydata) => {
		data = mydata;
		show();
	  });
})();
