//baby.js  保存所有小鱼数据与行为 16
//1:创建小鱼构造方法
var babyObj = function(){
  this.x;           //小鱼坐标
  this.y;
  this.angle;        //小鱼角度
  this.babyEye =  [];//小鱼眼睛图片对象8
  this.babyBody = [];//小鱼身体图片对象20
  this.babyTail = [];//小鱼尾巴图片对象8
}
//2:为小鱼构造方法添加init方法
babyObj.prototype.init = function(){
  //2.1:初始化小鱼坐标
  this.x = canWidth * 0.5;
  this.y = canHeight * 0.5;
  //2.2:初始化小鱼角度
  this.angle = 0;
  //2.3:初始小鱼眼睛图片
  for(var i=0;i<2;i++){
    this.babyEye[i] = new Image();
    this.babyEye[i].src = "src/babyEye"+i+".png";
  }
  //console.log(this.babyEye);
  //2.4:初始化小鱼身体图片
  for(var i=0;i<20;i++){
    this.babyBody[i] = new Image();
    this.babyBody[i].src = "src/babyFade"+i+".png";
  }
  //2.5:初始化小鱼尾巴8张图片 0~7
  for(var i=0;i<8;i++){
    this.babyTail[i] = new Image();
    this.babyTail[i].src = "src/babyTail"+i+".png";
  }
  //console.log(this.babyTail);
}
//3:为小鱼构造方法添加draw方法
babyObj.prototype.draw = function(){
     //1:计算小鱼坐标
     this.x = mom.x+60;//???
     this.y = mom.y;
     //2:保存画笔1状态
     ctx1.save();
     //3:平移原点
     ctx1.translate(this.x,this.y);
     //4:设置小鱼旋转角度
     ctx1.rotate(this.angle);
     //5:绘制小鱼 身体 尾巴 眼睛 9:52
     ctx1.drawImage(this.babyBody[0],-this.babyBody[0].width*0.5,
     -this.babyBody[0].height*0.5);
     ctx1.drawImage(this.babyTail[0],
     -this.babyTail[0].width*0.5+23,
     -this.babyTail[0].height*0.5);
     ctx1.drawImage(this.babyEye[0],
     -this.babyEye[0].width*0.5,
     -this.babyEye[0].height*0.5);
     //6:恢复画笔1状态
     ctx1.restore();
}
//4:将baby.js 添加index.html
//5:并且在main.js 创建小鱼对象并且调用相应方法