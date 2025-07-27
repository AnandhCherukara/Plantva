# PlantVA - Local Plant Nursery Finder

A modern, responsive website that helps customers discover and connect with local plant nurseries in their area.

## 🌱 Features

### Core Functionality
- **Location-based Search**: Find nurseries by entering your location
- **Category Filtering**: Filter nurseries by plant types (Indoor, Outdoor, Succulents, Flowers)
- **Nursery Profiles**: Detailed information about each nursery including ratings, reviews, and contact details
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### User Experience
- **Modern UI**: Clean, beautiful design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and loading animations
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Search Functionality**: Real-time search with loading indicators

### Nursery Information
- **Featured Badges**: Highlight top-rated nurseries
- **Star Ratings**: Visual rating system with reviews count
- **Specialty Tags**: Easy identification of nursery specialties
- **Contact Options**: Direct access to phone numbers and websites
- **Detailed Modals**: Comprehensive nursery information in popup modals

## 🚀 Getting Started

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Search for Nurseries**: Use the search bar to find nurseries by location
3. **Filter Results**: Use the category buttons to filter by plant types
4. **View Details**: Click "Details" to see comprehensive nursery information
5. **Contact Nurseries**: Click "Contact" to get contact information

## 📁 File Structure

```
Plantva/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This documentation file
```

## 🎨 Design Features

### Color Scheme
- **Primary Green**: #4caf50 (Plant theme)
- **Dark Green**: #2d5a27 (Headers and footer)
- **Light Background**: #fafafa (Clean, modern look)
- **Accent Colors**: Various shades for visual hierarchy

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Animations
- **Floating Hero**: Gentle floating animation for the main illustration
- **Hover Effects**: Smooth transitions on interactive elements
- **Fade-in Effects**: Cards appear with smooth animations
- **Loading Spinner**: Professional loading indicators

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with grid layouts
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Mobile-first design with hamburger navigation

## 🔧 Customization

### Adding New Nurseries
To add new nurseries, edit the `nurseries` array in `script.js`:

```javascript
{
    id: 7,
    name: "Your Nursery Name",
    location: "Your Location",
    specialties: ["indoor", "outdoor"], // Choose from: indoor, outdoor, succulents, flowers
    rating: 4.5,
    reviews: 100,
    description: "Your nursery description",
    phone: "+1 (555) 123-4567",
    website: "https://yourwebsite.com",
    featured: false // Set to true for featured badge
}
```

### Modifying Colors
Update the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #4caf50;
    --dark-green: #2d5a27;
    --light-bg: #fafafa;
}
```

### Adding New Categories
1. Add a new filter button in `index.html`
2. Update the `specialties` array in nursery data
3. Add corresponding footer links

## 🌟 Sample Data

The website includes 6 sample nurseries:
1. **Green Thumb Nursery** - Downtown District (Featured)
2. **Sunny Gardens** - Westside
3. **Cactus Corner** - East Valley (Featured)
4. **Blooming Beauty** - North Hills
5. **Urban Jungle** - City Center
6. **Garden Paradise** - South Meadows (Featured)

## 📞 Contact Information

Each nursery includes:
- Phone number
- Website link
- Location information
- Specialties and ratings

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Features
- **Optimized Images**: SVG icons for scalability
- **Minimal Dependencies**: Only essential external resources
- **Fast Loading**: Optimized CSS and JavaScript
- **Smooth Animations**: Hardware-accelerated transitions

## 🚀 Future Enhancements

Potential features for future versions:
- **Map Integration**: Google Maps or OpenStreetMap
- **User Reviews**: Customer review system
- **Nursery Registration**: Self-service nursery signup
- **Advanced Filters**: Price range, distance, availability
- **Favorites System**: Save favorite nurseries
- **Push Notifications**: New nursery alerts
- **Mobile App**: Native mobile application

## 📄 License

This project is open source and available under the MIT License.

---

**PlantVA** - Connecting plant lovers with the best local nurseries! 🌱 