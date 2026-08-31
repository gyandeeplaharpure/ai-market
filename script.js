let cart = [];

function addToCart(name, price) {

  cart.push({
    name: name,
    price: price
  });

  updateCart();

  alert(name + " added to cart!");
}


function updateCart() {

  document.getElementById("cart-count").innerText = cart.length;

  let total = 0;

  cart.forEach(item => {
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}


function openCart() {

  document.getElementById("cart-modal").style.display = "flex";

  let items = "";

  cart.forEach(item => {

    items += `
      <p>
        ${item.name} - ₹${item.price}
      </p>
    `;

  });

  if (cart.length === 0) {
    items = "<p>Your cart is empty.</p>";
  }

  document.getElementById("cart-items").innerHTML = items;
}


function closeCart() {

  document.getElementById("cart-modal").style.display = "none";

}


function checkout() {

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Payment system will open here.");

}
