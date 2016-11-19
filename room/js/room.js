window.onload=function(){
    var room=document.querySelector(".room");
    var widths=document.documentElement.clientWidth;
    var heights=document.documentElement.clientHeight;
    var ceil=document.querySelector(".panel:first-child");
    var floor=document.querySelector(".panel:nth-child(5)");
    floor.style.width=ceil.style.width=widths+"px";
    floor.style.height=ceil.style.height=widths+"px";
    floor.style.top=-(widths-heights)+"px";
    room.style.transformOrigin="center center "+widths/2+"px";

    var lastchild=document.querySelector(".panel:nth-child(6)");
    lastchild.style.transform="translate3d(0,0,"+widths+"px)";

    var first=document.querySelector(".panel:nth-child(4)");

    first.onclick=function(){
        room.style.transition="transform 2s ease";
        room.style.transform="translate3d(0,0,-500px)  rotate3d(0,1,0,180deg)";
    }
        var angle=0;
        var angle1=180;
        var flag1 = false;
        document.onmousedown=function(e) {
            var startx=e.clientX;
            var starty=e.clientY;
            document.onmousemove=function(e){
                flag1 = true;
                room.style.transition="none";
                var movex=e.clientX;
                var movey=e.clientY;
                e.preventDefault();
                angle=-(movex-startx);
                room.style.transform="translate3d(0,0,-500px) rotate3d(0,1,0,"+(angle+angle1)+"deg)";
            }
            document.onmouseup=function(){
                if(flag1) {
                    flag1 = false;
                    angle1 += angle;
                }
                angle1+=angle;
                document.onmousemove=null;
                document.onmouseup=null;
            }
            e.preventDefault();
        }
    var flag = true;
    var panel = document.querySelectorAll(".panel");
    for(var i = 0; i < panel.length; i++){
        if(i < panel.length-1){
            panel[i].ondblclick = function(){
                if(flag){
                    room.style.transform = " translateZ(-200px) rotate3d(0,1,0,"+(angle1)+"deg)";
                    flag = false;
                    flag1 = false;
                }else{
                    room.style.transform = " translateZ(-800px) rotate3d(0,1,0,"+(angle1)+"deg)";
                    flag = true;
                    flag1 = false;
                }
            }
        }
    }

}
