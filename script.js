const products = [
  {
    name: "Phone X",
    price: 25000,
    image: "images/phone1.jpg"
  },
  {
    name: "Casual Shirt",
    price: 999,
    image: "images/shirt1.webp"
  },
  {
    name: "Laptop Pro",
    price: 55000,
    image: "images/laptop1.jpg"
  },
  {
    name: "Phone Y",
    price: 18500,
    image: "images/phone1.jpg"
  },
  {
    name: "Formal Shirt",
    price: 1399,
    image: "images/shirt1.jpg"
  },
  {
    name: "Gaming Laptop",
    price: 73000,
    image: "images/laptop1.avif"
  }
];

const productGrid = document.querySelector(".product-grid");

products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.classList.add("product");

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button class="add-cart">Add to Cart</button>
    <button class="buy-now">Buy Now</button>
  `;

  productGrid.appendChild(productCard);
});

// Cart logic
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');

document.querySelector('.product-grid').addEventListener('click', function (e) {
  if (e.target.classList.contains('add-cart')) {
    cartCount++;
    cartDisplay.textContent = cartCount;
  }
});
