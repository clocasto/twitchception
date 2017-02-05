/* globals Twitch */
import React from 'react';
import { Icon } from 'react-fa';


class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: {
        height: '100%',
        width: '100%',
      },
      name: props.name,
      muted: !!props.muted,
      source: props.source,
      config: props.config,
    };
  }

  componentDidMount() {
    const twitchPlayer = new Twitch.Player(this.state.name, {
      height: '100%',
      width: '100%',
      channel: this.state.source,
    });
    twitchPlayer.setVolume(0.5);
    twitchPlayer.setQuality(this.state.config === 'base' ? 'high' : 'low');
    twitchPlayer.setMuted(this.state.muted);

    this.player = twitchPlayer;
  }

  swap() {
    this.props.swapPositions(this.props.name);
  }

  close() {
    this.props.closePlayer(this.props.id);
  }

  render() {
    const enabler = !!this.props.pip.style.enabled;
    const muted = !!this.props.muted;

    if (this.player) this.player.setMuted(muted);

    return (
      <div style={this.props.pip.style} id={this.props.name} className={enabler ? 'pip' : 'base'}>
        <div onMouseDown={this.props.dragPip} onMouseUp={this.props.dragPip} className={enabler ? 'drag' : null}>
          <Icon className="small-button" name="arrows" />
        </div>
        {enabler && (<div>
          <div className="shield" style={this.props.pip.shield} onMouseUp={this.props.dragPip} />
          <div className="resizer" onMouseDown={this.props.toggleResize}>
            <img alt="resize" className="icon" id="resizepng" src="/Resize2.png" />
          </div>
          <div className="swapper" onClick={this.swap}>
            <Icon className="small-button" name="expand" />
          </div>
          <div className="closer" onClick={this.close} />
        </div>)}
      </div>
    );
  }
}

Player.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  muted: React.PropTypes.bool,
  config: React.PropTypes.oneOf(['base', 'pip']),
  source: React.PropTypes.string,
  dragPip: React.PropTypes.func,
  toggleResize: React.PropTypes.func,
  closePlayer: React.PropTypes.func,
  swapPositions: React.PropTypes.func,
  pip: React.PropTypes.object, // eslint-disable-line
};

export default Player;
