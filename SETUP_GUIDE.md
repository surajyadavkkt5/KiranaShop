# 🏪 Fresh Kirana - Free Order Management System

## 📋 Setup Instructions

### Step 1: Configure WhatsApp Number

1. Open `script.js`
2. Find the `CONFIG` object at the top
3. Replace `919876543210` with your shop's WhatsApp number (include country code, no + or spaces)
   ```javascript
   whatsappNumber: '919876543210', // Replace with your number
   ```

### Step 2: Setup Google Sheets Integration

#### A. Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Kirana Orders"
3. In the first row, add these headers:
   - A1: Date
   - B1: Name
   - C1: Phone
   - D1: Address
   - E1: Items
   - F1: Total

#### B. Create Google Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.date,
      data.name,
      data.phone,
      data.address,
      data.items,
      data.total
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy** > **New deployment**
5. Click the gear icon ⚙️ and select **Web app**
6. Configure:
   - Description: "Kirana Order Logger"
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**
8. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/...`)
9. Click **Authorize access** and grant permissions

#### C. Update Website Configuration
1. Open `script.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with the URL you copied:
   ```javascript
   googleSheetURL: 'https://script.google.com/macros/s/YOUR_ACTUAL_URL',
   ```

### Step 3: Customize Products

Edit the `productsData` array in `script.js` to add/modify products:
```javascript
{ id: 1, name: 'Product Name', category: 'Rice', price: 120, unit: 'kg', icon: '🌾' }
```

Categories: Rice, Pulses, Oil, Snacks, Beverages, Household

### Step 4: Deploy Website (Choose One)

#### Option A: Netlify (Recommended)
1. Go to [Netlify](https://www.netlify.com)
2. Sign up for free
3. Drag and drop all your files (index.html, products.html, cart.html, style.css, script.js)
4. Your site will be live instantly!

#### Option B: GitHub Pages
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `kirana-shop`
3. Upload all files
4. Go to Settings > Pages
5. Select main branch and save
6. Your site will be available at `https://yourusername.github.io/kirana-shop`

#### Option C: Google Sites
1. Create HTML file with all code combined
2. Upload to Google Sites as embedded HTML
3. Note: Google Sites has limitations with custom JavaScript

### Step 5: Test Your Website

1. Open your deployed website
2. Browse products and add to cart
3. Go to cart page
4. Fill in customer details
5. Click "Send Order on WhatsApp"
6. Check if:
   - WhatsApp opens with order details
   - Order appears in Google Sheet

## 📱 Features

- ✅ Browse products by category
- ✅ Search functionality
- ✅ Shopping cart with quantity controls
- ✅ Send orders via WhatsApp
- ✅ Automatic Google Sheets logging
- ✅ Mobile responsive design
- ✅ No database required
- ✅ 100% free tools

## 🎨 Customization

### Change Colors
Edit `style.css` variables:
```css
:root {
    --primary-color: #2d8a2d;  /* Green */
    --secondary-color: #ff7b00; /* Orange */
}
```

### Add Shop Logo
Replace the emoji in navigation:
```html
<span class="logo-icon">🏪</span>
```
Or use an image:
```html
<img src="logo.png" alt="Logo" style="height: 40px;">
```

### Update Contact Info
In `index.html`, update:
- Phone numbers: `tel:+919876543210`
- WhatsApp link: `https://wa.me/919876543210`
- Map location: Replace Google Maps link

## 🔧 Troubleshooting

**Orders not saving to Google Sheet?**
- Check if Apps Script URL is correct
- Ensure Apps Script deployment is set to "Anyone"
- Check browser console for errors

**WhatsApp not opening?**
- Verify WhatsApp number format (country code without +)
- Test on mobile device

**Products not showing?**
- Check browser console for JavaScript errors
- Ensure all files are in the same directory

## 📞 Support

For issues or questions, check the code comments in `script.js` for detailed explanations.

## 🚀 Optional Enhancements

1. **Add Admin Panel**: Create `admin.html` to manage products via Google Sheets
2. **Add Images**: Use free images from Unsplash/Pixabay
3. **Add More Categories**: Edit `productsData` and category filters
4. **Enable Delivery Slots**: Add time selection in cart
5. **Add Payment Options**: Include COD/UPI instructions

---

Made with ❤️ for local Kirana shops
