import React from 'react';
import PipContainer from '../Containers/PipContainer';
import ChatContainer from '../Containers/ChatContainer';

export default () => (
  <div>
    <div id="base" className="col-md-8 col-lg-8 col-lg-offset-1">
      <PipContainer />
    </div>
    <ChatContainer />
  </div>
);
