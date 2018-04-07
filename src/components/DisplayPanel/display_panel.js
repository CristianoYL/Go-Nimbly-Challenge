import React from 'react';
import PropTypes from 'prop-types';
import './display_panel.css';

const DisplayPanel = ({ children }) => (
  <div className="display-panel">
    <div className="display-text">{children}</div>
  </div>
);

DisplayPanel.defaultProps = {
  children: null,
};

DisplayPanel.propTypes = {
  children: PropTypes.node,
};

export default DisplayPanel;
