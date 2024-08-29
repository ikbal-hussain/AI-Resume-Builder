import React from 'react';
import Form from './Form';

const SignInSignUp = ({ isSignUpMode }) => {
  return (
    <div className="forms-container">
      <div className="signin-signup">
        <Form
          title="Sign in"
          buttonText="Login"
          socialText="or use your account"
          isSignIn={true}
          isVisible={!isSignUpMode}
        />
        <Form
          title="Sign up"
          buttonText="Sign up"
          socialText="or use your email for registration"
          isSignIn={false}
          isVisible={isSignUpMode}
        />
      </div>
    </div>
  );
};

export default SignInSignUp;