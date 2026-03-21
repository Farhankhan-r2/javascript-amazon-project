export const cart = [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
},
{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
},
{
  productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  quantity: 2
}];//added some defalt values so its easy to code

export function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

}
export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  //since if we find matching item it will be an object which is a truthy value
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });

  }
}