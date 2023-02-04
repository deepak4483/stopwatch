var start=document.getElementById("start");
var lap=document.getElementById("lap");

var hour=document.getElementById("hour");
var minute=document.getElementById("minute");
var second=document.getElementById("second");
var milisecond=document.getElementById("mili_second");

var totaltime=0;


var timerid=null;
var istimeron=false; //to check whether timer is on or not

start.addEventListener("click",function(){
   
   if(!istimeron)
   {
     start.innerHTML="Stop";
     start.style.backgroundColor="red";
     istimeron=true;

     if(lap.innerHTML=="Reset")
     {
       lap.innerHTML="Lap";
     }

     timerid=setInterval(function()
     {
       totaltime++;
       if(totaltime%100<=9)
       milisecond.innerHTML="0"+totaltime%100;
       else
       milisecond.innerHTML=totaltime%100;
       
       if(parseInt(totaltime/100)<=9 )
       {
         second.innerHTML="0"+parseInt(totaltime/100);
       }
       else
       {
         if(parseInt(totaltime/100)>=60)
        {
         if((parseInt(totaltime/100))%60<=9)
         second.innerHTML="0"+(parseInt(totaltime/100))%60;
         else
         second.innerHTML=(parseInt(totaltime/100))%60;
        }
         else
          second.innerHTML=parseInt(totaltime/100);
       }
        
       if(parseInt(parseInt(totaltime/100)/60)<=9)
       minute.innerHTML="0"+parseInt(parseInt(totaltime/100)/60);
       else
       minute.innerHTML=parseInt(parseInt(totaltime/100)/60);

       if(parseInt(parseInt(totaltime/100)/3600)<=9)
       hour.innerHTML="0"+parseInt(parseInt(totaltime/100)/3600);
       else
       hour.innerHTML=parseInt(parseInt(totaltime/100)/3600);


     },10)
     
   }
   else{
     lap.innerHTML="Reset";
     clearInterval(timerid);
     start.innerHTML="Start";
     start.style.backgroundColor="white";
     istimeron=false;
   }

})
var biglapcontainer=document.createElement("div");
lap.addEventListener("click",function(){


  if(lap.innerHTML==="Reset")
  {
    totaltime=0;
    hour.innerHTML="00";
    minute.innerHTML="00";
    second.innerHTML="00";
    milisecond.innerHTML="00";
    lap.innerHTML="Lap";
    clearlap();
    clearInterval(timerid);
    start.innerHTML="Start";
    start.style.backgroundColor="white";
    istimeron=false;

  }
  else
  {
  var container=document.getElementById("container");
  // console.log(container.children);

  
  var lapcontainer=document.createElement("div");
  lapcontainer.style.backgroundColor="black";
  lapcontainer.style.color="white";
  lapcontainer.style.display="flex";
  // lapcontainer.style.flexDirection="column";
  lapcontainer.style.justifyContent="center";

  for(var i=0;i<=6;i++)
  {
    var t=container.children[i].innerHTML;
    var lb=document.createElement("label");
    lb.style.fontSize="25px";
    lb.innerHTML=t;
    lapcontainer.appendChild(lb);
    
  }
    
  biglapcontainer.appendChild(lapcontainer);
  var h=document.createElement("hr");
  biglapcontainer.appendChild(h);
  document.body.appendChild(biglapcontainer);
  }
})

function clearlap(){
  biglapcontainer.innerHTML="";
}

var clear=document.getElementById("cleardata");
 clear.addEventListener("click",clearlap);