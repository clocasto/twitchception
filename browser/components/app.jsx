import React from 'react';
import NavbarContainer from '../Containers/NavbarContainer';
import Console from './Console';

export default props => (
  <div className="App row">
    <NavbarContainer {...props} />
    <Console />
  </div>
);
