// ---- Data ----
const products = [
  { name: "iPhone 14", price: 69999, category: "smartphones", image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SX679_.jpg" },
  { name: "Samsung Galaxy S21", price: 52999, category: "smartphones", image: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SX679_.jpg" },
  { name: "Redmi Note 13", price: 15999, category: "smartphones", image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg" },
  { name: "OnePlus Nord CE 3", price: 24999, category: "smartphones", image: "https://m.media-amazon.com/images/I/6175SlKKECL._SL1500_.jpg" },
  { name: "Samsung S24 Ultra", price: 79999, category: "smartphones", image: "https://m.media-amazon.com/images/I/71Nwtop9jtL._SL1500_.jpg" },
  { name: "OnePlus 13s", price: 43999, category: "smartphones", image: "https://m.media-amazon.com/images/I/61BTIyv+XdL._SL1500_.jpg" },
  { name: "VIVO X200 FE 5G", price: 52999, category: "smartphones", image: "https://m.media-amazon.com/images/I/71QkSIVns8L._SL1500_.jpg" },
  { name: "Google Pixel 9", price: 99999, category: "smartphones", image: "https://m.media-amazon.com/images/I/51xiDpq5ODL._SL1000_.jpg" },

  { name: "Bose New QuietComfor", price: 12999, category: "headphones", image: "https://m.media-amazon.com/images/I/61qIEvCy6+L._SL1500_.jpg" },
  { name: "Marshall Motif II ANC", price: 14999, category: "headphones", image: "https://m.media-amazon.com/images/I/71t+kVzovEL._SL1500_.jpg" },
  { name: "Sony WH-1000XM4", price: 19999, category: "headphones", image: "https://m.media-amazon.com/images/I/61UgZSYRllL._SL1500_.jpg" },
  { name: "JBL Award Wining Tour Pro 3", price: 18999, category: "headphones", image: "https://m.media-amazon.com/images/I/613+i9dtAML._SL1500_.jpg" },
  { name: "Samsung Galaxy Buds 3 Pro", price: 17999, category: "headphones", image: "https://m.media-amazon.com/images/I/71ke2BEdIhL._SL1500_.jpg" },
  { name: "Apple AirPods 4 Wireless Earbuds", price: 19999, category: "headphones", image: "https://m.media-amazon.com/images/I/61oCISLE+PL._SL1500_.jpg" },
  { name: "Skullcandy Crusher ANC 2", price: 13899, category: "headphones", image: "https://m.media-amazon.com/images/I/71hj2+aMMrL._SL1500_.jpg" },
  { name: "PULSE Explore", price: 19699, category: "headphones", image: "https://m.media-amazon.com/images/I/51Bj-vJ4DoL._SL1500_.jpg" },

  { name: "HP Victus Ryzen 5", price: 57990, category: "laptops", image: "https://m.media-amazon.com/images/I/71hC42cKbsL._SL1500_.jpg" },
  { name: "Lenovo IdeaPad Slim 5", price: 48990, category: "laptops", image: "https://m.media-amazon.com/images/I/616BhYEGRHL._SL1080_.jpg" },
  { name: "MacBook Air M1", price: 84990, category: "laptops", image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg" },
  { name: "ASUS ROG Strix", price: 94990, category: "laptops", image: "https://m.media-amazon.com/images/I/71kUn311DqL._SL1500_.jpg" },
  { name: "Lenovo LOQ 2024", price: 92999, category: "laptops", image: "https://m.media-amazon.com/images/I/8133GVuhgwL._SL1500_.jpg" },
  { name: "HP OMEN Gaming AI Laptop", price: 120999, category: "laptops", image: "https://m.media-amazon.com/images/I/71loIIvt9AL._SL1500_.jpg" },
  { name: "ASUS ROG Strix G16", price: 184999, category: "laptops", image: "https://m.media-amazon.com/images/I/71PYcEAwWgL._SL1500_.jpg" },
  { name: "Apple 2024 MacBook Pro", price: 239990, category: "laptops", image: "https://m.media-amazon.com/images/I/61opqQEBUxL._SL1500_.jpg" },

  { name: "Seiko Analog Green Dial Men Watch", price: 19999, category: "Watch", image: "https://m.media-amazon.com/images/I/61UL5HZ6TOL._SL1032_.jpg" },
  { name: "Fashion Mechanical Wrist Watch", price: 12499, category: "Watch", image: "https://m.media-amazon.com/images/I/81Fgkp+VkmL._SX569_.jpg" },
  { name: "OnePlus Watch 2", price: 15999, category: "Watch", image: "https://m.media-amazon.com/images/I/71I3RQGHDrL._SL1500_.jpg" },
  { name: "Casio Edifice EFR-556DB", price: 11999, category: "Watch", image: "https://m.media-amazon.com/images/I/71T82VDRqGL._SX522_.jpg" },
  { name: "TSAR BOMBA Men's Automatic Watch", price: 40000, category: "Watch", image: "https://m.media-amazon.com/images/I/71HzgXvxxXL._SX679_.jpg" },
  { name: "FEICE Men Automatic Skeleton Watch", price: 29745, category: "Watch", image: "https://m.media-amazon.com/images/I/71TvFLThdsL._SX679_.jpg" },
  { name: "Titan Stainless Steel Bracelet Watch", price: 30000, category: "Watch", image: "https://m.media-amazon.com/images/I/71lQzhSLMGL._SL1500_.jpg" },
  { name: "Fastrack Autumn Men's Watch", price: 12999, category: "Watch", image: "https://m.media-amazon.com/images/I/51ksEujI7UL._SX679_.jpg" },
];

let cartCount = 0;

let smartphonesGrid, laptopsGrid, headphonesGrid, WatchGrid, cartDisplay;

// create product card element
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product");

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p class="price">₹${product.price.toLocaleString()}</p>
    <div class="product-buttons">
      <button class="add-cart">Add to Cart</button>
    </div>
  `;

  const addCartBtn = productCard.querySelector(".add-cart");
  addCartBtn.addEventListener("click", () => {
    cartCount++;
    if (cartDisplay) cartDisplay.textContent = cartCount;
  });

  return productCard;
}

// VERY SIMPLE: loop once and append to proper grid
function renderAllProducts() {

  products.forEach(product => {
    const card = createProductCard(product);

    if (product.category === "smartphones") {
      smartphonesGrid.appendChild(card);
    } else if (product.category === "laptops") {
      laptopsGrid.appendChild(card);
    } else if (product.category === "headphones") {
      headphonesGrid.appendChild(card);
    } else if (product.category === "Watch") {
      WatchGrid.appendChild(card);
    }
    
  });
}

// ---- Behavior ----
function scrollToCategory(categoryId) {
  const element = document.getElementById(categoryId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
  smartphonesGrid = document.getElementById("smartphones-grid");
  laptopsGrid = document.getElementById("laptops-grid");
  headphonesGrid = document.getElementById("headphones-grid");
  WatchGrid = document.getElementById("Watch-grid");
  cartDisplay = document.getElementById("cart-count");

  renderAllProducts();
});
