/* globals document */
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streamToAdd: '',
    };
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.toggleFullScreen = () => {
      const elem = document.getElementById('fullscreen');
      const player = document.getElementById('playercontainer');
      if (elem.requestFullscreen) {
        player.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        player.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
      }
    };
  }

  updateValue(e) {
    this.setState({
      streamToAdd: e.target.value,
    });
  }

  handleSubmit(e) {
    if (e.preventDefault) e.preventDefault();
    this.props.addPlayer(this.state.streamToAdd);
    this.state.streamToAdd = '';
  }
  
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    return this.props.addPlayer(e.target.textContent);
  }

  render() {
    return (
      <Navbar id="main-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a>Twitch PiP</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              onClick={this.toggleFullScreen}
              id="fullscreen"
              eventKey={1}
              href="#"
            >FullScreen</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
          </Nav>
          <Nav pullRight>
            <Navbar.Form pullRight>
              <Form onSubmit={this.handleSubmit} inline="true">
                <Input
                  onChange={this.updateValue}
                  value={this.state.streamToAdd}
                  type="text"
                  ref="newstream" // eslint-disable-line
                  label="Stream Name"
                  floatingLabel="true"
                />
                <Button onClick={this.handleSubmit} color="primary">Add Stream</Button>
              </Form>
            </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

ControlPanel.propTypes = {
  addPlayer: React.PropTypes.func,
};

export default ControlPanel;
