const products = [
      { name: "iPhone 14", price: 69999, category: "smartphones", image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SX679_.jpg" },
      { name: "Samsung Galaxy S21", price: 52999, category: "smartphones", image: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SX679_.jpg" },
      { name: "Redmi Note 13", price: 15999, category: "smartphones", image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg" },
      { name: "OnePlus Nord CE 3", price: 24999, category: "smartphones", image: "https://m.media-amazon.com/images/I/6175SlKKECL._SL1500_.jpg" },
      { name: "Samsung S24 Ultra", price: 79999, category: "smartphones", image: "https://m.media-amazon.com/images/I/71Nwtop9jtL._SL1500_.jpg" },
      { name: "OnePlus 13s", price: 43999, category: "smartphones", image: "https://m.media-amazon.com/images/I/61BTIyv+XdL._SL1500_.jpg" },
      { name: "VIVO X200 FE 5G", price: 52999, category: "smartphones", image: "https://m.media-amazon.com/images/I/71QkSIVns8L._SL1500_.jpg" },
      { name: "Google Pixel 9", price: 99999, category: "smartphones", image: "https://m.media-amazon.com/images/I/51xiDpq5ODL._SL1000_.jpg" },

      { name: "Men's Denim Jacket", price: 1299, category: "fashion", image: "https://m.media-amazon.com/images/I/71-OrSlxGOL._SY741_.jpg" },
      { name: "Women's Kurti Set", price: 1499, category: "fashion", image: "https://m.media-amazon.com/images/I/71mp9GNvFGL._SX569_.jpg" },
      { name: "Unisex Sneakers", price: 999, category: "fashion", image: "https://m.media-amazon.com/images/I/71bfSLiEkpL._SY695_.jpg" },
      { name: "Designer Backpack", price: 899, category: "fashion", image: "https://m.media-amazon.com/images/I/71maWXZscfL._SL1500_.jpg" },
      { name: "Leather Wallet", price: 799, category: "fashion", image: "https://m.media-amazon.com/images/I/71d5xrJNlTL._UX679_.jpg" },
      { name: "Women's Handbag", price: 1499, category: "fashion", image: "https://m.media-amazon.com/images/I/71I1VXjGvLL._UY695_.jpg" },
      { name: "Men's Formal Shoes", price: 1899, category: "fashion", image: "https://m.media-amazon.com/images/I/71vzVw1gBmL._UY695_.jpg" },
      { name: "Women's Sunglasses", price: 699, category: "fashion", image: "https://m.media-amazon.com/images/I/71dX5q3b8QL._UX679_.jpg" },

      { name: "HP Victus Ryzen 5", price: 57990, category: "laptops", image: "https://m.media-amazon.com/images/I/71hC42cKbsL._SL1500_.jpg" },
      { name: "Lenovo IdeaPad Slim 5", price: 48990, category: "laptops", image: "https://m.media-amazon.com/images/I/616BhYEGRHL._SL1080_.jpg" },
      { name: "MacBook Air M1", price: 84990, category: "laptops", image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg" },
      { name: "ASUS ROG Strix", price: 94990, category: "laptops", image: "https://m.media-amazon.com/images/I/71kUn311DqL._SL1500_.jpg" },

      { name: "Long Rocking Chair", price: 999, category: "furniture", image: "https://m.media-amazon.com/images/I/41xSNXKBXBL.jpg" },
      { name: "Sony BRAVIA 4K Ultra HD", price: 73990, category: "furniture", image: "https://m.media-amazon.com/images/I/81ucmUnawvL._SL1500_.jpg" },
      { name: "Decorative Bell Jar", price: 299, category: "furniture", image: "https://m.media-amazon.com/images/I/71xz5j-4RSL._SL1500_.jpg" },
      { name: "Modern Coffee Table", price: 12999, category: "furniture", image: "https://m.media-amazon.com/images/I/81FbLc6Qn7L._SL1500_.jpg" },
      { name: "Ergonomic Office Chair", price: 8999, category: "furniture", image: "https://m.media-amazon.com/images/I/71RzOGi0sML._SL1500_.jpg" },
    ];

    const smartphonesGrid = document.getElementById("smartphones-grid");
    const laptopsGrid = document.getElementById("laptops-grid");
    const fashionGrid = document.getElementById("fashion-grid");
    const furnitureGrid = document.getElementById("furniture-grid");
    const cartDisplay = document.getElementById("cart-count");
    let cartCount = 0;

    // Function to render products for a specific category
    function renderProductsForCategory(productsArray, gridElement) {
      gridElement.innerHTML = "";
      productsArray.forEach(product => {
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
        
        // Add event listener to the Add to Cart button
        const addCartBtn = productCard.querySelector('.add-cart');
        addCartBtn.addEventListener('click', () => {
          cartCount++;
          cartDisplay.textContent = cartCount;
        });
        
        gridElement.appendChild(productCard);
      });
    }

    // Filter and render products for each category
    function renderAllProducts() {
      const smartphones = products.filter(p => p.category === "smartphones");
      const laptops = products.filter(p => p.category === "laptops");
      const fashion = products.filter(p => p.category === "fashion");
      const furniture = products.filter(p => p.category === "furniture");
      
      renderProductsForCategory(smartphones, smartphonesGrid);
      renderProductsForCategory(laptops, laptopsGrid);
      renderProductsForCategory(fashion, fashionGrid);
      renderProductsForCategory(furniture, furnitureGrid);
    }

    // Scroll to category function
    function scrollToCategory(categoryId) {
      const element = document.getElementById(categoryId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Update active button
        // document.querySelectorAll('.btn button').forEach(btn => {
        //   btn.classList.remove('active');
        // });
        // document.querySelector(`.btn button[onclick="scrollToCategory('${categoryId}')"]`).classList.add('active');
      }
    }

    // Initialize
    window.onload = function() {
      renderAllProducts();
      
      // Set first button as active
      // document.querySelector('.btn button').classList.add('active');
    };