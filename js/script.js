(function () {
  const cartButton = document.getElementById('shopping-cart-button');
  const shoppingCartList = document.getElementById('shopping-cart-list');
  const scrollUp = document.getElementById('scroll-arrow-up');
  const scrollDown = document.getElementById('scroll-arrow-down');
  const items = document.querySelectorAll('.shopping-cart-item-wrap');
  const cartCount = document.getElementById('cart-count');
  const scrollArrows = document.querySelectorAll('.scroll-arrow');

  let start = 0;
  let end = 3;
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

  cartButton.addEventListener('click', (e) => {
    e.preventDefault();

    shoppingCartList.classList.toggle('show');
    showItemsInCart();

    cartCount.innerText = `My Cart (${itemsArr.length} items)`;

    if (itemsArr.length >= 4) {
      scrollArrows.forEach((arrow) => {
        arrow.classList.add('show');
      });
    }

    if (start === 0) {
      scrollUp.classList.add('blure');
    }
  });

  scrollUp.addEventListener('click', (e) => {
    e.preventDefault();

    start--;
    end--;
    hideItemsInCart();
    showItemsInCart(start, end);

    scrollDown.classList.remove('blure');

    if (start === 0) {
      scrollUp.classList.add('blure');
    }
  });

  scrollDown.addEventListener('click', (e) => {
    e.preventDefault();

    scrollUp.classList.remove('blure');

    if (end === itemsArr.length - 1) {
      scrollDown.classList.add('blure');
    }
    start++;
    end++;
    hideItemsInCart();
    showItemsInCart(start, end);
  });
})();
