//baby.js  保存所有小鱼数据与行为 16
//1:创建小鱼构造方法
var bigfishObj = function(){
    this.x;           //小鱼坐标
    this.y;
    this.angle;        //小鱼角度
    this.score;       //大鱼分数
    this.scale        //放大比例
    this.babyEye =  [];//小鱼眼睛图片对象8
    this.babyBody = [];//小鱼身体图片对象20
    this.babyTail = [];//小鱼尾巴图片对象8
    
}
  //2:为小鱼构造方法添加init方法
  bigfishObj.prototype.init = function(){
    //2.1:初始化小鱼坐标
    this.y = Math.random()*600;
    //2.2:初始化小鱼角度
    this.angle = Math.random()*2*Math.PI;
    if(this.angle<Math.PI/2||this.angle>Math.PI*1.5){this.x = canWidth;}
    else{this.x=0;};
    //初始化大鱼属性
    this.score=parseInt(Math.random()*200+1)*100;
    //放大比例
    this.scale=this.score/10000+1
    //2.3:初始小鱼眼睛图片
    for(var i=0;i<2;i++){
      this.babyEye[i] = new Image();
      this.babyEye[i].src = "src/babyEye"+i+".png";
    }
    //console.log(this.babyEye);
    //2.4:初始化小鱼身体图片
    for(var i=0;i<21;i++){
      this.babyBody[i] = new Image();
      this.babyBody[i].src = "src/babyFade"+i+".png";
    }
    //2.5:初始化小鱼尾巴8张图片 0~7
    for(var i=0;i<9;i++){
      this.babyTail[i] = new Image();
      this.babyTail[i].src = "src/babyTail"+i+".png";
    }
    //console.log(this.babyTail);
  }

  //主角和大鱼碰撞事件
  bigfishObj.prototype.eat=function(){
      var l=pointl(this.x,this.y,mom.x,mom.y);
      if(l<(17*this.scale+17*(data.score/10000+1)))
      {
        if(this.score<data.score){
          
          return 0;   //吃,继续长大
        }else{
          alert("您被吃了");
          bigfish=[];
          bigfishn=0;
          data.score=0;
        }
      }
  }
  //3:为小鱼构造方法添加draw方法
  bigfishObj.prototype.draw = function(){
    if(this.angle<Math.PI/2||this.angle>Math.PI*1.5){
       //1:计算小鱼坐标
      //  if(this.x<-100){this=null;bigfishn--;};
       this.x -= 1;//???
       this.y -= Math.tan(this.angle);
       //2:保存画笔1状态
       ctx1.save();
       //3:平移原点
       ctx1.translate(this.x,this.y);
       //4:设置小鱼旋转角度
       ctx1.rotate(this.angle);
       //5:绘制小鱼 身体 尾巴 眼睛 9:52
       ctx1.drawImage(this.babyBody[0],-this.babyBody[0].width*0.5*5/4*this.scale,
       -this.babyBody[0].height*0.5*5/4*this.scale,this.babyBody[0].width*5/4*this.scale,this.babyBody[0].height*5/4*this.scale);
       ctx1.drawImage(this.babyTail[0],
       10*5/4*this.scale,
       -this.babyTail[0].height*0.5*5/4*this.scale,this.babyTail[0].width*5/4*this.scale,this.babyTail[0].height*5/4*this.scale);
       ctx1.drawImage(this.babyEye[0],
       -this.babyEye[0].width*0.5*5/4*this.scale,
       -this.babyEye[0].height*0.5*5/4*this.scale,this.babyEye[0].width*5/4*this.scale,this.babyEye[0].height*5/4*this.scale);
       //6:恢复画笔1状态
       ctx1.restore();
    }else{
      //1:计算小鱼坐标
      // if(this.x>800){this=null;bigfishn--;};
      this.x += 1;//???
      this.y += Math.tan(this.angle);
      //2:保存画笔1状态
      ctx1.save();
      //3:平移原点
      ctx1.translate(this.x,this.y);
      //4:设置小鱼旋转角度
      ctx1.rotate(this.angle+Math.PI);
      //5:绘制小鱼 身体 尾巴 眼睛 9:52
      ctx1.drawImage(this.babyBody[20],
      -this.babyBody[20].width*0.5*5/4*this.scale,
      -this.babyBody[20].height*0.5*5/4*this.scale,this.babyBody[20].width*5/4*this.scale,this.babyBody[20].height*5/4*this.scale);
      ctx1.drawImage(this.babyTail[8],
      -35*5/4*this.scale,
      -this.babyTail[8].height*0.5*5/4*this.scale,
      this.babyTail[8].width*5/4*this.scale,
      this.babyTail[8].height*5/4*this.scale);
      ctx1.drawImage(this.babyEye[0],
      -this.babyEye[0].width*0.5*5/4*this.scale,
      -this.babyEye[0].height*0.5*5/4*this.scale,this.babyEye[0].width*5/4*this.scale,this.babyEye[0].height*5/4*this.scale);
      //6:恢复画笔1状态
      ctx1.restore();
    }
       //位置移动
       
    
  }
  //4:将baby.js 添加index.html
  //5:并且在main.js 创建小鱼对象并且调用相应方法