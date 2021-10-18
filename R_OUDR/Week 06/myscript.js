
//Hover button in Week 04 class work
function changeOn(){
  document.getElementById("faceImage").style.cursor = "pointer";
  document.getElementById("faceImage").src='images/sad.png';
  document.getElementById("faceImage").onmouseout = function() {changeOff()};
}
function changeOff() {
  document.getElementById("faceImage").src='images/happy.png';
}

//form situation in Week 04 class working
function ageDiff() {
  var name = document.getElementById("name").value;
  var year = document.getElementById("year").value;
  var result = (1998 - year);
  document.getElementById("ageDiff").value = result;

  if (result > 1998) {
    result = -result;
  }
}

//button controlling a function in Week 04 class work
// function invert(){
//   document.getElementById("invertButton").style.filter = invert(1);
//   document.getElementById("invertButton").style.filter = invert(0);
// }
