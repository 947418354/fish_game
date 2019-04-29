//fruit2.js
//1:创建食物构造函数fruitObj
var fruitObj = function(){
   //1.1:食物坐标 xy
   this.x = [];
   this.y = [];
   //1.2:食物状态 true false
   this.alive = [];
   //1.3:食物类型 "blue""orange"
   this.fruitType = [];
   //1.4:食物宽度 0
   this.l = [];
   //1.5:食物速度 生长速度 向上漂浮
   this.spd = []; 
   //1.6:二张图片对象
   this.blue = new Image();
   this.orange = new Image();
   //1.7:海葵下标 食物出生在某个海葵头顶
   this.aneNo = [];
}

//2:为构造函数添加属性num=30
fruitObj.prototype.num = 30;
//3:为构造函数添加方法init
fruitObj.prototype.init = function(){
  //食物出生操作,赋值
  for(var i=0;i<this.num;i++){
    //初始化时 食物不可见
    this.alive[i] = false; //---start 
    this.x[i] = 0;
    this.y[i] = 0;//在出生时指定
    this.l[i] = 0;
    this.fruitType[i] = "";//---end
    this.spd[i] = Math.random()*0.017+0.3;
  }
  this.blue.src = "src/blue.png";
  this.orange.src = "src/fruit.png";
}
//4:为构造函数添加方法draw
fruitObj.prototype.draw = function(){
     //4.1:创建循环
    for(var i=0;i<this.num;i++){
     //4.2:判断当前食物是否活动状态 true
     if(this.alive[i]){
     //4.3:判断食物类型 blue orange
     if(this.fruitType[i]=="blue"){
       var pic = this.blue;
     }else{
       var pic = this.orange;
     }
     //4.4:判断生长
     //4.5:向上漂浮
     if(this.l[i]<14){
       this.l[i] += this.spd[i];
       var no = this.aneNo[i];
       this.x[i] = ane.headx[no];
       this.y[i] = ane.heady[no];
     }else{
       this.y[i] -= this.spd[i]*5;
     }
     //4.6:绘制食物
     ctx2.drawImage(pic,this.x[i],this.y[i],
    this.l[i],this.l[i]);
     //4.7:当前食物漂浮出画布就将当前食物状态
     //    false
     if(this.y[i] < 0){
       this.alive[i] = false;
     }
     }
    }
}
//5:将index.html 原来fruit.js注释
//6:替换fruit2.js 
//7:创建函数功能:监听画布上食物数量
//  如果食物状态是活动但是数量不足15个
function fruitMonitor(){
    //7.1:累加活动食物数量操作
    var sum = 0;
    for(var i=0;i<fruit.num;i++){
       if(fruit.alive[i])sum++;
    }
    //console.log(sum);//0~15    32
    //7.2:判断活动状态食物数量不足15挑一个
    if(sum<15){
      sendFruit();
      return;
    }
}
//8:创建函数:从不活动食物中挑一个食物
function sendFruit(){
    //8.1:挑选第一个不活动食物 15
    for(var i=0;i<fruit.num;i++){
       if(fruit.alive[i]==false){
           //8.2:出生(变为活动状态食物)
           fruit.born(i);
           //8.3:一次只出一个食物
           return;
       }
    }
}
//9:出生:食物活动状态
fruitObj.prototype.born = function(i){
  //9.1:随机查找海葵下标
  var idx = Math.floor(Math.random()*ane.num)
  //9.2:保存海葵下标
  this.aneNo[i] = idx;
  //9.3:赋值当前食物宽度 23
  this.l[i] = 0;
  //9.4:修改当前食物状态 true
  this.alive[i] = true;
  //9.5:赋值食物类型 blue orange
  this.fruitType[i] = Math.random()<0.9?"blue":"orange";
}
//10:在main.js gameloop调用fruitMonitor();


