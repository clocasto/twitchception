import React from 'react';
import { connect } from 'react-redux';
import Player from '../Components/Player';
import { addPlayer } from '../Redux/actions/creators';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  addPlayer: name => dispatch(addPlayer(name)),
});

const Pip = class extends React.Component {
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
        {this.state.full && <Player key="fullPlayer" {...this.state.full} />}
        {this.state.players.map((player, i) => <Player key={i} id={i} {...this.state.players[i]} />)}
      </div>
    );
  }
};

Pip.propTypes = {
  app: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Pip);
