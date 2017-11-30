import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="container body">
    <div className="main_container">
      {children}
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

Container.defaultProps = {
  children: [],
};

export default Container;
