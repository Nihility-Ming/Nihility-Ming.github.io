function btcFangXiang(x, y, z) {
  if(x=='上涨') x+=' ↑';
  if(x=='下跌') x+=' ↓';
  if(x=='横盘') x+=' ≈';
  
  if(y=='上涨') y+=' ↑';
  if(y=='下跌') y+=' ↓';
  if(y=='横盘') y+=' ≈';
  
  if(z=='上涨') z+=' ↑';
  if(z=='下跌') z+=' ↓';
  if(z=='横盘') z+=' ≈';
  
  var fxdayElement = document.getElementById('fxday');
  fxdayElement.innerHTML = x;
  
  var fxweekElement = document.getElementById('fxweek');
  fxweekElement.innerHTML = y;
  
  var fxmoonthElement = document.getElementById('fxmoonth');
  fxmoonthElement.innerHTML = z;
  
  var outputElement = document.getElementById('btcfangxiang');
  outputElement.style.cursor = 'pointer';
  outputElement.addEventListener('click', function() {
    // 在这里添加点击事件的处理逻辑
    window.location.href = "/direction.html";
  });
}