import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dropdown_menu.css';

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { value: 'default' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({ value: event.target.value });
    this.props.onSelected(event.target.value);
  }

  render() {
    return (
      <div className={`menu-container ${this.props.className}`}>
        <label htmlFor="operation-select" target="_select">
          {this.props.hint}
          <select
            id="operation-select"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="default" disabled>-- select an operation --</option>
            {this.props.children}
          </select>
        </label>
      </div>
    );
  }
}

DropdownMenu.defaultProps = { className: '' };

DropdownMenu.propTypes = {
  hint: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
