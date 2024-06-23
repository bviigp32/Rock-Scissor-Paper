import React from 'react';
import './Button.css';

function Button({ icon, onClick }) {
  return (
    <button className="HandButton" onClick={onClick}>
      <img className="HandButton-icon" src={icon} alt="" />
    </button>
  );
}

export default Button;