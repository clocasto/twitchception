import { connect } from 'react-redux';
import Chat from '../Components/Chat';
import { resizeChat } from '../Redux/actions/creators';

const mapStateToProps = state => ({ app: state.app, chat: state.chat });

const mapDispatchToProps = dispatch => ({
  addPlayer: name => dispatch(resizeChat(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
