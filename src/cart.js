let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCartIcons = () => {
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
                <i class="bi bi-x-lg"></i>
            </div>

            <div class="buttons">
                <i class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${item}</div>
                <i class="bi bi-plus-lg"></i>
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

generateCartIcons();
