import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <div className="line" />
    <style jsx global>{`
      h1 {
        padding-bottom: 0;
        margin-bottom: 0;
        color: #4A5A69;
      }
      .line {
        height: 0.1rem;
        background-color: #6E7D8C;
        margin-top: 0.25rem;
        margin-bottom: 1rem;
      }
    `}</style>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
