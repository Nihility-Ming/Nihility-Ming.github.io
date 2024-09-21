/**
 * 固定百分比资金管理策略
 */
var ydata = [];
var xdata = [];

function paraData() {
    // 最小仓位金额
    let firstPositionMoney = totalMoney * position;

    for (let i = 0; i < tradeNum; i++) {
        xdata[i] = i + 1;
        // 每次都计算仓位金额
        positionMoney = totalMoney * position;

        // 交易命中与否
        if(getRndInteger(1,100) <=  winRate*100) {
            // 资金增长
            totalMoney += getRndInteger(winLoseRate_1, winLoseRate_2) * positionMoney;
        } else {
            // 资金减少
            totalMoney -= positionMoney;
        }

        ydata[i] = totalMoney.toFixed(2);

        if (totalMoney < firstPositionMoney) {
            alert("已经爆仓");
            boom = true;
            break;
        }
    }
}