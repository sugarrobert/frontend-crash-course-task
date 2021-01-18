(function () {
  const cartButton = document.getElementById('shopping-cart-button');
  const shoppingCartList = document.getElementById('shopping-cart-list');
  const scrollUp = document.getElementById('scroll-arrow-up');
  const scrollDown = document.getElementById('scroll-arrow-down');
  const items = document.querySelectorAll('.shopping-cart-item');

  cartButton.addEventListener('click', (e) => {
    e.preventDefault();

    shoppingCartList.classList.toggle('show');
  });

  let start = 1;
  let end = 4;
  const itemsArr = Array.from(items);

  function showItemsInCart() {
    const arr = itemsArr.slice(start, end);

    arr.forEach((item) => {
      item.classList.add('show');
      item.classList.remove('hide');
    });
  }

  function hideItemsInCart() {
    itemsArr.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show');
    });
  }

  showItemsInCart();

  scrollUp.addEventListener('click', (e) => {
    e.preventDefault();
    if (start === 0) {
      // scrollUp.style.pointerEvents = 'none';
    } else {
      start--;
      end--;
      hideItemsInCart();
      showItemsInCart(start, end);
    }
  });

  scrollDown.addEventListener('click', (e) => {
    e.preventDefault();
    if (end === itemsArr.length) {
      // scrollUp.style.pointerEvents = 'none';
    } else {
      start++;
      end++;
      hideItemsInCart();
      showItemsInCart(start, end);
    }
  });
})();
