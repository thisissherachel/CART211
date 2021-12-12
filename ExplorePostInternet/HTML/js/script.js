// create an array to store the shapes
let shapesArray = document.getElementsByClassName("shapes");
// For loop to call every element of the array
for (let i = 0; i < shapesArray.length; i++) {
  let block = shapesArray[i]; //the image at the coordinate i of the array
  block.addEventListener(
    //when mouse hovers over the shape
    "mouseover",
    // call a function to make both the text inside the shape and the image become bigger
    (e) => {
      let block = e.target;
      block.style.transform = "scale(1)"; //change the scale
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
        oneChild.style.transform = "scale(1)"; //change the scale
      }
    },
    false
  );

  // make the shape and text become smaller when the mouse leaves the image
  block.addEventListener(
    "mouseleave",
    (e) => {
      let block = e.target;
      block.style.transform = "scale(0.65)"; //change the scale
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
        oneChild.style.transform = "scale(0.65)"; //change the scale
      }
    },
    false
  );
}

// create an array to store the text
let textsArray = document.getElementsByClassName("txt-quotes");
// For loop to call every element of the array
for (let i = 0; i < textsArray.length; i++) {
  let block = textsArray[i]; //the text at the coordinate i of the array
  block.addEventListener(
    //when mouse hovers over the text
    "mouseover",
    // call a function to make both the text inside the shape and the image become bigger
    (e) => {
      let block = e.target;
      block.style.transform = "scale(1)"; //change the scale
      let masterBlock = block.parentNode;
      let oneChild = masterBlock.firstElementChild;
      oneChild.firstElementChild.style.transform = "scale(1)"; //change the scale
    },
    false
  );

  // make the shape and text become smaller when the mouse leaves the text
  block.addEventListener(
    "mouseleave",
    (e) => {
      let block = e.target;
      block.style.transform = "scale(0.65)"; //change the scale
      let masterBlock = block.parentNode;
      let oneChild = masterBlock.firstElementChild;
      oneChild.firstElementChild.style.transform = "scale(0.65)"; //change the scale
    },
    false
  );
}
