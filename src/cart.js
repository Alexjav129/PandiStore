let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        //   console.log(x);
        let { id, item } = x;
        let search = candyData.find((item) => item.id === id) || [];
        // destrucutramos el objeto para no tener que escribir search.img en nuestro inner html
        let { img, name, price } = search;
        return `
      <div class="cart-item">
      
        <img width="100" src="${img}" alt="image of a candy"/>

        <div class="details">
      
            <div class="title-price-x">
                <h4>
                    <p>${name}</p>
                    <p class="cart-item-price">$ ${price}</p>
                </h4>
                <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>

            <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${item}</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>

            <h3>$ ${item * search.price}</h3>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>You haven't add any Candy 🙁</h2>
    <a href="index.html">
        <button class="Homebtn">Back to PandiStore</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((item) => item.id === selectedItem.id);
  // if we don't find the object that we are searching, only then we push this object
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  Toastify({
    text: "Item added to the basket",
    duration: 1500,
    offset: {
      x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((item) => item.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  Toastify({
    text: "Item deleted from the basket",
    className: "info",
    duration: 1500,
    offset: {
      x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    style: {
      background: "linear-gradient(to right, #fd1d1d, #fcb045)",
    },
  }).showToast();

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0); // the moment the quantity is 0, this line will run
  //   Once it's done filtering the data, this will rerender the cards using the generateCards function
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (item) => {
  let selectedItem = item;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  //once we are done removing all the items from the basket
  // we also want to rerender the cards

  Swal.fire({
    position: "center",
    icon: "info",
    title: "Your Cart is Now Empty",
    showConfirmButton: false,
    timer: 1500,
  });

  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = candyData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
  <h2>Total Bill:$ ${amount}</h2>
  <button class="checkout">Checkout</button>
  <button onclick="clearCart()" class="removeAll">Clear Cart</button>
  `;
  }
};

TotalAmount();
