//console.log(0)
//ane.js 海葵类[构造函数] 26
//1:创建海葵构造函数 aneObj
var aneObj = function(){
    this.x   = [];//所有海葵x
    this.len = [];//所有海葵高度
}
//2:为海葵构造函数添加属性num=50
//将属性和方法添加原型，作用减少内存占用量
//无论 new aneObj();对象 num只有一份
aneObj.prototype.num = 50;
//3:为海葵构造函数添加方法init
aneObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
       this.len[i] = 200+Math.random()*50;
       this.x[i] = i*16+Math.random()*20;
    }
}
//4:为海葵构造函数添加方法draw
aneObj.prototype.draw = function(){
    //1:在画布2保存画笔状态
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";//紫色边线
    ctx2.lineWidth = 20;    //边线宽度
    ctx2.lineCap = "round"; //顶端样式圆角
    ctx2.globalAlpha = 0.5; //透明度
    //2:创建循环
    for(var i=0;i<this.num;i++){
     //3:开始新路径
     ctx2.beginPath();
     //4:移动底端
     ctx2.moveTo(this.x[i],canHeight);
     //5:向上绘制直线
     ctx2.lineTo(this.x[i],canHeight-this.len[i]);
     //6:描边
     ctx2.stroke();
    }
    //7:在画布2恢复画笔状态
    ctx2.restore();
}
//
//6:并且在main.js 创建ane对象并且方法