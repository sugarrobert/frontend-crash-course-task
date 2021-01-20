(function () {
  const cartButton = document.getElementById('shopping-cart-button');
  const shoppingCartList = document.getElementById('shopping-cart-list');
  const scrollUp = document.getElementById('scroll-arrow-up');
  const scrollDown = document.getElementById('scroll-arrow-down');
  const items = document.querySelectorAll('.shopping-cart-item-wrap');
  const cartCount = document.getElementById('cart-count');
  const scrollArrows = document.querySelectorAll('.scroll-arrow');

  //initialized start and end for slice
  let start = 0;
  let end = 3;

  //convert nodelist to array
  const itemsArr = Array.from(items);

  //show items in cart
  function showItemsInCart() {
    //slice array to show only 3 items
    const arr = itemsArr.slice(start, end);
    arr.forEach((item) => {
      //remove hide class
      item.classList.remove('hide');
      //add class show
      item.classList.add('show');
    });
  }

  //hide items in cart
  function hideItemsInCart() {
    itemsArr.forEach((item) => {
      //remove show clas
      item.classList.remove('show');
      //add hide class
      item.classList.add('hide');
    });
  }

  //event listener on cart buton
  cartButton.addEventListener('click', (e) => {
    e.preventDefault();

    //on click toggle show cart list
    shoppingCartList.classList.toggle('show');
    showItemsInCart();

    //show number of items in cart
    cartCount.innerText = `My Cart (${itemsArr.length} items)`;

    //show arrow buttons if there is 4 or more items in cart
    if (itemsArr.length >= 4) {
      scrollArrows.forEach((arrow) => {
        arrow.classList.add('show');
      });
    }

    //blur and disable button for scrolling up
    if (start === 0) {
      scrollUp.classList.add('blure');
    }
  });

  //event listener on arrow
  scrollUp.addEventListener('click', (e) => {
    e.preventDefault();

    start--;
    end--;
    //hide all items in cart
    hideItemsInCart();
    //show only 3 cart
    showItemsInCart(start, end);

    //remove blur and disable button for scrolling down
    scrollDown.classList.remove('blure');

    //blur and disable button for scrolling up
    if (start === 0) {
      scrollUp.classList.add('blure');
    }
  });

  scrollDown.addEventListener('click', (e) => {
    e.preventDefault();

    //remove blur and disable button for scrolling up
    scrollUp.classList.remove('blure');

    //blur and disable button for scrolling down
    if (end === itemsArr.length - 1) {
      scrollDown.classList.add('blure');
    }

    start++;
    end++;
    //hide all items in cart
    hideItemsInCart();
    //show only 3 cart
    showItemsInCart(start, end);
  });
})();
