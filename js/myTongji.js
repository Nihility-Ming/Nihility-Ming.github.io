(function(){
	/*
	<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
	<script>LA.init({id: "1yxI18dBtpOcAN9I",ck: "1yxI18dBtpOcAN9I"})</script>
	<script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/1yxI18dBtpOcAN9I/quote.js?theme=#808080,#333333,#808080,#808080,#FFFFFF,#1690FF,12.5&f=12&display=0,0,0,1,0,0,0,1"></script>
	*/
	window.addEventListener("load", function(){
		const myTongji = document.getElementById("myTongji");

		const s1 = document.createElement("script");
		s1.setAttribute("charset", "UTF-8");
		s1.setAttribute("id", "LA_COLLECT");
		s1.setAttribute("src", "//sdk.51.la/js-sdk-pro.min.js");
		
		s1.onload = function(){
			if(!LA) { return }
			
			LA.init({id: "1yxI18dBtpOcAN9I",ck: "1yxI18dBtpOcAN9I"});
			
			if(!myTongji) { return }
			
			const s2 = document.createElement("script");
			s2.setAttribute("id", "LA-DATA-WIDGET");
			s2.setAttribute("crossorigin", "anonymous");
			s2.setAttribute("charset", "UTF-8");
			s2.setAttribute("src", "https://v6-widget.51.la/v6/1yxI18dBtpOcAN9I/quote.js?theme=#808080,#333333,#808080,#808080,#FFFFFF,#1690FF,12.5&f=12&display=0,0,0,1,0,0,0,1");
			s2.onload = function(){
				myTongji.insertAdjacentHTML("afterend", "<br />");
			}
			
			myTongji.appendChild(s2);
		}
		
		if(myTongji) {
			myTongji.appendChild(s1);
		} else {
			document.getElementsByTagName("body")[0].appendChild(s1);
		}
	}, false);
	
})();