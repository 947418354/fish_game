//main.js 
//负责创建画布，画布,调用绘制背景图函数
//1:创建全局变量
//1.1:创建二个变量保存画布
var can1;
var can2;
//1.2:创建二个变量保存画笔
var ctx1;
var ctx2;
//1.3:创建二个变量保存画布宽度和高度
var canWidth;
var canHeight;
//1.4:创建一个变量保存背景图片对象
var bgPic;
//1.5:创建一个变量保存海葵对象
var ane;
//1.6:创建一个变量保存食物对象
var fruit;
//1.7:创建一个变量保存大鱼对象
var mom;
//1.8:创建二个变量保存鼠标位置
var mx;
var my;
//1.9:创建一个变量保存分数对象
var data;
//1.10:创建一个变量保存小鱼对象
var baby;

  //全局函数
  //两点间距离
  function pointl(x1,y1,x2,y2){
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
  }
//2:创建第一个执行函数game 入口函数
function game(){
  init();
  gameloop();
}
//3:创建一个函数init      初始化函数
function init(){
  //3.1:对画布 画笔 画布宽度高度赋值
  can1 = document.getElementById("can1");
  can2 = document.getElementById("can2");
  ctx1 = can1.getContext("2d");
  ctx2 = can2.getContext("2d");
  canWidth = can1.width;
  canHeight = can1.height;
  //3.2:创建背景画图对象
  bgPic = new Image();
  bgPic.src = "src/background.jpg";
  //3.3:创建海葵对象并且调用相关方法
  ane = new aneObj();
  ane.init();
  //3.4:创建食物对象并且调用相关方法
  fruit = new fruitObj();
  fruit.init();
  //3.5:创建大鱼对象并且调用初始化方法
  mom = new momObj();
  mom.init();
  //3.6:为画布1绑定鼠标移动事件,如果事件触发
  //调用handleMove函数
  can1.addEventListener("mousemove",handleMove,false)
  //3.7:创建分数对象
  data = new dataObj();
  //3.8:创建小鱼对象,并且调用初始化方法
  baby = new babyObj();
  baby.init();
    //3.8:创建小鱼对象,并且调用初始化方法
  baby = new babyObj();
  baby.init();
  
 
    //周期定时器周期性创建大鱼
    bigfish=[];
    bigfishn=0;
    setInterval(function(){
      bigfish[bigfishn]=new bigfishObj();
      bigfish[bigfishn].init();
      bigfishn++;
    },1000)
}
//4:创建一个函数gameloop  循环绘制画布内容
function gameloop(){
  //4.1:创建智能定时器调用gameloop
  requestAnimFrame(gameloop);
  //4.2:绘制背景图片
  drawBackground();
  //4.2.1:监听大鱼与食物是否碰撞食物
  momFruitsCollsion();
  //4.3:绘制海葵
  ane.draw();
  //4.3.1:监听画布上食物数量
  fruitMonitor();
  //4.4:绘制食物
  fruit.draw();
  //4.4.1:清除画布1
  ctx1.clearRect(0,0,canWidth,canHeight);
  //4.5:绘制大鱼
  mom.draw();
  //4.6:绘制分数
  data.draw();
  //4.7:绘制小鱼
  // baby.draw();

  //循环绘制大鱼周期性
  for(var i=0;i<bigfish.length;i++){
    if(bigfish[i]!=null){
      bigfish[i].draw();
      //调用eat函数
      if(bigfish[i].eat()==0){  //0 主角吃掉配角
        data.score+=bigfish[i].score/10;
        console.log("++")
        bigfish[i]=null;
      }else{
        //判断大鱼是否超出x界限
        if(bigfish[i].x>900||bigfish[i].x<-100){
          bigfish[i]=null;
        };
      }
    }else{
    }
  };
  // bigfish.forEach((elem,i,arr)=>{
  //   if(elem!=null){
  //     elem.draw();
  //     //调用eat函数
  //     if(elem.eat()==0){  //0 主角吃掉配角
  //       data.score+=elem.score/10;
  //       elem=null;
  //     }else{
  //       //判断大鱼是否超出x界限
  //       if(elem.x>900||elem.x<-100){
  //         elem=null;
  //       };
  //     }
  //   }else{
  //     console.log("找到null")
  //   }
  //     ;
  // });
}
//5:网页加载成功调用game
document.body.onload = game;
//6:在index.html加载main.js

//7:监听鼠标在画布上移动位置
//获取位置赋值 mx my   22
function handleMove(e){
  mx =  e.offsetX;
  my =  e.offsetY;
  //console.log(mx+":"+my);
}