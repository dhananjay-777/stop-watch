
  let hour=document.querySelector(".hour");
  let minute=document.querySelector(".minute");
  let second=document.querySelector(".second");
  let button=document.querySelector(".buttons");



  let f=0,flag=0,y;
  
  let start=()=>{
       let time=()=>{
             f++;
             let temp=f;
             second.innerHTML=(f%(60));
             f=Math.floor(f/60);
             minute.innerHTML=(f%(60));
              f=Math.floor(f/60);
             hour.innerHTML=f%60;
             f=temp;
        }
        y=setInterval(time,1000);
  }
  
  let stop=()=>{
        f=0;
        clearInterval(y);
  }

  let toggle=()=>{
      if(flag==0)
      {
          start();
          flag=1;
      }
      else
      {
          stop();
          flag=0;
      }
  }

 button.addEventListener("click",()=>{
      
       toggle();
 });
  
//   let settime=()=>{
//       let date=new Date();
//       hour.innerHTML=date.getHours();
//       minute.innerHTML=date.getMinutes();
//       second.innerHTML=date.getSeconds();
//   }
  //settime();
  //setInterval(settime,500);
//    let date=new Date();
//    console.log(date.getHours());
