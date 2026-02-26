// App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  });
  const [formError, setFormError] = useState('');
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      setFormError('Please select at least one option.');
      return;
    }
    // Here you would normally send the form data to a server
    console.log('Form submitted:', formData);
    setFormError('');
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleCookieAccept = () => {
    setShowCookieBanner(false);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <a href="/" className="logo">Meraki</a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Call us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Classy Accessories made just for you</h1>
            <h2>Elevate Your Style</h2>
            <p>Welcome to Meraki - Unique accessories made just for you</p>
            <a href="#products" className="btn-primary">View products</a>
          </div>
          <img 
            src="./مرحباً بكم في meraki - إكسسوارات النساء الفريدة_files/a31634bb-0d21-11f1-afc9-0242ac110002-jpg-hero_image.png" 
            alt="Meraki Hero" 
            className="hero-image"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <img 
            src="./مرحباً بكم في meraki - إكسسوارات النساء الفريدة_files/a411cb6f-0d2d-11f1-9303-0242ac110002--hero_image.jpeg" 
            alt="About Meraki" 
            className="about-image"
          />
          <div className="about-text">
            <h2>Welcome to Meraki</h2>
            <h3>Elegant women's accessories - Crafted with passion and style</h3>
            <p>
              At Meraki, we take pride in offering a diverse collection of carefully crafted women's accessories designed to suit every taste. Under the creative direction of the talented designer Maryam Khaled, we use only the finest materials to bring you unique and distinctive pieces that stand out with elegance.
            </p>
            <p>
              Each accessory is thoughtfully made to reflect your individual style and personality, making it the perfect choice to add a touch of sophistication to your everyday look. Our commitment to quality and excellence ensures that every piece not only complements your outfit but also inspires confidence and beauty from within.
            </p>
            <p>
              Enjoy an exceptional shopping experience with Meraki, where passion for craftsmanship meets dedication to customer satisfaction. With us, you're not just choosing accessories—you're embracing artistry and celebrating your unique sense of style.
            </p>
            <a href="#contact" className="btn-primary">Get in touch</a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <div className="products-container">
          <h2>Our Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <img 
                src="./مرحباً بكم في meraki - إكسسوارات النساء الفريدة_files/db71b96b-0d2c-11f1-b0d4-0242ac110002-jpeg-regular_image.jpeg" 
                alt="Elegant statement necklace" 
                className="product-image"
              />
              <div className="product-info">
                <h3>Elegant statement necklace</h3>
                <p>Perfect for any occasion</p>
              </div>
            </div>

            <div className="product-card">
              <img 
                src="./مرحباً بكم في meraki - إكسسوارات النساء الفريدة_files/e63c704b-0d2c-11f1-987a-0242ac110002--regular_image.jpeg" 
                alt="Chic hand-made bag" 
                className="product-image"
              />
              <div className="product-info">
                <h3>Chic hand-made bag</h3>
                <p>Stylish and functional</p>
              </div>
            </div>

            <div className="product-card">
              <img 
                src="./مرحباً بكم في meraki - إكسسوارات النساء الفريدة_files/069431f7-0d2d-11f1-958e-0242ac110002--regular_image.jpeg" 
                alt="Royal Coin Bracelet" 
                className="product-image"
              />
              <div className="product-info">
                <h3>Royal Coin Bracelet</h3>
                <p>Hand Harness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <h2>Contact us</h2>
          <p>We are here to help you</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <input 
                type="checkbox" 
                id="agree" 
                name="agree" 
                checked={formData.agree}
                onChange={handleInputChange}
              />
              <label htmlFor="agree">
                I allow this website to store my submission so they can respond to my inquiry. *
              </label>
            </div>

            {formError && <p className="error-message">{formError}</p>}

            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="cookie-banner">
          <p>This website uses cookies to ensure you get the best browsing experience.</p>
          <button className="cookie-btn" onClick={handleCookieAccept}>
            I agree
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>Website designed with the B12 website builder.</p>
        <p>
          <a href="https://www.b12.io/ai-web-design/" target="_blank" rel="noopener noreferrer">
            Create your own website today
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;