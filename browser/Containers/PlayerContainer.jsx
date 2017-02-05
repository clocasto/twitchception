import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Player from '../Components/Player';
// import Pip from '../Components/Pip';
import { dragPip, toggleResize, closePlayer, swapPositions } from '../Redux/actions/creators';

const mapStateToProps = state => ({ user: state.user, pip: state.pip, app: state.app });
const mapDispatchToProps = dispatch => (
  bindActionCreators([dragPip, toggleResize, closePlayer, swapPositions], dispatch)
);

const PlayerContainer = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full: null,
      players: [],
    };
  }

  render() {
    return (
      <div>
        <div id="base" className="col-md-8 col-lg-8 col-lg-offset-1">
          {/* this.state.full && <Player {...this.props} /> */}
        </div>
        {/* this.state.players.map((player, i) => (
          <Pip key={i} id={i} {...this.state.players[i]} />),
        ) */}
      </div>
    );
  }
};

PlayerContainer.propTypes = {
  app: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
