(function(){
	// 设置比特币减半日期
	var halvingDate = new Date(HalvingDateString);

	// 获取倒计时div元素
	var jianbanbox = document.querySelector('.jianbanbox');
	jianbanbox.style.cursor = 'pointer';
	jianbanbox.addEventListener('click', function() {
	  // 在这里添加点击事件的处理逻辑
	  window.location.href = "/科研探索/比特币减半机制及其对价格的影响.html";
	});

	// 获取倒计时容器元素
	var countdownContainer = document.getElementById("countdown");
	// 获取日期容器元素
	var dateContainer = document.getElementById("halving-date");
	// 获取当前区块奖励容器元素
	var currentBlockReward = document.getElementById("currentBlockReward");
	// 获取减半后区块奖励容器元素
	var clockRewardAfterHalving = document.getElementById("clockRewardAfterHalving");
	
	currentBlockReward.innerHTML = CurrentBlockReward;
	clockRewardAfterHalving.innerHTML = BlockRewardAfterHalving;

	// 更新倒计时的函数
	function updateCountdown() {
	  // 获取当前日期和时间
	  var currentDate = new Date();

	  // 计算剩余时间（以毫秒为单位）
	  var remainingTime = halvingDate - currentDate;

	  // 如果剩余时间小于等于0，则停止计时器
	  if (remainingTime <= 0) {
		clearInterval(timer);
		countdownContainer.innerHTML = "比特币已经减半！";
		jianbanbox.style.display = "none";
		return;
	  }

	  // 将剩余时间转换为天、小时、分钟和秒
	  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

	  // 更新倒计时容器的内容
	  countdownContainer.innerHTML = days + "天 " + hours + "时 " + minutes + "分 " + seconds + "秒";
	  // 更新日期容器的内容
	  dateContainer.innerHTML = halvingDate.toLocaleString();
	}

	// 初始更新倒计时
	updateCountdown();

	// 每秒更新倒计时
	var timer = setInterval(updateCountdown, 1000);
})();