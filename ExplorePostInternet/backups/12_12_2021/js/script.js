// create an array to store the elements of the quote-closed class
let quotesArray = document.getElementsByClassName("img-quotes");
// For loop to call every element
for (let i = 0; i < quotesArray.length; i++) {
  let block = quotesArray[i];
  block.addEventListener(
    "mouseover",
    (e) => {
      let block = e.target;
      block.style.transform = "scale(1)";
    },
    false
  );

  block.addEventListener(
    "mouseleave",
    (e) => {
      let block = e.target;
      block.style.transform = "scale(0.65)";
    },
    true
  );
}
