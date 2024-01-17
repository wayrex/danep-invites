let launchDate=new Date("February 10, 2024 12:00:00").getTime(),inicio=setTimeout(tick,1e3),timer=setInterval(tick,1e3);function tick(){let e=(new Date).getTime(),t=launchDate-e;if(t>0){let e=Math.floor(t/864e5);e<10&&(e="0"+e);let o=Math.floor(t%864e5/36e5);o<10&&(o="0"+o);let l=Math.floor(t%36e5/6e4);l<10&&(l="0"+l);let i=Math.floor(t%6e4/1e3);i<10&&(i="0"+i);
let n=`${e} : ${o} : ${l} : ${i}`;
let days=`${e}`;
let hours=`${o}`;
let minutes=`${l}`;
let seconds=`${i}`;
// document.querySelector(".countdown2").innerText=n;
document.querySelector(".countdown2 #days").innerText=days;
document.querySelector(".countdown2 #hours").innerText=hours;
document.querySelector(".countdown2 #minutes").innerText=minutes;
document.querySelector(".countdown2 #seconds").innerText=seconds}}