import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Ensure to import the CSS file

const IndexPage = () => {
    const [productData, setProductData] = useState({});
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const initialProductData = {
            'Fresh Tomatoes': {
                quality: 'Premium Grade A',
                totalStock: 100,
                availableStock: 100,
                unit: 'kg',
                delivery: 'Same Day Delivery',
                category: 'Fresh Vegetables',
                weight: 'Available in 1kg, 2kg, 5kg',
                price: '$2.99/kg',
                description: 'Fresh, ripe tomatoes perfect for salads and cooking'
            },
            'Green Lettuce': {
                quality: 'Organic Grade A',
                totalStock: 50,
                availableStock: 50,
                unit: 'kg',
                delivery: 'Next Day Delivery',
                category: 'Leafy Greens',
                weight: 'Available in 250g, 500g',
                price: '$1.99/piece',
                description: 'Crisp and fresh lettuce leaves'
            },
            'Fresh Carrots': {
                quality: 'Premium Grade A',
                totalStock: 150,
                availableStock: 150,
                unit: 'kg',
                delivery: 'Same Day Delivery',
                category: 'Root Vegetables',
                weight: 'Available in 500g, 1kg',
                price: '$1.49/kg',
                description: 'Sweet and crunchy carrots'
            },
            'Bell Peppers': {
                quality: 'Premium Grade A',
                totalStock: 80,
                availableStock: 80,
                unit: 'kg',
                delivery: 'Same Day Delivery',
                category: 'Fresh Vegetables',
                weight: 'Available in 500g, 1kg',
                price: '$3.99/kg',
                description: 'Colorful and crisp bell peppers'
            }
        };

        setProductData(initialProductData);
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const addToCart = (productName) => {
        const updatedCartItems = [...cartItems];
        const existingItemIndex = updatedCartItems.findIndex(item => item.name === productName);
        if (existingItemIndex > -1) {
            updatedCartItems[existingItemIndex].quantity += 1;
        } else {
            updatedCartItems.push({ name: productName, quantity: 1 });
        }
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <div>
            <nav className="navbar">
                <div className="logo"><i className="fas fa-leaf"></i>VeggieHub</div>
                <ul className="nav-links">
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="#products">Products</Link></li>
                    <li><Link to="cart.html">Cart <span className="cart-count">{cartItems.length}</span></Link></li>
                    <li><Link to="contact.html">Contact Us</Link></li>
                    <li><Link to="about.html">About Us</Link></li>
                </ul>
                <form>
                    <input type="text" placeholder="Search for products..." required />
                    <button type="submit">Search</button>
                </form>
                <button id="darkModeToggle">
                    <i className="fas fa-moon"></i> Dark Mode
                </button>
            </nav>

            <div className="hero-section">
                <div className="hero-content">
                    <h1>Fresh & Healthy<br />Vegetables</h1>
                    <p>Get farm-fresh vegetables delivered to your doorstep</p>
                    <Link to="#products" className="cta-button">Shop Now <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>

            <main>
                <section className="features">
                    <div className="feature-card">
                        <i className="fas fa-truck"></i>
                        <h3>Free Delivery</h3>
                        <p>On orders above $30</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-leaf"></i>
                        <h3>Fresh Produce</h3>
                        <p>Directly from farms</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-shield-alt"></i>
                        <h3>Quality Assured</h3>
                        <p>100% organic</p>
                    </div>
                </section>

                <section id="products">
                    <h2 className="section-title">Our Fresh Vegetables</h2>
                    <div className="vegetable-grid">
                        {Object.keys(productData).map(productName => (
                            <div className="veg-card" key={productName}>
                                <div className="card-badge">Fresh</div>
                                <div className="img-container">
                                    <img src="http://images.unsplash.com/photo-1561136594-7f68413baa99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={productName} />
                                </div>
                                <div className="card-content">
                                    <h3>{productName}</h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <p className="price">{productData[productName].price}</p>
                                    <button className="add-to-cart-btn" onClick={() => addToCart(productName)}>
                                        <i className="fas fa-cart-plus"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3><i className="fas fa-leaf"></i> VeggieMart</h3>
                        <p>Fresh vegetables delivered to your doorstep</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="#home">Home</Link></li>
                            <li><Link to="#products">Products</Link></li>
                            <li><Link to="cart.html">Cart</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p><i className="fas fa-phone"></i> +1 234 567 890</p>
                        <p><i className="fas fa-envelope"></i> info@veggiemart.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 VeggieMart. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default IndexPage;
