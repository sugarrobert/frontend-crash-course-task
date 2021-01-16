const cartButton = document.getElementById('shopping-cart-button');
const shoppingCartList = document.getElementById('shopping-cart-list');

cartButton.addEventListener('click', (e) => {
  e.preventDefault();

  shoppingCartList.classList.toggle('show-cart');
});
