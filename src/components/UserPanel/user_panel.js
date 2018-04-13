import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './user_panel.css';
import TextField from '../TextField';
import DropdownMenu from '../DropdownMenu';
import { askNewton } from '../../libs/newton_api/newton';

export default class UserPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operation: '',
      expression: '',
    };

    this.getMathResult = this.getMathResult.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  getMathResult() {
    if (this.state.operation === '' || this.state.expression === '') {
      return;
    }
    askNewton(this.state.operation, this.state.expression)
      .then((result) => {
        this.props.updateResult(result);
      })
      .catch((/* e */) => {
        this.props.updateResult('Oops, an error has occurred.');
      });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.getMathResult();
    }
  }

  render() {
    return (
      <div className="user-panel">
        <div className="text-field-container">
          <div className="message-text">
            <h2>{this.props.message}</h2>
          </div>

          <DropdownMenu
            className="full-width"
            hint="select a math operation"
            onSelected={operation => this.setState({ operation })}
          >
            <option value="simplify">Simplify</option>
            <option value="factor">Factor</option>
            <option value="derive">Derive</option>
            <option value="integrate">Integrate</option>
            <option value="zeroes">Find 0s</option>
          </DropdownMenu>


          <TextField
            className="full-width"
            hint="your math expression*"
            onTextChange={expression => this.setState({ expression })}
            onKeyPress={this.handleKeyPress}
          />
          <button
            className="btn-submit"
            onClick={this.getMathResult}
            >
        Get Result
       </button>
        </div>
      </div>
    );
  }
}

UserPanel.propTypes = {
  message: PropTypes.string.isRequired,
  updateResult: PropTypes.func.isRequired,
};
