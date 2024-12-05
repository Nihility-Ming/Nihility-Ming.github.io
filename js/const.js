// 比特币艺术照数量
const BTCPicturesCount = 403;

// 设置比特币减半日期
const HalvingDateString = "2028-04-20 10:30:06";

// 当前区块奖励
const CurrentBlockReward = "3.125";

// 减半后区块奖励
const BlockRewardAfterHalving = "1.5625";

// 预设的加密文章的密码（SHA256)，对应/scripts/encrypt.js里面的明文密码
const MyCorrectPassword = "0714a7b612b0f44f0afedbbd1f798879f9bb083981d88b6b6cedcacc769bcf88";

// 状态栏颜色
const StatusBarColor = (function(){
	const now = new Date();
	const month = now.getMonth();
	if(month===0 || month===1 || month===11) {
		return "#bf0101";
	} else {
		return "#b5d2df";
	}
})();

// 状态栏初始颜色
const InitStatusBarColor = (function(){
	const now = new Date();
	const month = now.getMonth();
	if(month===0 || month===1 || month===11) {
		return "#bf0101";
	} else {
		return "#ffffff";
	}
})();


// 状态栏颜色改变阈值
const StatusBarColorChangeOffsetValue = 350;

// WebApp URL
const WebAppURL = "https://webapp.traderpuma.com/";

// 网站域名
const WebsiteDomain = "www.traderpuma.com"

// 最新公告日期
const NewsDate = "2024-04-30 18:00:00";