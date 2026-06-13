// 比特币艺术照数量
const BTCPicturesCount = 403;

// 预设的加密文章的密码（SHA256)，对应/scripts/encrypt.js里面的明文密码
const MyCorrectPassword = "0714a7b612b0f44f0afedbbd1f798879f9bb083981d88b6b6cedcacc769bcf88";

// 状态栏颜色
const StatusBarColor = (function () {
  const now = new Date();
  const month = now.getMonth();
  if (month === 0 || month === 1 || month === 11) {
    return "#bf0101";
  } else {
    return "#b5d2df";
  }
})();

// 状态栏初始颜色
const InitStatusBarColor = (function () {
  const now = new Date();
  const month = now.getMonth();
  if (month === 0 || month === 1 || month === 11) {
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
const WebsiteDomain = "www.traderpuma.com";

let TheRateValue = 0;
// 美元兑人民币汇率
const USD_TO_CNY = async () => {
  if (TheRateValue !== 0) {
    return TheRateValue;
  }

  const fxResponse = await fetch("https://open.er-api.com/v6/latest/USD");
  const fxData = await fxResponse.json();
  TheRateValue = fxData.rates.CNY;
  return TheRateValue;
};

// ========================= 下面是经常修改的 =========================

// 最新公告日期
const NewsDate = "2025-05-18 14:30:00";

// 设置比特币减半日期
const HalvingDateString = "2028-04-20 10:30:06";

// 当前区块奖励
const CurrentBlockReward = "3.125";

// 减半后区块奖励
const BlockRewardAfterHalving = "1.5625";

// 周期提示
const cycleConfig = {
  title: "比特币【熊市】进度预估",
  startDate: "2025-10-07",
  endDate: "2026-10-07",
};

// 我的Hyperliquid永续合约地址
const MyHyperliquidAddress = "0x7A9a579100b0Ee52560b4dcf1c8d43A7a0C641D6";

// 我的比特币地址
const MyBTCAddress = "bc1p30gdq7k93yz5972tu9myhapclvlzpaekpachgzs3fxv2ktmaf0fs0hf6ul";

// Etherscan API Key
const MyEtherscanAPIKey = "9SHP9Z454FFJYPFWIANBQQAZCQNUDEI9FH";

// ETH钱包地址
const MyETHWalletAddress = "0x02163F1402A84f5a3D8bF6BBdA30946769d0868D";

// 合约钱包的Arbitrum链上USDC地址
const MyHeYueArbitrumUSDCAddress = "0x7A9a579100b0Ee52560b4dcf1c8d43A7a0C641D6";
