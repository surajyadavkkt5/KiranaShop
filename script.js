// Configuration - UPDATE THESE VALUES
const CONFIG = {
    whatsappNumber: '918452986019', // Replace with shop's WhatsApp number (with country code, no + or spaces)
    googleSheetURL: 'YOUR_GOOGLE_APPS_SCRIPT_URL', // Replace with your Google Apps Script Web App URL
    shopName: 'Fresh Kirana',
    inventoryOwnerId: 'admin', // Change this to your desired owner ID
    inventoryPassword: '123' // Change this to your desired password
};

// Sample Products Data - Load from localStorage or use default
let productsData = JSON.parse(localStorage.getItem('productsData')) || [
    // Rice & Grains
    { id: 1, name: 'Basmati Rice', category: 'Rice', price: 120, unit: 'kg', icon: '🌾' },
    { id: 2, name: 'Sona Masoori Rice', category: 'Rice', price: 80, unit: 'kg', icon: '🌾' },
    { id: 3, name: 'Wheat Flour (Atta)', category: 'Rice', price: 45, unit: 'kg', icon: '🌾' },
    { id: 4, name: 'Broken Wheat (Dalia)', category: 'Rice', price: 60, unit: 'kg', icon: '🌾' },
    
    // Pulses
    { id: 5, name: 'Toor Dal', category: 'Pulses', price: 140, unit: 'kg', icon: '🫘' },
    { id: 6, name: 'Moong Dal', category: 'Pulses', price: 130, unit: 'kg', icon: '🫘' },
    { id: 7, name: 'Chana Dal', category: 'Pulses', price: 110, unit: 'kg', icon: '🫘' },
    { id: 8, name: 'Masoor Dal', category: 'Pulses', price: 100, unit: 'kg', icon: '🫘' },
    { id: 9, name: 'Urad Dal', category: 'Pulses', price: 120, unit: 'kg', icon: '🫘' },
    
    // Oils
    { id: 10, name: 'Sunflower Oil', category: 'Oil', price: 180, unit: 'L', icon: '🛢️' },
    { id: 11, name: 'Mustard Oil', category: 'Oil', price: 200, unit: 'L', icon: '🛢️' },
    { id: 12, name: 'Groundnut Oil', category: 'Oil', price: 220, unit: 'L', icon: '🛢️' },
    { id: 13, name: 'Pure Ghee', category: 'Oil', price: 550, unit: 'kg', icon: '🛢️' },
    
    // Snacks
    { id: 14, name: 'Namkeen Mix', category: 'Snacks', price: 120, unit: '500g', icon: '🍪' },
    { id: 15, name: 'Biscuits Pack', category: 'Snacks', price: 30, unit: 'pack', icon: '🍪' },
    { id: 16, name: 'Chips', category: 'Snacks', price: 20, unit: 'pack', icon: '🍪' },
    { id: 17, name: 'Cookies', category: 'Snacks', price: 40, unit: 'pack', icon: '🍪' },
    
    // Beverages
    { id: 18, name: 'Tea (Loose)', category: 'Beverages', price: 400, unit: 'kg', icon: '🥤' },
    { id: 19, name: 'Coffee Powder', category: 'Beverages', price: 380, unit: '500g', icon: '🥤' },
    { id: 20, name: 'Cold Drink (2L)', category: 'Beverages', price: 90, unit: 'bottle', icon: '🥤' },
    { id: 21, name: 'Fruit Juice', category: 'Beverages', price: 100, unit: '1L', icon: '🥤' },
    
    // Household
    { id: 22, name: 'Detergent Powder', category: 'Household', price: 180, unit: '1kg', icon: '🧹' },
    { id: 23, name: 'Soap Bar', category: 'Household', price: 30, unit: 'piece', icon: '🧹' },
    { id: 24, name: 'Shampoo', category: 'Household', price: 150, unit: '200ml', icon: '🧹' },
    { id: 25, name: 'Toothpaste', category: 'Household', price: 60, unit: '100g', icon: '🧹' },
    
    // Books
    { id: 26, name: 'Notebook (Single Line)', category: 'Books', price: 40, unit: 'piece', icon: '📚' },
    { id: 27, name: 'Notebook (4-Line)', category: 'Books', price: 40, unit: 'piece', icon: '📚' },
    { id: 28, name: 'Register (200 Pages)', category: 'Books', price: 80, unit: 'piece', icon: '📚' },
    { id: 29, name: 'Drawing Book', category: 'Books', price: 50, unit: 'piece', icon: '📚' },
    { id: 30, name: 'Graph Book', category: 'Books', price: 60, unit: 'piece', icon: '📚' },
    
    // Pens
    { id: 31, name: 'Ball Pen (Blue)', category: 'Pens', price: 5, unit: 'piece', icon: '✏️' },
    { id: 32, name: 'Ball Pen (Black)', category: 'Pens', price: 5, unit: 'piece', icon: '✏️' },
    { id: 33, name: 'Gel Pen Set', category: 'Pens', price: 50, unit: 'pack', icon: '✏️' },
    { id: 34, name: 'Pencil (Pack of 10)', category: 'Pens', price: 30, unit: 'pack', icon: '✏️' },
    { id: 35, name: 'Marker Set', category: 'Pens', price: 80, unit: 'pack', icon: '✏️' },
    
    // Stationery
    { id: 36, name: 'Eraser', category: 'Stationery', price: 5, unit: 'piece', icon: '📑' },
    { id: 37, name: 'Sharpener', category: 'Stationery', price: 5, unit: 'piece', icon: '📑' },
    { id: 38, name: 'Scale (15cm)', category: 'Stationery', price: 10, unit: 'piece', icon: '📑' },
    { id: 39, name: 'Glue Stick', category: 'Stationery', price: 20, unit: 'piece', icon: '📑' },
    { id: 40, name: 'Scissors', category: 'Stationery', price: 25, unit: 'piece', icon: '📑' },
    { id: 41, name: 'Stapler with Pins', category: 'Stationery', price: 60, unit: 'piece', icon: '📑' },
    { id: 42, name: 'Paper Clips (Box)', category: 'Stationery', price: 15, unit: 'box', icon: '📑' },
];

// Save products to localStorage
function saveProducts() {
    localStorage.setItem('productsData', JSON.stringify(productsData));
}

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Inventory Management
let inventory = JSON.parse(localStorage.getItem('inventory')) || {};
let salesHistory = JSON.parse(localStorage.getItem('salesHistory')) || {};

// Initialize inventory for all products if not exists
function initializeInventory() {
    productsData.forEach(product => {
        if (!inventory[product.id]) {
            inventory[product.id] = {
                stockLevel: 100, // Default stock level
                status: 'available' // available, low, out
            };
        }
        if (!salesHistory[product.id]) {
            salesHistory[product.id] = {
                totalSold: 0,
                lastSold: null
            };
        }
    });
    saveInventory();
    saveSalesHistory();
}

function saveInventory() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function saveSalesHistory() {
    localStorage.setItem('salesHistory', JSON.stringify(salesHistory));
}

function updateProductStatus(productId, stockLevel) {
    if (stockLevel <= 0) {
        inventory[productId].status = 'out';
    } else if (stockLevel <= 20) {
        inventory[productId].status = 'low';
    } else {
        inventory[productId].status = 'available';
    }
    inventory[productId].stockLevel = stockLevel;
    saveInventory();
}

// Update cart count on all pages
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
    });
}

// Add to cart
function addToCart(productId, quantity) {
    const product = productsData.find(p => p.id === productId);
    if (!product || quantity <= 0) return;

    // Check inventory stock
    const productInventory = inventory[productId] || { stockLevel: 100, status: 'available' };
    
    if (productInventory.status === 'out' || productInventory.stockLevel <= 0) {
        showNotification('❌ Sorry, this product is out of stock!');
        return;
    }

    if (quantity > productInventory.stockLevel) {
        showNotification(`⚠️ Only ${productInventory.stockLevel} units available!`);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > productInventory.stockLevel) {
            showNotification(`⚠️ Only ${productInventory.stockLevel} units available!`);
            return;
        }
        existingItem.quantity = newQuantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            unit: product.unit,
            quantity: quantity,
            icon: product.icon
        });
    }

    // Decrease inventory stock
    inventory[productId].stockLevel -= quantity;
    updateProductStatus(productId, inventory[productId].stockLevel);
    saveInventory();
    
    // Track sales
    salesHistory[productId].totalSold += quantity;
    salesHistory[productId].lastSold = new Date().toISOString();
    saveSalesHistory();

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart! ✓`);
}

// Remove from cart
function removeFromCart(productId) {
    const removedItem = cart.find(item => item.id === productId);
    
    if (removedItem) {
        // Return stock to inventory
        inventory[productId].stockLevel += removedItem.quantity;
        updateProductStatus(productId, inventory[productId].stockLevel);
        saveInventory();
    }
    
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    const quantityDifference = newQuantity - item.quantity;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    // Check if enough stock available
    const productInventory = inventory[productId] || { stockLevel: 100, status: 'available' };
    
    if (quantityDifference > 0) {
        // Increasing quantity - check stock
        if (quantityDifference > productInventory.stockLevel) {
            showNotification(`⚠️ Only ${productInventory.stockLevel} more units available!`);
            return;
        }
        // Decrease inventory
        inventory[productId].stockLevel -= quantityDifference;
    } else {
        // Decreasing quantity - return stock
        inventory[productId].stockLevel += Math.abs(quantityDifference);
    }
    
    item.quantity = newQuantity;
    updateProductStatus(productId, inventory[productId].stockLevel);
    saveInventory();
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear the cart?')) {
        // Return all items back to inventory
        cart.forEach(item => {
            inventory[item.id].stockLevel += item.quantity;
            updateProductStatus(item.id, inventory[item.id].stockLevel);
        });
        saveInventory();
        
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        if (window.location.pathname.includes('cart.html')) {
            renderCart();
        }
        showNotification('Cart cleared!');
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #2d8a2d;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Products Page Functions
if (window.location.pathname.includes('products.html')) {
    let currentCategory = 'all';
    let searchQuery = '';

    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        currentCategory = categoryParam;
    }

    function renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        const filteredProducts = productsData.filter(product => {
            const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 3rem; color: #666;">No products found.</p>';
            return;
        }

        productsGrid.innerHTML = filteredProducts.map(product => {
            const inv = inventory[product.id] || { stockLevel: 100, status: 'available' };
            const isOutOfStock = inv.status === 'out' || inv.stockLevel <= 0;
            const isLowStock = inv.status === 'low' && inv.stockLevel > 0;
            
            let stockBadge = '';
            if (isOutOfStock) {
                stockBadge = '<div style="background: #f8d7da; color: #721c24; padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">❌ Out of Stock</div>';
            } else if (isLowStock) {
                stockBadge = `<div style="background: #fff3cd; color: #856404; padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">⚠️ Only ${inv.stockLevel} left</div>`;
            } else {
                stockBadge = `<div style="background: #d4edda; color: #155724; padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">✓ In Stock (${inv.stockLevel})</div>`;
            }
            
            // Check if icon is a URL or emoji
            const isImageUrl = product.icon && (product.icon.startsWith('http://') || product.icon.startsWith('https://') || product.icon.startsWith('data:'));
            const productImage = isImageUrl 
                ? `<img src="${product.icon}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">` 
                : product.icon || '📎';
            
            return `
            <div class="product-card" style="${isOutOfStock ? 'opacity: 0.6;' : ''}">
                <div class="product-image">${productImage}</div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    ${stockBadge}
                    <div class="product-price">₹${product.price}/${product.unit}</div>
                    <div class="product-actions">
                        <input type="number" class="quantity-input" value="1" min="1" max="${inv.stockLevel}" id="qty-${product.id}" ${isOutOfStock ? 'disabled' : ''}>
                        <button class="add-to-cart-btn" onclick="addProductToCart(${product.id})" ${isOutOfStock ? 'disabled style="background: #ccc; cursor: not-allowed;"' : ''}>${isOutOfStock ? 'Out of Stock' : 'Add to Cart'}</button>
                    </div>
                </div>
            </div>
        `;
        }).join('');
    }

    // Global function for onclick
    window.addProductToCart = function(productId) {
        const quantity = parseInt(document.getElementById(`qty-${productId}`).value) || 1;
        addToCart(productId, quantity);
        
        // Add visual feedback to button
        const btn = event.target;
        const originalText = btn.textContent;
        
        btn.classList.add('added');
        btn.textContent = '✓ Added!';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.classList.remove('added');
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1000);
    };

    // Category filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });

    // Set active filter button based on current category
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.category === currentCategory) {
            btn.classList.remove('active');
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    if (currentCategory === 'all') {
        document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
    }

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Initial render
    renderProducts();
}

// Cart Page Functions
if (window.location.pathname.includes('cart.html')) {
    function renderCart() {
        const cartItems = document.getElementById('cartItems');
        const totalItems = document.getElementById('totalItems');
        const totalAmount = document.getElementById('totalAmount');

        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <h2>Your cart is empty</h2>
                    <p>Add some products to get started!</p>
                    <a href="products.html" class="btn btn-primary" style="margin-top: 1rem;">Browse Products</a>
                </div>
            `;
            totalItems.textContent = '0';
            totalAmount.textContent = '₹0';
            return;
        }

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-info">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <div class="cart-item-price">₹${item.price}/${item.unit}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                        <span style="font-weight: 600; min-width: 30px; text-align: center;">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <span class="remove-btn" onclick="removeFromCart(${item.id})">Remove</span>
                </div>
            </div>
        `).join('');

        totalItems.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        totalAmount.textContent = `₹${total}`;
    }

    // Send order on WhatsApp
    document.getElementById('sendOrderBtn').addEventListener('click', () => {
        const name = document.getElementById('customerName').value.trim();
        const phone = document.getElementById('customerPhone').value.trim();
        const address = document.getElementById('customerAddress').value.trim();

        if (!name || !phone) {
            alert('Please enter your name and phone number!');
            return;
        }

        if (phone.length !== 10 || !/^\d+$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number!');
            return;
        }

        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Prepare order message
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let message = `🛒 *New Kirana Order*\n\n`;
        message += `👤 *Name:* ${name}\n`;
        message += `📱 *Phone:* ${phone}\n`;
        if (address) message += `📍 *Address:* ${address}\n`;
        message += `\n*Items:*\n`;
        
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - ${item.quantity} ${item.unit} × ₹${item.price} = ₹${item.price * item.quantity}\n`;
        });
        
        message += `\n💰 *Total: ₹${total}*`;

        // Send to Google Sheets
        sendToGoogleSheets(name, phone, address, cart, total);

        // Open WhatsApp
        const whatsappURL = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');

        // Clear cart after sending
        setTimeout(() => {
            if (confirm('Order sent! Clear your cart?')) {
                clearCart();
            }
        }, 1000);
    });

    // Clear cart button
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);

    // Initial render
    renderCart();
}

// Send order to Google Sheets
function sendToGoogleSheets(name, phone, address, items, total) {
    if (!CONFIG.googleSheetURL || CONFIG.googleSheetURL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
        console.log('Google Sheets integration not configured');
        return;
    }

    const orderData = {
        date: new Date().toLocaleString('en-IN'),
        name: name,
        phone: phone,
        address: address,
        items: items.map(item => `${item.name} (${item.quantity} ${item.unit})`).join(', '),
        total: total
    };

    fetch(CONFIG.googleSheetURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
    })
    .then(() => console.log('Order saved to Google Sheets'))
    .catch(err => console.error('Error saving to Google Sheets:', err));
}

// Initialize cart count on page load
updateCartCount();
initializeInventory();

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle && navLinks) {
        // Toggle menu on button click
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

// Load price list on home page
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    loadPriceList();
    initializeCategoryScroll();
}

// Initialize drag-to-scroll for categories
function initializeCategoryScroll() {
    const slider = document.querySelector('.categories-scroll-container');
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        slider.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX - slider.offsetLeft;
        touchScrollLeft = slider.scrollLeft;
    }, { passive: true });

    slider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - touchStartX) * 2;
        slider.scrollLeft = touchScrollLeft - walk;
    }, { passive: true });
}

function loadPriceList() {
    const priceListGrid = document.getElementById('priceListGrid');
    if (!priceListGrid) return;

    // Group products by category
    const categories = {};
    productsData.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    // Category icons
    const categoryIcons = {
        'Rice': '🌾',
        'Pulses': '🫘',
        'Oil': '🛢️',
        'Snacks': '🍪',
        'Beverages': '🥤',
        'Household': '🧹',
        'Books': '📚',
        'Pens': '✏️',
        'Stationery': '📑'
    };

    // Render price list by category
    priceListGrid.innerHTML = Object.keys(categories).map(category => `
        <div class="price-list-category">
            <h3>${categoryIcons[category] || ''} ${category === 'Rice' ? 'Rice & Grains' : category}</h3>
            <ul class="price-list-items">
                ${categories[category].map(product => `
                    <li class="price-item">
                        <span class="price-item-name">${product.name}</span>
                        <span class="price-item-price">₹${product.price}/${product.unit}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

// Inventory Page Functions
if (window.location.pathname.includes('inventory.html')) {
    let currentCategory = 'all';
    let currentStatus = 'all';
    let isAuthenticated = false; // Always require password on page load

    // Password Protection
    window.checkPassword = function() {
        const ownerIdInput = document.getElementById('ownerIdInput');
        const passwordInput = document.getElementById('passwordInput');
        const passwordError = document.getElementById('passwordError');
        const enteredId = ownerIdInput.value.trim();
        const enteredPassword = passwordInput.value;

        if (!enteredId || !enteredPassword) {
            passwordError.textContent = '⚠️ Please enter both ID and password.';
            setTimeout(() => {
                passwordError.textContent = '';
            }, 3000);
            return;
        }

        if (enteredId === CONFIG.inventoryOwnerId && enteredPassword === CONFIG.inventoryPassword) {
            document.getElementById('passwordModal').style.display = 'none';
            document.getElementById('inventoryContent').style.display = 'block';
            isAuthenticated = true;
            renderInventoryTable();
            showNotification('✓ Access granted!');
        } else {
            passwordError.textContent = '❌ Incorrect ID or password. Please try again.';
            ownerIdInput.value = '';
            passwordInput.value = '';
            ownerIdInput.focus();
            setTimeout(() => {
                passwordError.textContent = '';
            }, 3000);
        }
    };

    window.goBack = function() {
        window.location.href = 'index.html';
    };

    // Always show password modal on load
    document.getElementById('passwordModal').style.display = 'flex';
    document.getElementById('inventoryContent').style.display = 'none';

    // Allow Enter key to submit password
    const passwordModal = document.getElementById('passwordModal');
    if (passwordModal) {
        document.getElementById('ownerIdInput')?.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        document.getElementById('passwordInput')?.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }

    function updateInventoryStats() {
        let available = 0;
        let lowStock = 0;
        let outOfStock = 0;

        productsData.forEach(product => {
            const inv = inventory[product.id] || { status: 'available' };
            if (inv.status === 'available') available++;
            else if (inv.status === 'low') lowStock++;
            else if (inv.status === 'out') outOfStock++;
        });

        document.getElementById('availableCount').textContent = available;
        document.getElementById('lowStockCount').textContent = lowStock;
        document.getElementById('outOfStockCount').textContent = outOfStock;
        document.getElementById('totalProducts').textContent = productsData.length;
    }

    function renderInventoryTable() {
        const tableBody = document.getElementById('inventoryTableBody');
        
        const filteredProducts = productsData.filter(product => {
            const inv = inventory[product.id] || { status: 'available' };
            const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
            const matchesStatus = currentStatus === 'all' || inv.status === currentStatus;
            return matchesCategory && matchesStatus;
        });

        if (filteredProducts.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 3rem; color: #666;">No products found.</td></tr>';
            return;
        }

        tableBody.innerHTML = filteredProducts.map(product => {
            const inv = inventory[product.id] || { stockLevel: 100, status: 'available' };
            const sales = salesHistory[product.id] || { totalSold: 0, lastSold: null };
            const statusClass = inv.status === 'available' ? 'available' : inv.status === 'low' ? 'low-stock' : 'out-of-stock';
            const statusText = inv.status === 'available' ? 'Available' : inv.status === 'low' ? 'Low Stock' : 'Out of Stock';
            
            // Check if icon is a URL or emoji
            const isImageUrl = product.icon && (product.icon.startsWith('http://') || product.icon.startsWith('https://') || product.icon.startsWith('data:'));
            const iconDisplay = isImageUrl 
                ? `<img src="${product.icon}" alt="${product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 6px;">` 
                : `<span style="font-size: 2rem;">${product.icon || '📎'}</span>`;

            return `
                <tr>
                    <td>
                        <div class="product-name-cell">
                            <span class="product-icon">${iconDisplay}</span>
                            <span>${product.name}</span>
                        </div>
                    </td>
                    <td>${product.category}</td>
                    <td><strong>₹${product.price}/${product.unit}</strong></td>
                    <td>
                        <input type="number" 
                               class="stock-level-input" 
                               value="${inv.stockLevel}" 
                               min="0" 
                               onchange="updateStock(${product.id}, this.value)">
                    </td>
                    <td>
                        <span class="status-badge ${statusClass}">${statusText}</span>
                        <div style="font-size: 0.75rem; color: #666; margin-top: 4px;">📊 Sold: ${sales.totalSold}</div>
                    </td>
                    <td>
                        <div class="action-btns">
                            <button class="btn-edit" onclick="editProduct(${product.id})">✏️ Edit</button>
                            <button class="btn-delete" onclick="deleteProduct(${product.id})">🗑️ Delete</button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');

        updateInventoryStats();
    }

    // Global functions for onclick handlers
    window.updateStock = function(productId, stockLevel) {
        stockLevel = parseInt(stockLevel) || 0;
        updateProductStatus(productId, stockLevel);
        renderInventoryTable();
        showNotification('Stock level updated!');
    };

    window.markAsAvailable = function(productId) {
        inventory[productId].stockLevel = 100;
        updateProductStatus(productId, 100);
        renderInventoryTable();
        showNotification('Product marked as available!');
    };

    window.markAsOut = function(productId) {
        inventory[productId].stockLevel = 0;
        updateProductStatus(productId, 0);
        renderInventoryTable();
        showNotification('Product marked as out of stock!');
    };

    window.markAllAvailable = function() {
        if (confirm('Mark all products as available with stock level 100?')) {
            productsData.forEach(product => {
                inventory[product.id].stockLevel = 100;
                updateProductStatus(product.id, 100);
            });
            renderInventoryTable();
            showNotification('All products marked as available!');
        }
    };

    window.exportInventory = function() {
        let csvContent = 'Product Name,Category,Price,Unit,Stock Level,Status,Total Sold,Remaining\n';
        
        productsData.forEach(product => {
            const inv = inventory[product.id] || { stockLevel: 100, status: 'available' };
            const sales = salesHistory[product.id] || { totalSold: 0 };
            const statusText = inv.status === 'available' ? 'Available' : inv.status === 'low' ? 'Low Stock' : 'Out of Stock';
            csvContent += `"${product.name}","${product.category}",${product.price},"${product.unit}",${inv.stockLevel},"${statusText}",${sales.totalSold},${inv.stockLevel}\n`;
        });

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `inventory_report_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        showNotification('Inventory report exported!');
    };

    // Product Management Functions
    let editingProductId = null;

    window.openAddProductModal = function() {
        editingProductId = null;
        document.getElementById('modalTitle').textContent = 'Add New Product';
        document.getElementById('productForm').reset();
        document.getElementById('productStock').value = 100;
        document.getElementById('productIcon').value = '📎';
        updateIconPreview('📎');
        document.getElementById('productModal').style.display = 'flex';
    };

    window.closeProductModal = function() {
        document.getElementById('productModal').style.display = 'none';
        editingProductId = null;
    };

    window.editProduct = function(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        editingProductId = productId;
        document.getElementById('modalTitle').textContent = 'Edit Product';
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productUnit').value = product.unit;
        document.getElementById('productIcon').value = product.icon || '📎';
        
        // Update preview
        updateIconPreview(product.icon || '📎');
        
        const inv = inventory[productId] || { stockLevel: 100 };
        document.getElementById('productStock').value = inv.stockLevel;
        
        document.getElementById('productModal').style.display = 'flex';
    };

    window.deleteProduct = function(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        if (!confirm(`Are you sure you want to delete "${product.name}"? This action cannot be undone!`)) {
            return;
        }

        // Remove from products array
        productsData = productsData.filter(p => p.id !== productId);
        
        // Remove from inventory and sales history
        delete inventory[productId];
        delete salesHistory[productId];
        
        // Remove from cart if present
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Save changes
        saveProducts();
        saveInventory();
        saveSalesHistory();
        updateCartCount();
        
        renderInventoryTable();
        showNotification(`✓ Product "${product.name}" deleted successfully!`);
    };

    // Handle product form submission
    document.getElementById('productForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('productName').value.trim();
        const category = document.getElementById('productCategory').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const unit = document.getElementById('productUnit').value.trim();
        const icon = document.getElementById('productIcon').value.trim() || '📎';
        const stock = parseInt(document.getElementById('productStock').value) || 100;

        if (!name || !category || !price || !unit) {
            alert('Please fill all required fields!');
            return;
        }

        if (editingProductId) {
            // Update existing product
            const product = productsData.find(p => p.id === editingProductId);
            if (product) {
                product.name = name;
                product.category = category;
                product.price = price;
                product.unit = unit;
                product.icon = icon;
                
                // Update inventory stock
                inventory[editingProductId].stockLevel = stock;
                updateProductStatus(editingProductId, stock);
                
                saveProducts();
                saveInventory();
                
                showNotification(`✓ Product "${name}" updated successfully!`);
            }
        } else {
            // Add new product
            const newId = productsData.length > 0 ? Math.max(...productsData.map(p => p.id)) + 1 : 1;
            
            const newProduct = {
                id: newId,
                name: name,
                category: category,
                price: price,
                unit: unit,
                icon: icon
            };
            
            productsData.push(newProduct);
            
            // Initialize inventory for new product
            inventory[newId] = {
                stockLevel: stock,
                status: stock > 20 ? 'available' : stock > 0 ? 'low' : 'out'
            };
            
            salesHistory[newId] = {
                totalSold: 0,
                lastSold: null
            };
            
            saveProducts();
            saveInventory();
            saveSalesHistory();
            
            showNotification(`✓ Product "${name}" added successfully!`);
        }
        
        closeProductModal();
        renderInventoryTable();
    });

    // Helper function to update icon preview
    function updateIconPreview(iconValue) {
        const preview = document.getElementById('currentIconPreview');
        if (!preview) return;
        
        // Check if it's an image URL
        if (iconValue && (iconValue.startsWith('http://') || iconValue.startsWith('https://') || iconValue.startsWith('data:'))) {
            preview.innerHTML = `<img src="${iconValue}" alt="Icon" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px;">`;
        } else {
            // It's an emoji or text
            preview.textContent = iconValue || '📎';
        }
    }

    // Listen to icon input changes for live preview
    document.getElementById('productIcon')?.addEventListener('input', function(e) {
        updateIconPreview(e.target.value);
    });

    // Handle image file upload
    document.getElementById('iconImageUpload')?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;

        // Check file type
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file!');
            return;
        }

        // Check file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('Image size should be less than 2MB!');
            return;
        }

        // Convert to base64
        const reader = new FileReader();
        reader.onload = function(event) {
            const base64Image = event.target.result;
            document.getElementById('productIcon').value = base64Image;
            updateIconPreview(base64Image);
            showNotification('✓ Image uploaded successfully!');
        };
        reader.onerror = function() {
            alert('Error reading file. Please try again.');
        };
        reader.readAsDataURL(file);
    });

    // Category filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderInventoryTable();
        });
    });

    // Status filter
    document.querySelectorAll('.status-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.status-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStatus = btn.dataset.status;
            renderInventoryTable();
        });
    });

    // Initial render
    renderInventoryTable();
}
