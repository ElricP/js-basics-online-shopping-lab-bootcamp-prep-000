var cart = [];
//helper function
function getRandomInt100() {
  return Math.floor(Math.random() * 99) +1;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: getRandomInt100() });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }
  var result = "In your cart, you have";
  for(var counter = 0; counter < cart.length; counter++){
    if(cart.length == 1)
    {
      result += ` ${cart[counter].itemName} at $${cart[counter].itemPrice}.`
    } else if (counter == cart.length -1)
    {
      result += ` and ${cart[counter].itemName} at $${cart[counter].itemPrice}.`
    } else 
    {
      result += ` 
    }
  }
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
