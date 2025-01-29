import React, { useState } from 'react';
import LoginPage from './components/LoginPage';  // Assuming you already have this
import HomePage from './components/HomePage';    // Assuming you have HomePage component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default App;
