# TerraGrove 🌿

A modern, responsive e-grocery landing page showcasing fresh vegetables, fruits, and kitchen essentials with elegant animations and user-friendly design.

![TerraGrove Banner](assets/img/img.png)

## 🎯 About The Project

TerraGrove is a top-rated e-groceries shop in Indonesia, dedicated to providing fresh, quality ingredients every day. This landing page features a clean, professional design with smooth scroll animations and an intuitive user interface.

### ✨ Key Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Scroll Animations** - Engaging fade-in and zoom effects using Intersection Observer API
- **Interactive Contact Form** - Client-side form validation with real-time feedback
- **Modern UI/UX** - Clean typography using Playfair Display and Lato fonts
- **Package Showcase** - Grid layout displaying 6 different product categories
- **Testimonial Section** - Customer satisfaction display with visual overlay
- **Sticky Navigation** - Always accessible navigation bar
- **Performance Optimized** - Lightweight vanilla JavaScript implementation

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Vanilla JS for interactions and animations
- **Google Fonts** - Playfair Display & Lato typography
- **Feather Icons** - SVG icon set

## 📁 Project Structure

```
TerraGrove Website/
├── assets/
│   └── img/
│       └── img.png          # Testimonial background image
├── css/
│   └── style.css            # Main stylesheet with responsive design
├── js/
│   └── script.js            # Form validation & scroll animations
├── index.html               # Main landing page
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/terragrove-website.git
   ```

2. Navigate to the project directory
   ```bash
   cd terragrove-website
   ```

3. Open `index.html` in your web browser
   ```bash
   # On Windows
   start index.html
   
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

Or simply double-click the `index.html` file to launch in your default browser.

## 📱 Responsive Breakpoints

The website is optimized for the following screen sizes:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎨 Design Features

### Color Palette
- Primary Text: `#4f4f4f`
- Secondary Background: `#e6e6e61d`
- Accent Color: `#2ecc71` (green for highlights)
- CTA Buttons: `#000000` with hover effects

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body Text**: Lato (sans-serif, readable)

### Animation Effects
- Fade-in-up transitions
- Zoom-in effects
- Staggered delays for package cards
- Smooth hover transitions

## 📋 Sections Overview

1. **Navigation Bar**
   - Sticky header with smooth scrolling
   - Links to Home, Our Package, and Call Us sections

2. **Hero Section**
   - Compelling headline and tagline
   - Right-aligned text for visual impact

3. **Testimonial & Stats**
   - Customer testimonial with image overlay
   - 98% customer satisfaction badge

4. **Contact Form**
   - Name, email, and interest selection
   - Client-side validation
   - Success/error feedback messages

5. **Motto Section**
   - Brand philosophy statement

6. **Our Package**
   - 6 product categories in responsive grid
   - Hover animations on cards
   - Icons for visual representation

7. **Call-to-Action**
   - Final conversion section
   - Prominent CTA button

8. **Footer**
   - Company branding
   - Terms of Service and Privacy Policy links
   - Copyright information

## 🔧 Customization Guide

### Updating Content

1. **Change Business Name**: Edit the `<h2>Terra Grove</h2>` in both header and footer
2. **Modify Packages**: Update the `.package-card` sections in the HTML
3. **Update Contact Form Options**: Edit the `<select>` dropdown options
4. **Replace Images**: Add your images to `assets/img/` and update the `src` attribute

### Styling Adjustments

- Colors: Modify CSS variables or search/replace hex values in `style.css`
- Fonts: Update Google Fonts import in `<head>` and font-family in CSS
- Animations: Adjust timing/delays in `.animate-on-scroll` classes

## 📊 Performance

- **Lightweight**: No external frameworks or libraries
- **Fast Loading**: Minimal HTTP requests
- **SEO Friendly**: Semantic HTML5 structure
- **Accessibility**: Proper form labels and ARIA attributes

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Add backend integration for contact form
- [ ] Implement e-commerce functionality
- [ ] Add product catalog with search/filter
- [ ] Create shopping cart system
- [ ] Integrate payment gateway
- [ ] Add user authentication
- [ ] Multi-language support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Google Fonts for beautiful typography
- Feather Icons for clean SVG icons
- Design inspiration from modern e-commerce platforms

---

**Made with ❤️ for fresh, quality groceries**

*Last Updated: January 2026*