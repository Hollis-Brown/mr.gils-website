"use client"

import { useEffect } from "react"
import BootstrapScript from "../components/bootstrap-script"

export default function Home() {
  useEffect(() => {
    // Add navigation functionality after component mounts
    const handleNavigation = () => {
      // Smooth Scrolling for Anchor Links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault()

          const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
          if (targetId === "#") return

          if (targetId) {
            const targetElement = document.querySelector(targetId)
            if (targetElement) {
              const navbarHeight = (document.querySelector(".navbar") as HTMLElement | null)?.offsetHeight || 76
              const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

              window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
              })
            }
          }
        })
      })

      // Add active class to nav links based on scroll position
      const handleScroll = () => {
        const sections = document.querySelectorAll("section")
        const navLinks = document.querySelectorAll(".nav-link")

        let current = ""

        sections.forEach((section) => {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight

          if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id") || ""
          }
        })

        navLinks.forEach((link) => {
          link.classList.remove("active")
          const href = link.getAttribute("href")
          if (href && href === `#${current}`) {
            link.classList.add("active")
          } else if (current === "" && href === "#") {
            link.classList.add("active")
          }
        })
      }

      window.addEventListener("scroll", handleScroll)
      handleScroll() // Initial call
    }

    // Back to Top Button functionality
    const handleBackToTop = () => {
      const backToTopButton = document.getElementById("backToTop")
      if (backToTopButton) {
        const handleBackToTopScroll = () => {
          if (window.pageYOffset > 300) {
            backToTopButton.classList.add("active")
          } else {
            backToTopButton.classList.remove("active")
          }
        }

        window.addEventListener("scroll", handleBackToTopScroll)

        backToTopButton.addEventListener("click", (e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        })
      }
    }

    // Initialize navigation and back to top after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      handleNavigation()
      handleBackToTop()
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <BootstrapScript />
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="logo-text">
              Mr. Gil's <span className="ampersand">&</span> Grill
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
              <h1 className="mb-2">Authentic</h1>
              <h1 className="text-primary mb-2">Afghan</h1>
              <h1 className="mb-4">Cuisine & Grocery!</h1>
              <p className="lead mb-4">At Mr. Gil's & Grill, we bring the rich flavors of Afghanistan to your table.</p>
              <div className="flag-container">
                <div className="afghan-flag">
                  <div className="black"></div>
                  <div className="red"></div>
                  <div className="green"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
              <div className="hero-image-container">
                <img
                  src="https://i.imgur.com/jfy6jbq.jpeg"
                  alt="Delicious Kabuli Pulao"
                  className="img-fluid rounded hero-image"
                />
                <div className="hero-badge">Authentic foods your family will love!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h5>Authentic</h5>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h5>Diverse</h5>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h5>Fresh</h5>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h5>Exquisite</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section" id="products">
        <div className="container">
          <h2 className="section-title text-center" data-aos="fade-up">
            What We Offer
          </h2>
          <div className="section-divider"></div>

          {/* Grocery Items */}
          <h3 className="category-title" data-aos="fade-up">
            Grocery Items
          </h3>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card">
                <div className="product-image">
                  <img src="https://i.imgur.com/rNEq5VM.jpeg" alt="Spices" className="img-fluid" />
                </div>
                <div className="product-info">
                  <h4>Afghan Spices</h4>
                  <p>Authentic spices imported directly from Afghanistan.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card">
                <div className="product-image">
                  <img src="https://i.imgur.com/SvMhhJi.jpeg" alt="Bread" className="img-fluid" />
                </div>
                <div className="product-info">
                  <h4>Fresh Bread</h4>
                  <p>Traditional Afghan bread baked fresh daily.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card">
                <div className="product-image">
                  <img src="https://i.imgur.com/cd9SBRw.jpeg" alt="Sweets" className="img-fluid" />
                </div>
                <div className="product-info">
                  <h4>Afghan Sweets</h4>
                  <p>Delicious traditional desserts and treats.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hot Food Menu */}
          <h3 className="category-title mt-5" id="menu" data-aos="fade-up">
            Hot Food Menu
          </h3>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="menu-card">
                <div className="menu-image">
                  <img src="https://i.imgur.com/d3nw5pQ.png" alt="Afghan Kebab" className="img-fluid" />
                </div>
                <div className="menu-info">
                  <h4>Chicken Kebab</h4>
                  <p>Marinated pieces of boneless chicken breasts grilled to perfection!</p>
                  <span className="price">$10.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="menu-card">
                <div className="menu-image">
                  <img src="/images/afghan-kebab.jpeg" alt="Afghan Kebab" className="img-fluid" />
                </div>
                <div className="menu-info">
                  <h4>Lamb Kebab</h4>
                  <p>Tender cut of lamb marinated and skewered with onoins and peppers.</p>
                  <span className="price">$10.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="menu-card">
                <div className="menu-image">
                  <img src="https://i.imgur.com/3zDhzJL.jpeg" alt="Afghan Kebab" className="img-fluid" />
                </div>
                <div className="menu-info">
                  <h4>Chapli Kebab</h4>
                  <p>Three patties of lean ground beef mixed with green onion & spices, served with sauce.</p>
                  <span className="price">$10.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="menu-card">
                <div className="menu-image">
                  <img src="https://i.imgur.com/GYtZaUW.jpeg" alt="Afghan Wrap" className="img-fluid" />
                </div>
                <div className="menu-info">
                  <h4>Combination Kebab</h4>
                  <p>One juicy skewer of beef & one of chicken breasts kebabs served with rice and sauce.</p>
                  <span className="price">$14.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="menu-card">
                <div className="menu-image">
                  <img src="/images/kabuli-palau.jpg" alt="Kabuli Pulao" className="img-fluid" />
                </div>
                <div className="menu-info">
                  <h4>Kabuli Pulao</h4>
                  <p>Fragrant rice with tender meat, carrots, and raisins.</p>
                  <span className="price">$10.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="menu-card">
                <div className="menu-image">
                  <img src="https://i.imgur.com/75VYZnn.jpeg" alt="Afghan Wrap" className="img-fluid" />
                </div>
                <div className="menu-info">
                  <h4>Afghan Baulani</h4>
                  <p>Fresh flat-bread with a vegetable filling of potatoes, spinach, lentils, pumpkin or leeks</p>
                  <span className="price">$7.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="menu-card">
                <div className="menu-image">
                  <img src="https://i.imgur.com/wkYgl2J.jpeg" alt="Afghan Wrap" className="img-fluid" />
                </div>
                <div className="menu-info">
                  <h4>Pizza</h4>
                  <p>Delicious Halal Beef, Chicken, Vegetable, Plain Cheese, or Combo Pizza.</p>
                  <span className="price">$12.99</span>
                </div>
              </div>
            </div>
          </div>

          {/* Special Dishes */}
          <div className="special-dish-section" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <img src="/images/kebab.webp" alt="Special Kebab" className="img-fluid rounded" />
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="special-dish-content">
                  <h3>Our Special Kebabs</h3>
                  <p>
                    Experience the authentic taste of Afghanistan with our signature kebabs, prepared using traditional
                    recipes passed down through generations.
                  </p>
                  <p>Each kebab is marinated with our special blend of spices and grilled to perfection.</p>
                  <button className="btn btn-primary mt-3">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <h2 className="section-title text-center" data-aos="fade-up">
            What Our Customers Say
          </h2>
          <div className="section-divider"></div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p>
                    The Kabuli Pulao at Mr. Gil's is the best I've ever had! Authentic Afghan flavors that remind me of
                    home.
                  </p>
                </div>
                <div className="testimonial-author">
                  <h5>Sarah K.</h5>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p>
                    Great grocery selection and even better hot food! The kebabs are juicy and flavorful. Will
                    definitely be back!
                  </p>
                </div>
                <div className="testimonial-author">
                  <h5>Michael T.</h5>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p>
                    I love shopping at Mr. Gil's for all my Afghan cooking needs. The staff is friendly and the products
                    are authentic.
                  </p>
                </div>
                <div className="testimonial-author">
                  <h5>Amina J.</h5>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section d-flex justify-content-center" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-right">
              <h2 className="section-title">About Mr. Gil's & Grill</h2>
              <div className="section-divider mb-4"></div>
              <p>
                Mr. Gil's & Grill is a family-owned Afghan grocery store and restaurant dedicated to bringing the
                authentic flavors of Afghanistan to our community.
              </p>
              <p>
                We take pride in offering the freshest ingredients, traditional spices, and homemade recipes that have
                been passed down through generations.
              </p>
              <p>
                Our mission is to share our rich culinary heritage and provide a taste of Afghanistan that will
                transport you to the vibrant streets of Kabul.
              </p>
              <div className="mt-4">
                <button className="btn btn-primary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="section-title text-center" data-aos="fade-up">
            Contact Us
          </h2>
          <div className="section-divider"></div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="contact-info h-100 d-flex flex-column justify-content-center">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h5>Address</h5>
                    <p>1421 Coffee Rd suite h, Modesto, CA 95355</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <h5>Phone</h5>
                    <p>(209) 409-8447</p>
                  </div>
                </div>
               
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h5>Hours</h5>
                    <p>Sunday - Saturday: 8:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-center justify-content-center" data-aos="fade-left">
              <div style={{ width: "100%", textAlign: "center" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.7452427264035!2d-120.99363532403012!3d37.67847512647915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809056b18383d7c7%3A0xdfed6d08c1d3fdf9!2s1421%20Coffee%20Rd%20Ste%20H%2C%20Modesto%2C%20CA%2095355!5e0!3m2!1sen!2sus!4v1717708702759!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0, maxWidth: 800, marginTop: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h4>Mr. Gil's & Grill</h4>
              <p>Delicious Afghan Cuisine & Grocery</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-yelp"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h4>Newsletter</h4>
              <p>Subscribe to receive updates on special offers and events.</p>
              <form className="newsletter-form">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Mr. Gil's & Grill. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a href="#" className="back-to-top" id="backToTop">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  )
}
