// create an array to store the elements of the quote-closed class
let quotesArray = document.getElementsByClassName("shapes");
// For loop to call every element
for (let i = 0; i < quotesArray.length; i++) {
  let block = quotesArray[i];
  block.addEventListener(
    "mouseover",
    (e) => {
      let block = e.target;
      block.style.transform = "scale(1)";
      let masterBlock = block.parentNode.parentNode;
      let oneChild = masterBlock.firstElementChild;
      while (
        !(
          oneChild.matches(".txt-quotes") ||
          oneChild === masterBlock.lastElementChild
        )
      ) {
        oneChild = oneChild.nextElementSibling;
      }
      if (oneChild.matches(".txt-quotes")) {
        oneChild.style.transform = "scale(1)";
      }
    },
    true
  );

  block.addEventListener(
    "mouseleave",
    (e) => {
      let block = e.target;
      block.style.transform = "scale(0.65)";
      let masterBlock = block.parentNode.parentNode;
      let oneChild = masterBlock.firstElementChild;
      while (
        !(
          oneChild.matches(".txt-quotes") ||
          oneChild === masterBlock.lastElementChild
        )
      ) {
        oneChild = oneChild.nextElementSibling;
      }
      if (oneChild.matches(".txt-quotes")) {
        oneChild.style.transform = "scale(0.65)";
      }
    },
    true
  );
}
