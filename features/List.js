import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Header from './Header';

const List = ({ list }) => (
  <ul className="list">
    <Header />
    {list.map(item => <Item item={item} key={item.id} />)}
  </ul>
);

export default List;
