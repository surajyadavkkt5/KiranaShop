Fresh Kirana Website Overview
# 🏪 Fresh Kirana - Online Shop Website

A complete web-based kirana (grocery) shop management system with inventory tracking, shopping cart, and WhatsApp order integration.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages](#pages)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Guide](#usage-guide)
- [Product Management](#product-management)
- [Inventory System](#inventory-system)
- [Data Persistence](#data-persistence)
- [File Structure](#file-structure)
- [Customization](#customization)

## 🎯 Overview

Fresh Kirana is a fully functional online shop website designed for local kirana stores. It allows customers to browse products, add items to cart, and place orders via WhatsApp. Shop owners can manage inventory, track stock levels, add/edit/delete products, and monitor sales.

## ✨ Features

### Customer Features
- **Browse Products**: View all products organized by categories
- **Product Search**: Search products by name
- **Category Filter**: Filter products by category (Rice & Grains, Pulses, Oils, Snacks, Beverages, Household, Books, Pens, Stationery)
- **Shopping Cart**: Add/remove items, adjust quantities
- **Stock Status**: Real-time stock availability (Available, Low Stock, Out of Stock)
- **WhatsApp Orders**: Send orders directly to shop owner via WhatsApp
- **Responsive Design**: Mobile-friendly interface with hamburger menu

### Owner Features
- **Secure Access**: Password-protected inventory management
- **Inventory Tracking**: Real-time stock level monitoring
- **Product Management**: Add, edit, and delete products
- **Image Support**: Use emojis or upload custom product images
- **Stock Updates**: Quick stock adjustment with one-click actions
- **Sales Analytics**: Track total units sold per product
- **Export Reports**: Download inventory reports as CSV
- **Bulk Actions**: Mark all products as available instantly

## 📄 Pages

### 1. **Home Page** (`index.html`)
- Welcome section with shop branding
- Featured categories with visual cards
- Complete price list organized by category
- Quick navigation to products and cart

### 2. **Products Page** (`products.html`)
- Product grid display with images/icons
- Category filtering
- Search functionality
- Stock status indicators
- Add to cart with quantity selection
- Real-time inventory synchronization

### 3. **Cart Page** (`cart.html`)
- Cart items with quantity controls
- Price calculation and total amount
- Customer information form (Name, Phone, Address)
- WhatsApp order submission
- Clear cart option

### 4. **Inventory Page** (`inventory.html`)
- **Password Protected** (Default: ID = `admin`, Password = `123`)
- Inventory statistics dashboard
- Product table with stock levels
- Status-based filtering (All, Available, Low Stock, Out of Stock)
- Category filtering
- Product CRUD operations (Create, Read, Update, Delete)
- Stock level adjustment
- CSV export functionality

### 5. **Contact Page** (`contact.html`)
- Shop contact information
- Business hours
- Location details

### 6. **Privacy Policy** (`privacy.html`)
- Privacy and data usage information

### 7. **Terms & Conditions** (`terms.html`)
- Service terms and conditions

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: localStorage (client-side)
- **Styling**: Custom CSS with Google Fonts (Poppins)
- **Icons**: Emoji-based + Custom image upload support
- **Integration**: WhatsApp Business API
- **Optional**: Google Sheets integration for order logging

## 📦 Installation

### Quick Start (No Installation Required)

1. **Download/Clone** the project files to your computer
2. **Open** `index.html` in any modern web browser
3. **Done!** The website is ready to use

### Hosting on GitHub Pages

1. Create a new GitHub repository
2. Upload all project files using GitHub's web interface
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Local Development Server

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Then open: http://localhost:8000
```

## ⚙️ Configuration

Edit `script.js` to configure your shop settings:

```javascript
const CONFIG = {
    whatsappNumber: '#',        // Your WhatsApp number (with country code)
    googleSheetURL: 'YOUR_GOOGLE_APPS_SCRIPT_URL', // Optional: Google Sheets integration
    shopName: 'Fresh Kirana',              // Your shop name
    inventoryOwnerId: 'admin',             // Inventory login ID
    inventoryPassword: '123'                // Inventory login password
};
```

### WhatsApp Setup

1. Replace `#` with your WhatsApp number
2. Include country code (e.g., 91 for India)
3. Remove spaces, + or - symbols
4. Example: `918123456789`

### Inventory Password

**IMPORTANT**: Change the default password for security!

```javascript
inventoryOwnerId: 'your-custom-id',
inventoryPassword: 'your-secure-password'
```

## 📖 Usage Guide

### For Customers

1. **Browse Products**
   - Visit the home page to see categories
   - Click on any category card to view products
   - Use the search bar to find specific items

2. **Add to Cart**
   - Select quantity
   - Click "Add to Cart"
   - Check stock availability (Available/Low Stock/Out of Stock)

3. **Place Order**
   - Navigate to Cart page
   - Review items and quantities
   - Fill in your details (Name, Phone, Address)
   - Click "Send Order on WhatsApp"
   - Complete order in WhatsApp chat

### For Shop Owners

1. **Access Inventory**
   - Go to `inventory.html`
   - Enter Owner ID and Password
   - Default: ID = `admin`, Password = `123`

2. **View Dashboard**
   - See total products, available, low stock, and out of stock counts
   - Filter by category or status
   - View sales history for each product

3. **Manage Stock**
   - Adjust stock levels directly in the table
   - Stock status updates automatically:
     - **Available**: Stock > 20
     - **Low Stock**: Stock 1-20
     - **Out of Stock**: Stock = 0

4. **Quick Actions**
   - **Mark All Available**: Set all products to stock level 100
   - **Export Report**: Download inventory as CSV file

## 🎨 Product Management

### Adding New Products

1. Click **"➕ Add New Product"** button
2. Fill in the form:
   - **Product Name**: e.g., "Basmati Rice"
   - **Category**: Select from dropdown
   - **Price**: Enter price in rupees
   - **Unit**: e.g., "kg", "L", "piece"
   - **Icon/Image**: Choose one of three options:
     - Type an emoji (e.g., 🌾)
     - Paste an image URL
     - Upload an image file from your device
   - **Initial Stock**: Default is 100
3. Click **"Save Product"**

### Editing Products

1. Click **"✏️ Edit"** button next to any product
2. Modify any field including:
   - Name, price, category, unit
   - Icon/image (replace with new emoji or upload new image)
   - Stock level
3. Click **"Save Product"**

### Deleting Products

1. Click **"🗑️ Delete"** button
2. Confirm deletion
3. Product removed from all pages and localStorage

### Image Options

**Option 1: Emoji** (Recommended for quick setup)
```
Type any emoji: 🌾 🫘 🛢️ 🍪 🥤 🧹 📚 ✏️
```

**Option 2: Image URL**
```
Paste any image URL:
https://example.com/product-image.jpg
```

**Option 3: Upload Image**
```
1. Click "📁 Choose Image File"
2. Select image (max 2MB)
3. Image converts to base64 and stores in localStorage
```

## 📊 Inventory System

### Stock Status Logic

```javascript
Stock > 20    → ✅ Available (Green badge)
Stock 1-20    → ⚠️ Low Stock (Yellow badge)
Stock = 0     → ❌ Out of Stock (Red badge)
```

### Automatic Stock Management

- Adding to cart **decreases** stock level
- Removing from cart **increases** stock level
- Stock updates reflect immediately across all pages
- Out-of-stock products cannot be added to cart

### Sales Tracking

- Total units sold per product
- Last sold timestamp
- Visible in inventory dashboard

## 💾 Data Persistence

### localStorage Structure

All data is stored in the browser's localStorage:

```javascript
{
  "productsData": [...],      // All products with details
  "inventory": {...},         // Stock levels and status
  "cart": [...],              // Current cart items
  "salesHistory": {...}       // Sales tracking data
}
```

### Important Notes

- Data persists across page refreshes
- **⚠️ Data is browser-specific and device-specific** (NOT synced across devices)
- Clearing browser data will reset everything
- No backend database required
- Works offline after first load

### ⚠️ CRITICAL: Cross-Device Syncing Issue

**Problem**: When you update products on one device, the changes DON'T automatically appear on other devices because localStorage is local to each browser.

**Solutions**:

#### 🚀 Solution 1: GitHub Auto-Sync (RECOMMENDED - No Account Needed!)

**Use your GitHub repository as a free database!**

- ✅ **Zero setup** - Already works if you host on GitHub Pages
- ✅ **Completely free** - No third-party accounts needed
- ✅ **One-click update** - Export → Upload to GitHub → Done!
- ✅ **All visitors see changes** after page refresh

**How it works:**

1. **Make changes** in inventory page (add/edit products)
2. **Click "👔 Export for GitHub"** button
3. **Upload to GitHub**:
   - Go to your repository on GitHub
   - Click "Add file" → "Upload files"
   - Drag the downloaded `products-data.json` file
   - Click "Commit changes"
4. **Done!** All visitors see updates after refreshing (within 1-2 minutes)

**First-time setup** (if not already enabled):
- In `script.js`, ensure: `useGitHubSync: true` (already enabled by default)

#### 📦 Solution 2: Manual Export/Import

#### To Sync Changes Across Devices:

1. **On Device A** (where you made changes):
   - Go to inventory page
   - Click **"💾 Export Products"** button
   - Download the `.json` file

2. **On Device B** (where you want the changes):
   - Go to inventory page
   - Click **"📤 Import Products"** button
   - Select the downloaded `.json` file
   - Confirm import

3. **Done!** All products, icons, inventory levels, and sales data are now synced.

#### Update Your GitHub Site:

To make changes permanent on your hosted website:

1. Export products as JSON
2. Open `script.js` in GitHub web editor (press `.` on repository page)
3. Replace the `productsData` array with your exported data
4. Commit and push changes
5. All visitors will see the updated products

**Alternative**: For automatic syncing across devices, you would need a backend database (Firebase, MongoDB, etc.) - this is beyond the current simple setup.

## 📁 File Structure

```
A_Shop_Website/
├── index.html          # Home page with categories and price list
├── products.html       # Product browsing and shopping
├── cart.html          # Shopping cart and checkout
├── inventory.html     # Inventory management (password-protected)
├── contact.html       # Contact information
├── privacy.html       # Privacy policy
├── terms.html         # Terms and conditions
├── script.js          # All JavaScript logic
├── style.css          # All styling
├── products-data.json # GitHub sync data file (auto-loaded by all visitors)
├── README.md          # This file
└── SETUP_GUIDE.md     # Setup instructions
```

## 🎨 Customization

### Change Shop Name

Edit in `script.js`:
```javascript
shopName: 'Your Shop Name'
```

Also update in HTML files:
```html
<span class="logo-text">Your Shop Name</span>
<title>Your Shop Name</title>
```

### Add New Categories

1. Add to category filter buttons (in `products.html` and `inventory.html`)
2. Add category option in product form modal
3. Add category icon mapping in `loadPriceList()` function

### Modify Default Products

Edit the `productsData` array in `script.js`:
```javascript
let productsData = [
    { 
        id: 1, 
        name: 'Product Name', 
        category: 'Category', 
        price: 100, 
        unit: 'kg', 
        icon: '🌾' 
    },
    // ... add more products
];
```

### Change Color Scheme

Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #2d8a2d;    /* Main green color */
    --secondary-color: #f8b500;  /* Accent yellow */
    /* ... modify other colors */
}
```

### Google Sheets Integration (Optional)

1. Create a Google Apps Script
2. Deploy as web app
3. Add URL to `CONFIG.googleSheetURL`
4. Orders will be logged to your spreadsheet

## 🔒 Security Notes

1. **Change Default Password**: The inventory password is stored in plain text in `script.js` - change it immediately
2. **Client-Side Only**: All authentication is client-side (suitable for small shops, not enterprise)
3. **No Sensitive Data**: Don't store sensitive customer information
4. **HTTPS Recommended**: Use HTTPS when hosting publicly

## 🐛 Troubleshooting

### Changes Not Showing on Other Devices/PCs

**Problem**: You updated product icons or inventory on your PC, but the changes don't appear on other devices or when someone else visits your GitHub-hosted site.

**Cause**: localStorage is device-specific and browser-specific. Changes only save locally.

**Solutions**:

1. **Quick Sync (Temporary)**:
   - Export products from Device A ("💾 Export Products")
   - Import on Device B ("📤 Import Products")

2. **Permanent Fix (Update GitHub)**:
   - Export your products as JSON
   - Edit `script.js` on GitHub (press `.` to open web editor)
   - Replace the `productsData` array with your new data
   - Commit changes
   - All visitors will see updates

3. **Future-Proof Solution**:
   - Add a backend database (Firebase, Supabase, MongoDB)
   - This requires additional development

### Products Not Showing
- Check browser console for errors
- Verify localStorage is enabled
- Try clearing localStorage and refreshing

### Cart Not Updating
- Ensure JavaScript is enabled
- Check for browser console errors
- Verify `script.js` is loaded correctly

### WhatsApp Not Opening
- Verify WhatsApp number format in CONFIG
- Check if WhatsApp is installed (mobile) or WhatsApp Web works (desktop)
- Ensure number includes country code

### Images Not Displaying
- For URLs: Check if image URL is accessible
- For uploads: Check file size (max 2MB)
- For emojis: Ensure browser supports emoji rendering

## 📱 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open-source and free to use for personal and commercial purposes.

## 🤝 Support

For issues, questions, or feature requests:
- Check the code comments in `script.js`
- Review this README
- Test in different browsers
- Clear localStorage and try again

## 🎉 Credits

Made with ❤️ for local communities

**Fresh Kirana** - Bringing local shops online, one store at a time.

---

**Version**: 1.0  
**Last Updated**: 2025-10-31
