//ane2.js 第二个版本海葵
//1:创建构造函数 aneObj
var aneObj = function(){
  this.rootx = [];//起点坐标 x y=600
  //控制点依据起点坐标向上减y x
  this.headx = [];//终点坐标 x
  this.heady = [];//终点坐标 y
  this.amp = [];//海葵摆动幅度 20 25
  this.alpha = 0;//连续变化数值 0.0001 0.003 
}
//2:为构造函数添加属性 num=50
aneObj.prototype.num = 50;
//3:为构造函数添加方法 init
aneObj.prototype.init = function(){
  for(var i=0;i<this.num;i++){
    //初始化起点坐标 
    this.rootx[i] = i*16+Math.random()*20;
    //初始化终点坐标 
    this.headx[i] = this.rootx[i];
    this.heady[i] = canHeight - 200 + Math.random()*50;
    //摆动幅度
    this.amp[i] = 20+Math.random()*20;
  }

}
//4:为构造函数添加方法 draw
aneObj.prototype.draw = function(){
  //1:保存画笔状态 ctx2
  ctx2.save();
  //2:设置描边颜色,宽度,顶端样式,透明度
  ctx2.strokeStyle = "#3b154e";//边线样式
  ctx2.lineWidth = 20;         //边线宽度
  ctx2.lineCap="round";        //顶端样式圆角
  ctx2.globalAlpha = 0.5;      //透明度
  //*3:累加计算非常小数值    46
  this.alpha += 0.0008 * 36;
  //*4:计算-1 ~ 1 数值
  var p = Math.sin(this.alpha);
  //5:创建循环
  for(var i=0;i<this.num;i++){
    //开始一条新路径
    ctx2.beginPath();   
    //重新计算终点x坐标
    this.headx[i] = this.rootx[i]+this.amp[i]*p;
    //6:移动起点坐标
    ctx2.moveTo(this.rootx[i],canHeight);
    //7:绘制贝赛尔曲线
    ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],
      this.heady[i]);
    //8:描边
    ctx2.stroke();
  }
  //10:恢复画笔状态 ctx2
  ctx2.restore();
}
//5:修改index.html
//6:将ane.js 注释,添加ane2.js