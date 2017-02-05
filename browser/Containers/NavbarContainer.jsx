import { connect } from 'react-redux';
import Navbar from '../Components/Navbar';
import { addPlayer } from '../Redux/actions/creators';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  addPlayer: name => dispatch(addPlayer(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
