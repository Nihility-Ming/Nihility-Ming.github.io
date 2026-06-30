(function(){
	// 处理文章关键字链接
	function articleKeywords(myData) {
		if(myData) {
			const e1 = document.querySelectorAll('#article-content-wrap > p');
			//const e2 = document.querySelectorAll('#article-content-wrap > ol li');
			//const e3 = document.querySelectorAll('#article-content-wrap > ul li');
			const pElements = e1; //[...e1, ...e2, ...e3];
			
			for(var i = 0; i<pElements.length;i++) {
				const pe = pElements[i];
				for(var j=0;j<myData.length;j++) {
					var recordElement = myData[j];
					reg = new RegExp(recordElement.keyword, "");
					if(pe.innerText.includes(recordElement.keyword)) {
						if(recordElement.type == 'link') {
							const uriData = encodeURI(recordElement.data);
							var val = `<a href="${uriData}">${recordElement.keyword}</a>`;
							if(recordElement.data.includes("http")) {
								val = `<a href="${uriData}" target="_blank">${recordElement.keyword}</a>`
							}
							
							pe.innerHTML = pe.innerHTML.replace(reg, val);
						} else if(recordElement.type == 'info') {
							pe.innerHTML = pe.innerHTML.replace(reg, `<a href="#"><span onclick="alert('${recordElement.data}');return false;">${recordElement.keyword}</span></a>`);
						}
					}
				}
			}
		}
	}

	//发送HTTP请求获取文章关键字json
	fetch('/js/article-keyword/article-keyword.json')
	  //将响应转换为JSON对象
	  .then((response) => response.json())
	  .then((mydata) => {
		articleKeywords(mydata);
	  });
})();