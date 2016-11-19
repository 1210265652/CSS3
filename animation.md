# 自定义动画
1. 先定义动画的规则 @keyframes  关键帧  手机端加个@-webkit-keyframes
    @keyframes name {
        0%{
            transform:translate(0,0)
        }
        50%{
            transform:translate(100px,0)
        }
        100%{
            transform:translate(200px,0)
        }
    }
    div{
       width:200px;height:200px;background:red;
        animation-name:name;
        animation-duration:2s;   //持续时间
        animation-fill-mode:backwards(默认)/forwards(终止状态)
        animation-play-state:running(默认运行)/paused(暂停)
        animation-iteration-count:infinite; //运行无限次
        animation-direction:normal/alternate(反向);
        animation-delay:5s;     //等待
        animation-timing-function:ease/cubic-bezier(n,n,n,n);
        8个属性简写：（需要哪个写哪个）
        animation:name 2s paused 3s;
    }
    window.onload=function(){
        var div=document.getElementsByClassName("div")[0];
        var div=document.queryselector(".div");
        div.onclick=function(){
            div.style.animationPlayState="running";
        }
    
    
    }


