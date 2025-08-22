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


let cart = []; // each item: { name, price, image, qty }
const cartCountEl = document.getElementById("cart-count");
const cartIcon = document.getElementById("cart");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.querySelector(".cart-items");
const totalAmountEl = document.getElementById("total-amount");
const checkoutBtn = document.getElementById("checkout-btn");
const closeCartBtn = document.getElementById("close-cart");

// product grids
let smartphonesGrid = document.getElementById("smartphones-grid");
let laptopsGrid = document.getElementById("laptops-grid");
let headphonesGrid = document.getElementById("headphones-grid");
let WatchGrid = document.getElementById("Watch-grid");

function updateCartCount() {
  // show total quantity of items in cart
  const totalQty = cart.reduce((s, item) => s + item.qty, 0);
  cartCountEl.textContent = totalQty;
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function showEmptyCartMessage() {
  cartItemsContainer.innerHTML = `
    <div class="empty-cart">
      <i class="shopping-cart" style="font-size: 40px; margin-bottom: 15px;"></i>
      <p>Your cart is empty</p>
      <p>Start shopping to add items</p>
    </div>
  `;
  totalAmountEl.textContent = "0";
}

function renderCartItems() {
  // if empty
  if (cart.length === 0) {
    showEmptyCartMessage();
    return;
  }

  cartItemsContainer.innerHTML = "";
  cart.forEach((item, idx) => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>₹${(item.price).toLocaleString()} × ${item.qty}</p>
        <div style="margin-top:8px;">
          <button class="qty-decrease" data-idx="${idx}">-</button>
          <span style="margin:0 8px;">${item.qty}</span>
          <button class="qty-increase" data-idx="${idx}">+</button>
        </div>
      </div>
      <div class="cart-item-actions">
        <button class="remove-item" data-idx="${idx}">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemEl);
  });

  const decButtons = cartItemsContainer.querySelectorAll(".qty-decrease");
  const incButtons = cartItemsContainer.querySelectorAll(".qty-increase");
  const removeButtons = cartItemsContainer.querySelectorAll(".remove-item");

  decButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = Number(e.currentTarget.dataset.idx);
      if (cart[i].qty > 1) {
        cart[i].qty -= 1;
      } else {
        // if qty would go to zero, remove item completely
        cart.splice(i, 1);
      }
      refreshCartUI();
    });
  });

  incButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = Number(e.currentTarget.dataset.idx);
      cart[i].qty += 1;
      refreshCartUI();
    });
  });

  removeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = Number(e.currentTarget.dataset.idx);
      cart.splice(i, 1);
      refreshCartUI();
    });
  });

  // update total
  totalAmountEl.textContent = calculateTotal().toLocaleString();
}

function refreshCartUI() {
  updateCartCount();
  renderCartItems();
}

// ---------- Add to Cart logic ----------
function addToCart(product) {
  // check if product already in cart by name
  const found = cart.find(item => item.name === product.name);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }
  refreshCartUI();
}

// ---------- Render product cards ----------
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
    addToCart(product);

    addCartBtn.textContent = "Added ✓";
    setTimeout(() => addCartBtn.textContent = "Add to Cart", 700);
  });

  return productCard;
}

function renderAllProducts() {
  if (!smartphonesGrid || !laptopsGrid || !headphonesGrid || !WatchGrid) {
    console.error("One or more product grids not found in DOM.");
    return;
  }

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

// ---------- Cart drawer open/close ----------
function openCartDrawer() {
  cartOverlay.style.display = "block";
  cartDrawer.style.right = "0";
  refreshCartUI();
}

function closeCartDrawer() {
  cartOverlay.style.display = "none";
  cartDrawer.style.right = "-400px";
}

if (cartIcon) {
  cartIcon.addEventListener("click", openCartDrawer);
}
if (cartOverlay) {
  cartOverlay.addEventListener("click", closeCartDrawer);
}
if (closeCartBtn) {
  closeCartBtn.addEventListener("click", closeCartDrawer);
}

// ---------- Checkout ----------
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add some items first.");
      return;
    }

    const total = calculateTotal();
    if (checkoutBtn) {
      var name = prompt("Enter your name:");
      if (!name) {
        alert("Name is required to place the order.");
        return;
      } if (name) {
        var mobile = prompt("Enter your mobile number:");
        if (!mobile) {
          alert("Mobile number is required to place the order.");
          return;
        }
      } if (name) {
        var address = prompt("Enter your address:");
        if (!address) {
          alert("Address is required to place the order.");
          return;
        }
      }

    }
    alert(`Customer Details:\nName: ${name} \nMobile: ${mobile} \nAddress: ${address} \nTotal Amount: ₹${total.toLocaleString()} \nThank you for your purchase! Order placed successfully.`);
    cart = []; // clear cart
    refreshCartUI();
    closeCartDrawer();


  });
}

function scrollToCategory(categoryId) {
  const element = document.getElementById(categoryId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

renderAllProducts();
updateCartCount();
showEmptyCartMessage();
