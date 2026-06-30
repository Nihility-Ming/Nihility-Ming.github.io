// 总本金
var totalMoney = 10000;
let initMoney = totalMoney;

// 仓位（%）
var position = 0.02;

// 胜率
var winRate = 0.3;

// 盈亏比
var winLoseRate_1 = 3;
var winLoseRate_2 = 7;

// 交易次数
var tradeNum = 100;

// 是否爆仓
var boom = false;

// 参与人数
// var peopleNum = 100;

// 处理数据
window.addEventListener("load", ()=>{reloadData();}, false);

// 以下函数返回 min（包含）～ max（包含）之间的数字：
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function formatPercent(num) {
    return (num * 100).toFixed(1) + "%";
}

/**
 * 将数值四舍五入(保留2位小数)后格式化成金额形式
 *
 * @param num 数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.45'
 * @type String
 */
function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        num = num.substring(0,num.length-(4*i+3))+','+
            num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + num + '.' + cents);
}

// 填充图表数据
function fillData() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            boundaryGap: false,
            type: 'category',
            data: xdata,
            name: '次数',

        },
        yAxis: {
            boundaryGap: [0, '100%'],
            type: 'value',
            name: '资金',
            axisLabel: {
                formatter: '{value}',
                align: 'center'
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 10
            },
            {
                start: 0,
                end: 10
            }
        ],
        series: [
            {
                name: '资金',
                data: ydata,
                type: 'line',
                smooth: true
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function reloadData() {
    // 重载参数
    paraData();

    // 填充html表格数据
    document.getElementById("initMoney").innerHTML = formatCurrency(initMoney);
    document.getElementById("position").innerHTML = formatPercent(position);
    document.getElementById("winRate").innerHTML = formatPercent(winRate);
    document.getElementById("winLoseRate").innerHTML = winLoseRate_1 + ':1 ~ ' + winLoseRate_2 + ":1";
    document.getElementById("tradeNum").innerHTML = tradeNum;
    document.getElementById("totalMoney").innerHTML = formatCurrency(totalMoney);

    if (boom == false) {
        /* setTimeout(function(){
            window.location.reload();
        }, 2500) */
    }

    // 填充图表数据
    fillData();
}