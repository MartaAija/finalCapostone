import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Product from './components/Product';

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const handleSignOut = () => {
    setIsUserSignedIn(false);
  };

  const products = [
    {
      productName: "T-Shirt",
      productImage: require ("./images/product1.jpeg"),
      productDescription: "A soft and comfortable t-shirt made from 100% cotton",
      productPrice: 19.99
    },
    {
      productName: "Jeans",
      productImage: require ("./images/product2.jpeg"),
      productDescription: "Classic jeans that never goes out of style",
      productPrice: 34.99
    },
    {
      productName: "Jacket",
      productImage: require ("./images/product3.jpeg"),
      productDescription: "Simplistic but modern jacket made of 100% recyclable materials ",
      productPrice: 44.99
    },
    {
      productName: "Backpack",
      productImage: require ("./images/product4.jpeg"),
      productDescription: "A durable and stylish backpack for all your outdoor adventures",
      productPrice: 34.99
    }
  ];

  return (
    <div className="App">
      <Header isUserSignedIn={isUserSignedIn} onSignOut={handleSignOut} setIsUserSignedIn={setIsUserSignedIn} />
      <LandingPage />
      <div className="products-container">
        {products.map((product, index) => (
          <Product
            key={index}
            productName={product.productName}
            productImage={product.productImage}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

//Imports: This code imports the required dependencies, including React and its useState hook, as well as the three
// components Header, LandingPage, and Product.
// handleSignOut function: This function sets the isUserSignedIn state to false, which can be used to handle user sign out.
// products constant: This constant is an array of objects, each representing a product in the store.
// The App component: The main component of the application. It uses the useState hook to store the isUserSignedIn
// state. It renders the Header component, passing the isUserSignedIn state and the handleSignOut function as props.
// The LandingPage component is also rendered. The products constant is used to generate the Product components and display them in the products-container div.
// Export statement: The App component is exported as the default export, making it accessible to other parts of the application.
