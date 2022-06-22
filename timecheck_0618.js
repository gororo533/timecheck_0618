

let intertime = 60000;
let counttime_show = 0;
let status = 0; // 0 是還沒開始，1是正在跑

document.getElementById("sentsettime").addEventListener("click" , function(){
  intertime = 60000 * Number(document.getElementById("settimemo").value) + 1000 * Number(document.getElementById("settimese").value);
  alert("update")
  console.log("sus " , intertime  )
  stop_setiner()

  document.getElementById("showtimes").innerHTML = `<p>${ Number(document.getElementById("settimemo").value)}分${Number(document.getElementById("settimese").value)}秒<p>`;
  document.getElementById("start").innerHTML = "start";
})

document.getElementById("settimemo").addEventListener("keypress" , function(e){
  if(e.key === "Enter"){
    document.getElementById("settimese").click()
    console.log("set time mo press")
  }
})
document.getElementById("settimese").addEventListener("keypress" , function(e){
  if(e.key === "Enter")document.getElementById("sentsettime").click()
})


let setinter = 0;
let subsetinter;
let start = document.getElementById("start");
let stop_avid = document.getElementById("stop");
start.addEventListener("click" , function(){
  if(start.innerHTML === "start"){
    start.innerHTML = "restart";  
  }
  counttime_show = 0;
  play_single_sound()
  
})

function play_single_sound(){
  document.getElementById("state").innerHTML = "<p>Working</p>";
  let times = 0;
  console.log("pause");
  showtimes(intertime , ++times)
  setinter = setInterval(function(){
    clearInterval(subsetinter)
    counttime_show = 0;
    times ++ ;
    document.getElementById('audiotag1').pause();
    document.getElementById('audiotag1').currentTime=5;
    document.getElementById('audiotag1').play();
    console.log(times , intertime)
    showtimes(intertime , times)
  },intertime)
  setinter;
}

function showtimes(goal , times){
  let area = document.getElementById("showtimes");
  console.log(goal)
  clearInterval(subsetinter)
  subsetinter = setInterval(function(){
    console.log(counttime_show)
    counttime_show += 1000 ;
    let min = Math.floor((goal - counttime_show)/60000);
    let sen = ((goal - counttime_show)/1000)%60;
    area.innerHTML = `<p>${min}分${sen}秒\t\tfor\t\t${times}</p>`;
  },1000)
}

stop_avid.addEventListener("click" , function(){
  stop_setiner()
})
function stop_setiner(){
  console.log("stopping the interval...")
  document.getElementById("state").innerHTML = "<p>Relaxing</p>";
  document.getElementById('audiotag1').pause();
  clearInterval(setinter);
  clearInterval(subsetinter);
  counttime_show = 0;
}


window.addEventListener("load" , function(){
  document.getElementById('audiotag1').load
  document.getElementById("state").innerHTML = "<p>Relaxing...</p>";
})

let nabtn = document.getElementById("nabtn");
let picarr = ["three lines 1_ccexpress.png" , "cross 1_ccexpress.png"];
let picker = 0;
nabtn.addEventListener("click" , function(){
  document.getElementById("navigation").classList.toggle("active");
  nabtn.classList.toggle("active");
  picker++;
  nabtn.innerHTML = `<img src="${picarr[(picker%2)]}" style="width: 100%; aspect-ratio: 1;">`
  console.log(picarr[(picker%2)]);
})