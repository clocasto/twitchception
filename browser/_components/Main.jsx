import React, { Component } from 'react';
import '../Styles/App.css';
import Player from './player';
import Chat from './Chat';
import Navigation from './navbar';

class Main extends Component {
  render() {
    return (
      <div className="App row">
      	<Navigation {...this.props} />
          <div id="base" className="col-md-8 col-lg-8 col-lg-offset-1">
            <Player {...this.props} />
          </div>
          <Chat {...this.props}/>
      </div>
    );
  }
}

export default Main;
