//game/js/data.js 分数
//1:创建分数构造函数
var dataObj = function(){
   this.fruitNum = 1; //吃了食物数量
   this.double = 1;//吃到双倍分数,橙色食物
   this.score = 0;//分数
}
//2:为分数构造函数添加绘制方法
dataObj.prototype.draw = function(){
    //1:保存画笔状态
    ctx1.save();
    //2:设置文本 颜色 大小 居中
    ctx1.fillStyle = "#fff";
    ctx1.font = "35px SimHei";
    ctx1.textAlign = "center";
    //3:绘制
    var w = canWidth*0.5;
    var h = canHeight*0.5;
   ctx1.fillText("SCORE:"+this.score,w,h-80);
   if(data.score>20000){
    ctx1.fillText("您已经海洋无敌了",w,h-40);
   }
    //4:恢复画笔状态
    ctx1.restore();
}
//3:为分数构造函数添加加分方法
dataObj.prototype.addScore = function(){
  this.score += this.fruitNum * 100 * this.double;
}
//4:将data.js 添加index.html
//5:并且main.js 创建对象并且调用方法
