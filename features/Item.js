import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import getSwatchColor from '../utils/colors';

export default class Item extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.item.id !== nextProps.item.id;
  }
  render() {
    const { id, make, model, color, enteredAt } = this.props.item;
    const swatch = getSwatchColor(color.toLowerCase());

    return (
      <li key={id} className="item">
        <div className="make" title={make}>{make}</div>
        <div className="model" title={model}>{model}</div>
        <div className="color" title={color}>{color}</div>
        <div className="swatch" title={color}>
          <div className="square" style={{background: swatch}} />
        </div>
        <div className="enteredAt" title={enteredAt}><Moment fromNow>{enteredAt}</Moment></div>
      </li>
    );
  }
}
