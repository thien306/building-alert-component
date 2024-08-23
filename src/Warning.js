import React from 'react';
import PropTypes from 'prop-types';

const Warning = ({ text, type }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {text}
    </div>
  );
};

Warning.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Warning.defaultProps = {
  type: 'warning',
};

export default Warning;
