(function(){
	new Valine({
		el: '#vcomments',
		appId: 'bEwOQwy1htkkg1HGPMrYSAfd-gzGzoHsz',
		appKey: 'CMXek5U1SCcLU6k64B05Zo3V',
		meta: ['nick'],
		placeholder: '在这里填写评论内容'
	});

	// 获取要观察的目标元素
	var target = document.getElementById("vcomments");

	var obvCount = 0;
	// 创建一个观察器实例并传入回调函数
	var obvcomments = new MutationObserver(function(mutations) {
		// mutations 是一个数组，包含了所有被观察的元素的变化信息
		mutations.forEach(function(mutation) {
			// 每个 mutation 都描述了一个变化，我们可以根据需要进行处理
			const vpowerRightElement = document.querySelector('.vpower.txt-right');
			// 检查是否找到了元素
			if (vpowerRightElement) {
			  // 找到了元素，移除它
			  vpowerRightElement.remove();
			  obvCount++;
			}

			// 每个 mutation 都描述了一个变化，我们可以根据需要进行处理
			const markdownElement = document.querySelector('a[alt="Markdown is supported"]');
			// 检查是否找到了元素
			if (markdownElement) {
			  // 找到了元素，移除它
			  markdownElement.remove();
			  obvCount++;
			}

			// 每个 mutation 都描述了一个变化，我们可以根据需要进行处理
			const previewElement = document.querySelector('span[title="预览"]');
			// 检查是否找到了元素
			if (previewElement) {
			  // 找到了元素，移除它
			  previewElement.remove();
			  obvCount++;
			}

			// 每个 mutation 都描述了一个变化，我们可以根据需要进行处理
			const buttonElement = document.querySelector('button[title="Cmd|Ctrl+Enter"]');
			// 检查是否找到了元素
			if (buttonElement) {
			  // 找到了元素
			  buttonElement.title = "Ctrl+Enter";
			  buttonElement.style.backgroundColor = 'rgb(81 133 234)';
			  buttonElement.style.color = 'white';
			  buttonElement.style.fontSize = "16px";
			  buttonElement.style.padding="8px 28px";
			  buttonElement.innerHTML = '提 交';
			  obvCount++;
			}

			if(obvCount === 4) {
				// 停止观察
				obvcomments.disconnect();
			}


		});
	});

	// 配置观察选项：
	// childList: 是否观察目标节点的子节点的变化
	// attributes: 是否观察目标节点的属性的变化
	// characterData: 是否观察目标节点的数据的变化
	// subtree: 是否观察目标节点的所有后代节点的变化
	var config = { childList: true, attributes: true, characterData: true, subtree: true };

	// 传入目标节点和观察选项
	obvcomments.observe(target, config);
})();
