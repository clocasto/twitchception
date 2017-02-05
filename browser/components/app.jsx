import React from 'react';
import NavbarContainer from '../Containers/NavbarContainer';
import PlayerContainer from '../Containers/PlayerContainer';
import ChatContainer from '../Containers/ChatContainer';

export default props => (
  <div className="App row">
    <NavbarContainer {...props} />
    <div id="base" className="col-md-8 col-lg-8 col-lg-offset-1">
      <PlayerContainer {...props} />
    </div>
    <ChatContainer {...props} />
  </div>
);
