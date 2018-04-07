import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './text_field.css';

export default class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  onTextChange(value) {
    this.setState({ value });
    this.props.onTextChange(value);
  }

  render() {
    // show a hint first, then store user input into state.value
    return (
      <div className={`text-field ${this.props.className}`}>
        <label htmlFor={this.props.hint} target="_input">
          {this.props.hint}
          <input
            id={this.props.hint}
            value={this.state.value}
            placeholder={this.props.hint}
            onChange={event => this.onTextChange(event.target.value)}
          />
        </label>
      </div>
    );
  }
}

TextField.defaultProps = { className: '' };
TextField.propTypes = {
  hint: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};