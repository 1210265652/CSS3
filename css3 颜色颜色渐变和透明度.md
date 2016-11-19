# 颜色渐变和透明度
## 颜色的透明度
1. rgba() 'a'代表的透明通道，取值范围0-1

    通过改变整体容器的透明度来实现透明，但是他会影响容器里面的内容
    
    opacity:0~1;
    filter:alpha(opacity=0~100)
2. background:transparent
    可以直接使用改值，实现完全透明
3. background-color:hsla(120,65%,75%,0.3)
    色调H，饱和度S，亮度L
## CSS3渐变
### 线性渐变
1. background：linear-gradient(red,blue,yellow)/*标准语法*/
  
2. background：linear-gradient(red 0%,blue 50%,yellow 100%)
   2.1 颜色以及颜色停靠的位置，只需要在颜色的后面写上百分比即可 
        **注意：相应的颜色以及他所对应的位置是一个参数，用空格相隔，多个参数之间用逗号。**
3. 设置渐变的角度
   3.1 background：linear-gradient(to right,red 0%,blue 50%,yellow 100%)
        **通过关键字to 方向设置角度**
   3.2 background：linear-gradient(10deg,red 0%,blue 50%,yellow 100%)
        **通过角度设置**
### 径向渐变
1. background:radial-gradient(red,green, yellow)
2. background:radial-gradient(red 10%,green 50%, yellow 100%)
3. 改变渐变形状，圆和椭圆
   3.1 background:radial-gradient(circle 50px at 20px 30px,red 0%,green 50%,yellow 100%)
       **circle 形状  50px 渐变的区间  at 20px 30px 渐变其实的位置 **
   3.2 background:radial-gradient(ellipse 50px 50px at 20px 30px,red 0%,green 50%,yellow 100%)
       **ellipse 椭圆需要两个值作为渐变区间 **
### 重复渐变
background:repeating-radial-gradient(red,green, yellow)