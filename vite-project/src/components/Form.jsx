import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import SocialIcons from './SocialIcons';

const Form = ({ title, buttonText, socialText, isSignIn, isVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${isSignIn ? 'sign-in-form' : 'sign-up-form'}`} style={{ opacity: isVisible ? 1 : 0, zIndex: isVisible ? 2 : 1 }}>
      <h2 className="title">{title}</h2>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      {error && <p className="error">{error}</p>}
      <input type="submit" value={buttonText} className="btn solid" />
      <p className="social-text">{socialText}</p>
      <SocialIcons />
    </form>
  );
};

export default Form;