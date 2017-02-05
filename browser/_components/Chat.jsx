/* globals document */
import React, { Component } from 'react';

class Chat extends Component {
  componentDidMount() {
    const { size: { width } } = this.props.chat;
    const { clientHeight: newHeight, clientWidth: newWidth } = document.getElementById('chatbox');

    if (newWidth === width) return;
    this.props.resizeChat(newHeight, newWidth);
  }

  render() {
    const { app, chat: { size } } = this.props;
    const activeChat = app.length ?
      app.find(player => player.size === 'base').source : null;

    return (
      <div id="chatbox" className="col-md-3 col-lg-3">
        {!!this.props.app.length && <iframe
          frameBorder="0"
          scrolling="no"
          id="chat_embed"
          src={activeChat}
          height={size.height}
          width={size.width}
        />}
      </div>
    );
  }
}

Chat.propTypes = {
  app: React.PropTypes.arrayOf(React.PropTypes.object),
  chat: React.PropTypes.shape({
    size: React.PropTypes.shape({
      width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
      height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    }),
  }),
  resizeChat: React.PropTypes.func,
};

export default Chat;
