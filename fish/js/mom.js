//大鱼类 mom.js
//1:创建大鱼构造方法 momObj
var momObj = function(){
   this.x;     //大鱼位置
   this.y;
   this.angle;       //大鱼游动角度
   this.bigEye  = [];//大鱼眼睛二张图片对象
   this.bigBody = [];//大鱼身体八张图片对象
   this.bigTail = [];//大鱼尾巴八张图片对象


   //完成大鱼眼睛睁开闭合效果 0 1
   this.bigEyeStart = 0;  //眼睛计时开始
   this.bigEyeEnd = 3000; //眼睛计时结束
   this.bigEyeIdx = 0;    //眼睛下标

   //完成大鱼尾巴摆动 0 1 2 3 4 5 6 7
   this.bigTailStart = 0; //尾巴计时开始
   this.bigTailEnd = 100; //尾巴计时结束
   this.bigTailIdx = 0;   //尾巴下标
}
//2:为大鱼构造方法添加方法 init
momObj.prototype.init = function(){
   //2.1:初始化大鱼位置画图中心
   this.x = canWidth * 0.5;
   this.y = canHeight * 0.5;
   //2.2:初始化大鱼角度0
   this.angle = 0;
   //2.3:初始化大鱼眼睛图片对象
   for(var i=0;i<2;i++){
     this.bigEye[i] = new Image();
     this.bigEye[i].src = "src/bigEye"+i+".png";
   }
   //2.4:初始化大鱼身体图片对象
   for(var i=0;i<8;i++){
     this.bigBody[i] = new Image();
     this.bigBody[i].src = "src/bigSwim"+i+".png";
   }
   //console.log(this.bigBody);
   //2.5:初始化大鱼尾巴图片对象
   for(var i=0;i<8;i++){
     this.bigTail[i] = new Image();
     this.bigTail[i].src = "src/bigTail"+i+".png"
   }
}
//3:为大鱼构造方法添加方法 draw
momObj.prototype.draw = function(){
   //3.01:将鼠标位置赋值大鱼位置
   this.x = mx;
   this.y = my;

   //3.02:完成大鱼眼睛图片切换
   //大眼睛计时开始,完成累加
   this.bigEyeStart+=10; 
   //当计算开始时间大于结束时束
   if(this.bigEyeStart > this.bigEyeEnd){
     //切换大鱼眼睛下标
     this.bigEyeIdx = (this.bigEyeIdx+1)%2;
     //将计算开始时间清空
     this.bigEyeStart = 0;
     //修改大鱼睁眼睛时间 0   3000
     if(this.bigEyeIdx==0){
       this.bigEyeEnd = 3000;
     }
     //修改大鱼闭眼睛时间 1   300
     if(this.bigEyeIdx == 1){
       this.bigEyeEnd = 300;
     }
   }

   //3.03 大鱼尾巴切换
   //大鱼尾巴计时累加
   this.bigTailStart+=10;
   //如果大鱼尾巴计算开始时间大于结束时
   if(this.bigTailStart>this.bigTailEnd){
     //切换大鱼尾巴下标
     this.bigTailIdx = (this.bigTailIdx+1)%8;
     //将计算开始时间清空
     this.bigTailStart = 0;
   }


   //3.1:保存画笔1状态
   ctx1.save();
   //3.2:将画布原点平移大鱼坐标
   //大鱼旋转轴心自己身上
   ctx1.translate(this.x,this.y);
   //3.3:指定大鱼旋转角度
   ctx1.rotate(this.angle);
   //3.4:绘制大鱼身体第一张图片 0 11
   ctx1.drawImage(this.bigBody[0],
    -this.bigBody[0].width*(data.score/10000+1)*0.5,
    -this.bigBody[0].height*(data.score/10000+1)*0.5,
    this.bigBody[0].width*(data.score/10000+1),
    this.bigBody[0].height*(data.score/10000+1));
   //3.5:绘制大鱼尾巴第一张图片  45
   ctx1.drawImage(this.bigTail[this.bigTailIdx],
    -this.bigTail[this.bigTailIdx].width*(data.score/10000+1)*0.5+30*(data.score/10000+1),
    -this.bigTail[this.bigTailIdx].height*(data.score/10000+1)*0.5,
    this.bigTail[this.bigTailIdx].width*(data.score/10000+1),
    this.bigTail[this.bigTailIdx].height*(data.score/10000+1));
  //3.6:绘制大鱼眼睛第一张图片
  ctx1.drawImage(this.bigEye[this.bigEyeIdx],
  -this.bigEye[this.bigEyeIdx].width*(data.score/10000+1)*0.5,
  -this.bigEye[this.bigEyeIdx].height*(data.score/10000+1)*0.5,
  this.bigEye[this.bigEyeIdx].width*(data.score/10000+1),
  this.bigEye[this.bigEyeIdx].height*(data.score/10000+1));
  //3.7:恢复画笔1状态
   ctx1.restore();
  //#在main.js 清除画布
}
//4:将mom.js 添加 index.html中
//5:在main.js 创建对象并且调用相应方法