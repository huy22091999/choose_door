var i1El=document.getElementById("i1");
var i2El=document.getElementById("i2");
var i3El=document.getElementById("i3");
var robot="images/robot.svg";
var beach="images/beach.svg";
var space="images/space.svg"
var im=[robot,space,beach];
var leng=2;
var gOver=false;
var door1=false;
var door2=false;
var door3=false;
var sb=document.getElementById("sb");
var cp=document.getElementById("cp");
var bp=document.getElementById("bp");
var cur=0;
var best=0;
clickImg1 = function ()
{
    if(door1===false)
    {
        var i=Math.round(Math.random()*leng);
        i1El.src=im[i];
        im.splice(i,1);
        leng--;
        door1=true;
        if(leng>=0&&i===0)
        {
            sb.innerHTML="Game over! Play again";
            gOver=true;
            cur=0;
            cp.innerHTML=cur;
        }
        if(leng<0&&i===0&&gOver===false)
        {
            sb.innerHTML="You win! Play again";
            cur++;
            cp.innerHTML=cur;

            if(cur>best)
            {
                best=cur;
                bp.innerHTML=best;
            }
        }
    }
}
clickImg2 = function ()
{
    if(door2===false)
    {
        var i=Math.round(Math.random()*leng);
        i2El.src=im[i];
        im.splice(i,1);
        leng--;
        door2=true;
        if(leng>=0&&i===0)
        {
            sb.innerHTML="Game over! Play again";
            gOver=true;
            cur=0;
            cp.innerHTML=cur;
        }
        if(leng<0&&i===0&&gOver===false)
        {
            sb.innerHTML="You win! Play again";
            cur++;
            cp.innerHTML=cur;
            if(cur>best)
            {
                best=cur;
                bp.innerHTML=best;
            }
        }
    }

}
clickImg3 = function ()
{
    if(door3===false)
    {
        var i=Math.round(Math.random()*leng);
        i3El.src=im[i];
        im.splice(i,1);
        leng--;
        door3=true;
        if(leng>=0&&i===0)
        {
            sb.innerHTML="Game over! Play again";
            gOver=true;
            cur=0;
            cp.innerHTML=cur;
        }
        if(leng<0&&i===0&&gOver===false)
        {
            sb.innerHTML="You win! Play again";
            cur++;
            cp.innerHTML=cur;
            if(cur>best)
            {
                best=cur;
                bp.innerHTML=best;
            }
        }
    }

}
reSet=function ()
{
    door1=false;
    door2=false;
    door3=false;
    i1El.src="images/closed_door.svg";
    i2El.src="images/closed_door.svg";
    i3El.src="images/closed_door.svg";
    leng=2;
    im=[robot,space,beach];
    gOver=false;
    sb.innerHTML="Good luck";
}
i1El.addEventListener("click",clickImg1);
i2El.addEventListener("click",clickImg2);
i3El.addEventListener("click",clickImg3);