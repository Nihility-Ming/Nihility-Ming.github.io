/**
 * 固定单位资金管理策略
 */
var ydata = [];
var xdata = [];

function paraData() {
    // 上次的总本金
    var preTotalMoney = totalMoney;

    // 仓位金额
    var positionMoney = totalMoney * position;

    for (let i = 0; i < tradeNum; i++) {
        xdata[i] = i + 1;
        // 如果现在的总本金大于上次的总本金，就重新计算仓位金额
        if (totalMoney > preTotalMoney) {
            positionMoney = totalMoney * position;
            preTotalMoney = totalMoney;
        }

        // 交易命中与否
        if(getRndInteger(1,10) <=  parseInt(winRate*10)) {
            // 资金增长
            totalMoney += getRndInteger(winLoseRate_1, winLoseRate_2) * positionMoney;
        } else {
            // 资金减少
            totalMoney -= positionMoney;
        }

        ydata[i] = totalMoney.toFixed(2);
        if (totalMoney < positionMoney) {
            alert("已经爆仓");
            boom = true;
            break;
        }
    }
}
