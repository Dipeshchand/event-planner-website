import React, { useState, useEffect } from "react";
import "./Index.css";
import logo from "../../assets/logo.jpg"; // converted logo file

// Import hero images
import hero1 from "../../assets/Hero_Section_Image-1.jpg";
import hero2 from "../../assets/Hero_Section_Image-2.jpg";
import hero3 from "../../assets/Hero_Section_Image-3.jpg";
import hero4 from "../../assets/Hero_Section_Image-4.jpg";
import hero5 from "../../assets/Hero_Section_Image-5.jpg";

// Import event section images
import Events_Section_Images_1 from "../../assets/Events_Section_Images-1.jpg";
import Events_Section_Images_2 from "../../assets/Events_Section_Images-2.jpg";
import Events_Section_Images_3 from "../../assets/Events_Section_Images-3.jpg";

// Import icons
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import {FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [hero1, hero2, hero3, hero4, hero5];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Auto slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="St. Martin Logo" />
          <span>Seraphic Events</span>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
        
        {/* Social Icons + Phone */}
        <div className="sidebar-top">
          <a
            href="https://www.facebook.com/share/16EMtPrjmE/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/seraphic_event_productions?igsh=dWg1dHVkN2Rwcncw&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >  <FaInstagram />
          </a>
          <a href="tel:+919916388141">
            <FaPhoneAlt /> +91 9916388141
          </a>

          <a href="mailto:Seraphicevents08@gmail.com">
    <FaEnvelope /> Seraphicevents08@gmail.com
  </a>
        </div>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/services">Our Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* Hero Section with Slideshow */}
      <header
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Get Married In Style</h1>
          <p>
            To a new epoch of your life and to a delicate beginning, we Seraphic
            event planners are here with you to make it more exceptional.
            Together let’s invigorate your 'dream say' way more than just a dream.
          </p>
        </div>
      </header>
        {/* Blue Section Text */}
      <div className="blue-text-section">
        <p>We Are Getting A Heaven Ready For Your Wonderful Day</p>
        </div>
{/* About Section */}
<section className="about-section">
  <h2>Designing Exceptional Weddings</h2>
  <div className="underline"></div>
  <p>
    We, Seraphic Wedding Planners are honored each time when you pick us. 
    Experience an alluring wedding and a beautifully carved love story of yours with us. 
    2009 paved a way for us to kickstart our journey and by 2018 Best Entrepreneur Award 
    came in search of us. Soon after that, another recognition for business excellence was 
    an award from Lexus in 2022. Choosing us is equal to witnessing a splendid and 
    well-oriented event with an exquisite touch.
  </p>
</section>
{/* Events Section */}
<section className="events-section">
  <div className="event-card">
    <img src={Events_Section_Images_1} alt="Bespoke Weddings" />
        <h3>Corporate Galas</h3>
    <p>
      From award nights to product launches, we specialize in creating 
      sophisticated and memorable corporate galas that leave a lasting 
      impression on your guests and business partners.
    </p>
  </div>

  <div className="event-card">
    <img src={Events_Section_Images_2} alt="Corporate Galas" />
        <h3>Bespoke Weddings</h3>

    <p>
      Our bespoke weddings are tailored to reflect your unique love story, 
      ensuring every detail is crafted to perfection. From intimate gatherings 
      to grand celebrations, we bring your dream wedding to life.
    </p>
  </div>

  <div className="event-card">
    <img src={Events_Section_Images_3} alt="Luxury Events" />
    <h3>Luxury Events</h3>
    <p>
      Step into a world of grandeur with our luxury events, curated with 
      exquisite decor, elite services, and unmatched attention to detail — 
      turning every occasion into an unforgettable experience.
    </p>
  </div>
</section>
{/* Footer Section */}
<footer className="footer">
  <div className="footer-container">

    {/* Left - Contact Info */}
    <div className="footer-column">
      <h3>Seraphic</h3>
      <p>1B, 139, Block B, New Industrial TWP 1</p>
      <p>New Industrial Town Faridabad, Haryana 121001</p>
      <p>+91 9916388141</p>
      <p>Seraphicevents08@gmail.com</p>
    </div>

    {/* Middle - About & Social */}
    <div className="footer-column">
      <p>
        Seraphic Events is a premier wedding and event planning company offering
        exceptional services since 2009. We specialize in weddings, corporate
        events, and luxury celebrations — crafting unforgettable experiences.
      </p>
      <div className="footer-socials">
        <div className="footer-socials">
  <a href="https://www.instagram.com/seraphic_event_productions?igsh=dWg1dHVkN2Rwcncw&utm_source=qr" target="blank"><FaInstagram /></a>
  <a href="https://www.facebook.com/share/16EMtPrjmE/?mibextid=wwXIfr" target="blank"><FaFacebookF /></a>
  <a href="#"><FaLinkedinIn /></a>
  <a href="#"><FaPinterestP /></a>
</div>

      </div>
    </div>

    {/* Right - Google Map */}
    <div className="footer-column">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1516!2d77.317!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb123456!2sFaridabad!5e0!3m2!1sen!2sin!4v1633456000000"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

  {/* Copyright */}
  <div className="footer-bottom">
    <p>© 2025 Seraphic Events. All Rights Reserved.</p>
  </div>
</footer>


    </div>
  );
};

export default Index;
