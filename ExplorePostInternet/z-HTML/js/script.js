let quotesArray = document.getElementsByClassName("img-quotes");
for (let i = 0; i < quotesArray.length; i++) {
  let img1 = quotesArray[i];
  img1.addEventListener("mouseover", grow);
  img1.addEventListener("mouseleave", normal);
}

function grow(e) {
  e.target.style.transform = "scale(1)";
}

function normal(e) {
  e.target.style.transform = "scale(0.65)";
}
