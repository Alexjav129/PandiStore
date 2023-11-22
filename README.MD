## 🍬 Candy Shop Project Documentation

### Introduction

Welcome to the delightful world of PandiStore, where candies reign supreme! This JavaScript project focuses on managing your candy shopping experience. It consists of two main js files: `main.js` and `cart.js`.

### `main.js`

This file handles the functionality of displaying candies in the shop, managing the basket, and interacting with the UI.

- **Functions**:
  - `generateShop`: Renders candy items in the shop with their details and interactive buttons for adding to the basket.
  - `increment` and `decrement`: Functions to add or remove items from the basket and update the UI accordingly.
  - `update` and `calculation`: Functions to update the UI with the basket items and total quantity.

### `cart.js`

This file is responsible for managing the shopping cart, displaying selected items, and handling their quantities.

- **Functions**:
  - `generateCartItems`: Renders selected items in the cart, allowing users to modify quantities or remove items.
  - `increment`, `decrement`, `removeItem`: Functions to modify cart items and update the UI based on user actions.
  - `clearCart` and `checkOut`: Functions to clear the entire cart or proceed to checkout, updating the UI accordingly.

### `data`

This file holds an array of candy data objects containing information such as name, price, description, and images.

### Usage

- **Adding Items**: Click the plus icon to add items to the basket in the shop or cart.
- **Removing Items**: Click the minus icon to decrease the quantity or remove an item from the cart.
- **Checkout**: Proceed to checkout by clicking the appropriate button.
- **Clear Cart**: Remove all items from the cart with a single click.

### Project Structure

```
📁 PandiStore
  |
  |-- 🖼️ img/
  |    |-- candy1.jpg
  |    |-- candy2.jpg
  |    |-- ... (other candy images)
  |
  |-- 🖼️ src
  |    |-- cart.js
  |    |-- main.js
  |    |-- data
  |    |-- style.css
  |
  |-- 📄 index.html
  |-- 📄 cart.html
  |-- 📄 README.MD
```

### Conclusion

Enjoy the sweet experience of PandiStore, where every click brings you closer to candy-filled bliss! Explore candies, fill up your cart, and satisfy your cravings. Happy shopping! 🛒🍭
