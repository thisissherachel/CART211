
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

//game that randomized the image shown
function randomize(){
    var imageShown = Math.floor(Math.random()*19 +1);
    var imageName = 'images/game/art_' + imageShown + '.png'
    document.getElementById('random-art').src=imageName;
}

//button controlling a function in Week 04 class work
// function invert(){
//   document.getElementById("invertButton").style.filter = invert(1);
//   document.getElementById("invertButton").style.filter = invert(0);
// }


function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "inline-block";
}
function myFunction1(imgs) {
  var expandImg1 = document.getElementById("expandedImg1");
  var img1Text = document.getElementById("img1text");
  expandImg1.src = imgs.src;
  img1Text.innerHTML = imgs.alt;
  expandImg1.parentElement.style.display = "inline-block";
}
function myFunction2(imgs) {
  var expandImg2 = document.getElementById("expandedImg2");
  var img2Text = document.getElementById("img2text");
  expandImg2.src = imgs.src;
  img2Text.innerHTML = imgs.alt;
  expandImg2.parentElement.style.display = "inline-block";
}
