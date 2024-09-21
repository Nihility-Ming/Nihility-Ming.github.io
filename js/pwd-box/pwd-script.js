window.addEventListener("load", ()=>{
	// 预设的正确密码（SHA256)
	var correctPassword = MyCorrectPassword;
			
	function pwd_sha256(input) {
	  const encryptedText = CryptoJS.SHA256(input).toString();
	  return encryptedText;
	}

	// 获取页面元素
	var overlay = document.getElementById("loginOverlay");
	var password = document.getElementById("llpassword");
	var submit = document.getElementById("llsubmit");
	var pageContent = document.querySelector('.cnt123');
	var encryptContent = document.querySelector('.encryptContent');

	//解密方法
	function Decrypt(word) {
		word = word.replace(/\s+/g, '');
		let md5Hash = CryptoJS.MD5(localStorage.getItem("pwd")).toString();
		let keyHash = md5Hash.substr(8, 16);
		let ivHash = md5Hash.substr(0, 16);

		const key = CryptoJS.enc.Utf8.parse(keyHash);  //十六位十六进制数作为密钥
		const iv = CryptoJS.enc.Utf8.parse(ivHash);   //十六位十六进制数作为密钥偏移量

		let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
		let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
		let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
		let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
		return decryptedStr.toString();
	}

	// 解密html
	function decryptHTML() {
		encryptContent.innerHTML = Decrypt(encryptContent.textContent);
		pageContent.style.display = "block";
		
		// 重新文章图片渲染有关的js
		wrapImageWithFancyBox();
		const el = document.querySelectorAll('img');
		const observer = lozad(el);
		observer.observe();

		var as = document.querySelectorAll("a[href^='http']");
		for(i =0; i<as.length; i++) {
			as[i].setAttribute("target", "_blank");
		}
		
		// article_tree
		article_tree();
		
		document.querySelector(".navbar").scrollIntoView();
	}

	// 检查是否已经登录
	var isLogged = localStorage.getItem("isLogged");
	if (isLogged == correctPassword) {
		// 已经登录，隐藏覆盖层
		overlay.style.display = "none";
		//解密html
		decryptHTML();
	} else {
		// 没有登录
		overlay.style.display = "block";
		pageContent.style.display = "none";
	}

	// 给提交按钮添加点击事件监听器
	submit.addEventListener("click", function() {
		// 获取输入框的值
		var inputPassword = password.value;
		var encryptedText = pwd_sha256(inputPassword);
		// 比较输入密码和正确密码
		if (encryptedText == correctPassword) {
			// 密码正确，隐藏覆盖层
			overlay.style.display = "none";
			document.documentElement.scrollTop = 0;
			
			// 设置登录标志
			localStorage.setItem("isLogged", correctPassword);
			localStorage.setItem("pwd", password.value);
			// 解密html
			decryptHTML();
		} else {
			// 密码错误，弹出警告框
			password.value = "";
			alert("密码错误，请重新输入！");
		}
	});
}, false);