const start=document.getElementById('start');
const stops=document.getElementById('stop');
let hr=document.getElementById('digithr');
let mm=document.getElementById('digitmm');
let ss=document.getElementById('digitss');
const d=new Date();
let year=d.getFullYear();
let month=d.getMonth();
let date=d.getDate();
let newmonth=month+1;
start.addEventListener("click",startfunction);
function startfunction(){
    if(newmonth<10){
        var fulldate=date+'/'+'0'+newmonth+'/'+year;
    }
    else{
        var fulldate=date+'/'+newmonth+'/'+year;
    }
    document.getElementById("date").innerText=fulldate;
    firstinterval=setInterval(function run(){
        let d2=new Date();
        let hours=d2.getHours();
        let minutes=d2.getMinutes();
        let seconds=d2.getSeconds();
        if(hours<10){
            hr.innerText='0'+hours;
        }
        else{
            hr.innerText=hours;
        }
        if(minutes<10){
            mm.innerText='0'+minutes;
        }
        else{
            mm.innerText=minutes;
        }
        if(seconds<10){
            ss.innerText='0'+seconds;
        }
        else{
            ss.innerText=seconds;
        }
    },1000);
    
}

stops.addEventListener("click",stopfunction);
function stopfunction(){
    clearInterval(firstinterval);
    firstinterval=null;
}
