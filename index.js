function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


function clock() {

   var d= new Date();
   var h = addZero(d.getHours());
   var m = addZero(d.getMinutes());
   var s = addZero(d.getSeconds());

   document.getElementById('hours').innerHTML=h;
   document.getElementById('minutes').innerHTML=m;
   document.getElementById('seconds').innerHTML=s;

   var t = setTimeout(clock, 500);
}
