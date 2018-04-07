import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DisplayPanel from './components/DisplayPanel';
import UserPanel from './components/UserPanel';
import logo from './resources/logo.png';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { result: 'Here is your math result' };
  }

  render() {
    return (
      <Grid fluid className="full-height">
        <Row className="full-height">
          <Col sm={4} className="full-height no-padding">
            <UserPanel
              message="Enter your math expression and see the magic!"
              updateResult={result => this.setState({ result })}
            />
          </Col>

          <Col sm={8} className="full-height no-padding">
            <DisplayPanel className="full-height">
              <div className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p className="header-text">Choose an operation and submit your math expression, the result will be displayed below</p>
              </div>
              <h3>{this.state.result}</h3>
            </DisplayPanel>
          </Col>

        </Row>
      </Grid>
    );
  }
}
