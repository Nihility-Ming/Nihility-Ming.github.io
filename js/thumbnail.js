(function(){
	// 创建一个数组，存储1到xxx的整数
	var numbers = [];
	for (var i = 1; i <= BTCPicturesCount; i++) {
	  numbers.push(xxxxxpadNumber(i));
	}

	function getRandomImage() {
	  // 如果数组为空，说明已经返回过所有的字符串，返回null
	  if (numbers.length === 0) {
		return null;
	  }
	  // 随机获取数组中的一个索引
	  var index = Math.floor(Math.random() * numbers.length);
	  // 获取对应的元素，并从数组中删除
	  var number = numbers.splice(index, 1)[0];

	  var image = "/btc-pictures/thumbnail/" + number + ".jpg";
	  // 返回字符串
	  return image;
	}

	//获取所有的类为.post-img的HTML元素
	var images = document.getElementsByClassName("list-thumbnail");

	for (var i = 0; i < images.length; i++) {
	  images[i].setAttribute("data-src", getRandomImage());
	}

	function xxxxxpadNumber(number) {
	  return number.toString().padStart(3, '0');
	}
})();
