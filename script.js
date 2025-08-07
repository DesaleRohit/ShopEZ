const products = [
  // Smartphones
  {
    name: "iPhone 14",
    price: 69999,
    image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SX679_.jpg"
  },
  {
    name: "Samsung Galaxy S21",
    price: 52999,
    image: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SX679_.jpg"
  },
  {
    name: "Redmi Note 13",
    price: 15999,
    image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg"
  },
  {
    name: "OnePlus Nord CE 3",
    price: 24999,
    image: "https://m.media-amazon.com/images/I/6175SlKKECL._SL1500_.jpg"
  },
  {
    name: "Samsung S24 Ultra",
    price: 79999,
    image: "https://m.media-amazon.com/images/I/71Nwtop9jtL._SL1500_.jpg"
  },

  // Fashion
  {
    name: "Men's Denim Jacket",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/71-OrSlxGOL._SY741_.jpg"
  },
  {
    name: "Women's Kurti Set",
    price: 1499,
    image: "https://m.media-amazon.com/images/I/71mp9GNvFGL._SX569_.jpg"
  },
  {
    name: "Sneakers",
    price: 999,
    image: "https://m.media-amazon.com/images/I/71bfSLiEkpL._SY695_.jpg"
  },
  {
    name: "Backpack",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71maWXZscfL._SL1500_.jpg"
  },

  // Laptops
  {
    name: "HP Victus Ryzen 5",
    price: 57990,
    image: "https://m.media-amazon.com/images/I/71hC42cKbsL._SL1500_.jpg"
  },
  {
    name: "Lenovo IdeaPad Slim 5",
    price: 48990,
    image: "https://m.media-amazon.com/images/I/616BhYEGRHL._SL1080_.jpg"
  },
  {
    name: "MacBook Air M1",
    price: 84990,
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
  },
  {
    name: "ASUS ROG Strix",
    price: 94990,
    image: "https://m.media-amazon.com/images/I/71kUn311DqL._SL1500_.jpg"
  },
  //Furniture
  {
    name: "Long Roking chair",
    price: 999,
    image: "https://m.media-amazon.com/images/I/41xSNXKBXBL.jpg",
  },
  {
    name: "Sony BRAVIA 4K Ultra HD (Black)",
    price: 73990,
    image:"https://m.media-amazon.com/images/I/81ucmUnawvL._SL1500_.jpg",
  },
  {
    name: "Bell the Bell Jar",
    price: 299,
    image: "https://m.media-amazon.com/images/I/71xz5j-4RSL._SL1500_.jpg",
  },
];

// Shuffle function to randomize array order
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(products); // Shuffle before rendering

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
