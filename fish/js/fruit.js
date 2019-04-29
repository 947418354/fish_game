//fruit.js
//1:创建食物构造函数 fruitObj
var fruitObj = function(){
   //1.1:坐标 x y
   this.x = [];
   this.y = [];
   //1.2:食物类型 蓝色 橙色
   this.fruitType = [];//"blue""orange"
   //1.3:宽度     出生 0~14
   this.l = [];
   //1.4:速度     出生速度 向上漂浮
   this.spd = [];
   //1.5:两张图片
   this.blue = new Image();
   this.orange = new Image();
}
//2:为食物构造函数添加数量 num=30
fruitObj.prototype.num = 30;
//3:为食物构造函数添加方法 init
fruitObj.prototype.init = function(){
   for(var i=0;i<this.num;i++){
     //食物位置在画布随机分配
     this.x[i]=Math.random()*canWidth;
     this.y[i]=Math.random()*canHeight;
     //食物宽度 0 
     this.l[i]=0;
     //食物类型 
     this.fruitType[i]=Math.random()<0.9?"blue":"orange";
     //食物速度 出生生长速度 向上漂浮
     this.spd[i] = Math.random()*0.19+0.02;
   }
   //下载食物图片
   this.blue.src = "src/blue.png";
   this.orange.src = "src/fruit.png";
}
//4:为食物构造函数添加绘制方法 draw
fruitObj.prototype.draw = function(){
   //4.1:创建循环
   for(var i=0;i<this.num;i++){
    //4.2:判断食物类型 blue orange
    if(this.fruitType[i]=="blue"){
       var pic = this.blue;
    }else{
       var pic = this.orange;
    }
    //4.3:生长过程 this.l[i]+=this.spd[i]
    //4.4:向上漂浮 this.y[i]-=this.spd[i]
    if(this.l[i]<=14){
      this.l[i]+=this.spd[i];
    }else{
      this.y[i]-=this.spd[i]*5;
    }
    //4.5:绘制图片
    ctx2.drawImage(pic,this.x[i],this.y[i],
      this.l[i],this.l[i]);
   }
}
//5:将fruit.js 添加 index.html
//6:在main.js 创建对象并且调用相关方法