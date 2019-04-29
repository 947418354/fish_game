//game/js/collsion.js 完成碰撞检测
//1:创建函数 momFruitsCollsion 检测 39
//  大鱼与食物是否发生碰撞
function momFruitsCollsion(){
   //1:创建循环，循环所有食物
   for(var i=0;i<fruit.num;i++){
    //2:判断当前食物是否是活动状态
    if(fruit.alive[i]){
     //3:计算当前食物与大鱼之间距离 52
     var len = calLength2(
       fruit.x[i],fruit.y[i],
       mom.x,mom.y);
     //4:如果当前食物与大鱼之间距离小于900像素
     //  实际距离小于30
     //5:当前食物状态 alive=false
     if(len < 900){
       fruit.alive[i] = false;
       //吃了食物加分
       //1:判断食物类型 橙色 蓝色
       if(fruit.fruitType[i]=="blue"){
         data.double = 1;
       }else{
         data.double = 2;
       }
       //2:加分
       data.addScore();
     } 
    }
   } 
}
//2:将collsion.js 添加index.html中
//3:在main.js gameloop 调用此函数