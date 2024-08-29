import React from 'react';
import log from '../assets/log.svg'
import register from '../assets/register.svg'


const Panels = ({ toggleMode }) => {
  return (
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
          <button className="btn transparent" onClick={toggleMode}>
            Sign up
          </button>
        </div>
        <img src={log} className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
          <button className="btn transparent" onClick={toggleMode}>
            Sign in
          </button>
        </div>
        <img src={register} className="image" alt="" />
      </div>
    </div>
  );
};

export default Panels;