console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
  basket.push(item);
  return true;
}
console.log("Was the item added?", addItem("apples"));
console.log("What is in the basket now?", basket);
console.log("Was the item added?", addItem("pears"));
addItem("watermelon");
addItem("limes");
console.log("Well what is in the basket now?", basket);

function listItems(basket) {
  for (item of basket) {
    console.log(item);
  }
}
listItems(basket);

function empty(arr) {
  while (arr.length > 0) {
    arr.pop();
  }
}

empty(basket);
console.log("Is the array empty now?", basket);

// STRETCH GOALS
const maxItems = 5;
function isFull(i) {
  if (i < maxItems) {
    return false;
  } else if (i >= maxItems) {
    return true;
  }
}
// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
