import React from "react";
import './landingpage.css';

const LandingPage = () => {
  const handleExploreClick = () => {
    const productsContainer = document.querySelector(".products-container");
    productsContainer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-page-container">
      <h1 className="welcome-text">About Us</h1>
      <p className="brand-description">
        Our brand offers the latest fashion in clothing and accessories.
        We strive to provide high-quality products and exceptional customer service.
      </p>
      <button className="explore-products-button" onClick={handleExploreClick}>
        Explore our Products
      </button>
    </div>
  );
};

export default LandingPage;


// This code defines a functional React component named LandingPage. It has a single h1 element with a class welcome-text 
// to display the text "About Us", and a p element with a class brand-description that displays a brief description of the brand.
// It also has a button with the class explore-products-button and an onClick handler that triggers a handleExploreClick 
//function. The function uses document.querySelector to select an element with class products-container and scrolls it
// into view using scrollIntoView with the behavior option set to "smooth".