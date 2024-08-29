import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import SignInSignUp from './components/SignInSignUp';
import Panels from './components/Panels';
import './App.css';

const App = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      {user ? (
        <div>
          <h1>Welcome, {user.email}!</h1>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <>
          <SignInSignUp isSignUpMode={isSignUpMode} />
          <Panels toggleMode={toggleMode} />
        </>
      )}
    </div>
  );
};

export default App;