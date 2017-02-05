import React from 'react';
import { connect } from 'react-redux';
import Player from '../Components/Player';
import Pip from '../Components/Pip';
// import { addPlayer } from '../Redux/actions/creators';

const mapStateToProps = state => ({ user: state.user });

// const mapDispatchToProps = dispatch => ({});

const PlayerContainer = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full: {},
      players: [],
    };
  }

  render() {
    return (
      <div>
        <div id="base" className="col-md-8 col-lg-8 col-lg-offset-1">
          {this.state.full && <Player {...this.state.full} />}
        </div>
        {this.state.players.map((player, i) => (
          <Pip key={i} id={i} {...this.state.players[i]} />),
        )}
      </div>
    );
  }
};

PlayerContainer.propTypes = {
  app: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default connect(mapStateToProps)(PlayerContainer);
