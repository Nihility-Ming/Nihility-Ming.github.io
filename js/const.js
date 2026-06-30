// 比特币艺术照数量
const BTCPicturesCount = 403;

// 预设的加密文章的密码（SHA256)，对应/scripts/encrypt.js里面的明文密码
const MyCorrectPassword = "6f6e71f51e5ecc6118e7734ae86df57fb5d55f8889bdf4dfb416cb3cb12ae786";

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
  TheRateValue = (fxData.rates.CNY - 0.01).toFixed(2);
  return TheRateValue;
};

// 数字格式化
function formatNumber(num, decimals = 2) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
}

// ========================= 下面是经常修改的 =========================

// 最新公告日期
const NewsDate = "2026-06-20 14:30:00";

// 设置比特币减半日期
const HalvingDateString = "2028-04-20 10:30:06";

// 当前区块奖励
const CurrentBlockReward = "3.125";

// 减半后区块奖励
const BlockRewardAfterHalving = "1.5625";

// 周期提示
const cycleConfig = {
  title: "比特币「熊市周期」进度预估",
  startDate: "2025-10-07",
  endDate: "2026-10-07",
  max_title: "比特币「熊市周期」现时最大跌幅",
  max_start_date: "2025-10-06", // 比实际少1天
};
