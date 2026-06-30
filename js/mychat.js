// 在线聊天组件
// 当前使用的是：Chatra
(function(){
	
const now = new Date();
const month = now.getMonth();
let theColors = null;
if(month===0 || month===1 || month===11) {
	theColors = {
        buttonText: '#fff',
        buttonBg: '#c03'
    }
}

window.ChatraSetup = {
    locale: {
        chat: {
            input: {
                placeholder: '在这里输入消息'
            }
        },
        name: '昵称',
        yourName: '你的昵称',
        messageTypes: {
            joinedFirst: '进入聊天',
            joined: '{{#username}} 现身',
            agentsOffline: '管理员离线'
        }
    },
	colors: theColors,
	chatWidth : 330,
	chatHeight : 570,
	zIndex: 20
};
		
		
})();



(function(d, w, c) {
	w.ChatraID = 'DLTirwYNnHxttCXoh';
	var s = d.createElement('script');
	w[c] = w[c] || function() {
		(w[c].q = w[c].q || []).push(arguments);
	};
	s.async = true;
	s.src = 'https://call.chatra.io/chatra.js';
	if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');

// 自动展开聊天框
(function() {
	var exwcount = localStorage.getItem('exwcount') || 0;
	
	// 每过8小时重置显示1次
	const hour = 8;
	const showNum = 1;
	
	var lastPopupTime = localStorage.getItem('lastPopupExpandWidget');
	if (!lastPopupTime || (Date.now() - lastPopupTime > hour * 60 * 60 * 1000)) {
	  if(exwcount == showNum) {
		localStorage.setItem('exwcount', 0);
		exwcount = 0;
	  }
	  localStorage.setItem('lastPopupExpandWidget', Date.now());
	}

	var exwbool = true;

	// 获取当前页面的完整url
	var url = window.location.href;

	// 排除
	if (url.includes ("/ebook/")) {
		exwbool = false;
	}
	
	// 排除
	if (url.includes ("/contact.html")) {
		exwbool = false;
	}

	// 自动展开组件，在电脑端显示2次
	if(exwbool && window.innerWidth > 1300 && exwcount < showNum) {
		Chatra("expandWidget");
		exwcount++;
		localStorage.setItem('exwcount', exwcount);
	}

})();