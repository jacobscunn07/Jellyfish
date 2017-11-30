/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const CustomFrame = ({
  children,
  onRemove,
  editable,
  title,
}) => (
  <div className="x_panel fixed_height_320">
    <div className="x_title">
      <h2>{title}</h2>
      <ul className="nav navbar-right panel_toolbox">
        {editable &&
          <li>
            <a onClick={() => onRemove()} className="close-link"><i className="fa fa-close" /></a>
          </li>}
      </ul>
      <div className="clearfix" />
    </div>
    <div className="x_content">
      {children}
    </div>
  </div>
);

CustomFrame.propTypes = {
  children: PropTypes.element,
  onRemove: PropTypes.func,
  editable: PropTypes.bool,
  title: PropTypes.string,
};

CustomFrame.defaultProps = {
  children: <div />,
  onRemove: () => {},
  editable: false,
  title: '',
};

export default CustomFrame;
