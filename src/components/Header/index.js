import React, { useState } from 'react';
import logo from './logo.png';
import './header.css';

function Header({ isUserSignedIn, onSignOut, setIsUserSignedIn }) {
  const [showSignInForm, setShowSignInForm] = useState(false);

  const handleSignInClick = () => {
    setShowSignInForm(!showSignInForm);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    setIsUserSignedIn(true);
    setShowSignInForm(false);
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <h1 className="header__title" >ECO LAND</h1>
      {!isUserSignedIn ? (
        <div>
          {showSignInForm ? (
            <form onSubmit={handleSignIn}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign In</button>
            </form>
          ) : (
            <button onClick={handleSignInClick} className="header__btn">Sign In</button>
          )}
        </div>
      ) : (
        <button onClick={onSignOut} className="header__btn">Sign Out</button>
      )}
    </header>
  );
}

export default Header;

// This is a React functional component named Header that renders a header with a logo, a title, and a sign-in/
// sign-out button. The header also includes a form to sign in if the user isn't signed in, and the form disappears
// and the sign-out button appears if the user is signed in. The Header component accepts the isUserSignedIn,
//  onSignOut, and setIsUserSignedIn props to determine whether to show the sign-in form or sign-out button,
// and to handle the sign-in and sign-out functionality respectively. The component uses the useState hook to 
// manage the state of the sign-in form visibility, and it also uses the handleSignIn method to handle the 
// sign-in form submission.