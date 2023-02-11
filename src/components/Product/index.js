import React from "react";
import './products.css';

const Product = (props) => {
  const { productName, productImage, productDescription, productPrice } = props;

  return (
    <div className="product-container">
      <img src={productImage} alt="product" className="product-image"/>
      <h3 className="product-name">{productName}</h3>
      <p className="product-description">{productDescription}</p>
      <p className="product-price">${productPrice}</p>
    </div>
  );
}

export default Product;

// Thid ode takes in props such as productName, productImage, productDescription, and productPrice and displays
// them in a div container with corresponding classes for styling. The productImage is displayed as an img 
// element with the source being set to the productImage prop, and the other props are displayed as text elements within p or h3 tags.
