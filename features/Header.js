import React from 'react';
import PropTypes from 'prop-types';

const Header = () => (
  <li className="list-header">
    <div className="make" title="Make">Make</div>
    <div className="model" title="Model">Model</div>
    <div className="color" title="Color">Color</div>
    <div className="swatch"></div>
    <div className="enteredAt" title="Entered At">Entered At</div>
  </li>
);

export default Header;
