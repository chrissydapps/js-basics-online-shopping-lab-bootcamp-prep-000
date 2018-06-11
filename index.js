var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  price = Math.floor((Math.random() *100) +1)
  var obj = {itemName: item, itemPrice: price}
  cart.push(obj)
  return `${itemName} has been added to yur cart.`
 // write your code here
}

// function viewCart() {
//   // write your code here
// }
//
// function total() {
//   // write your code here
// }
//
// function removeFromCart(item) {
//   // write your code here
// }
//
// function placeOrder(cardNumber) {
//   // write your code here
// }
