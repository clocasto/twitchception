import React from 'react';
import { Icon } from 'react-fa';


class Player extends React.Component {

  componentDidMount() {
    const { info } = this.props;

    const options = {
      height: '100%',
      width: '100%',
      channel: info.stream,
    };

    this.player = new Twitch.Player(info.name, options);

    this.player.setVolume(0.5);
    this.player.setQuality(info.size === 'base' ? 'high' : 'low');
    this.player.setMuted(info.muted ? true : false);
    this.player.addEventListener(Twitch.Player.PAUSE, () => { console.log('Player is paused!'); });
  }

  swap() {
    this.props.swapPositions(this.props.info.name);
  }

  close() {
    this.props.closePlayer(this.props.info.id);
  }

  render() {
    const { style, info, pip, dragPip, toggleResize } = this.props;

    const enabler = !!style.enabled;
    const muted = !!this.props.info.muted;

    if (this.player) this.player.setMuted(muted);

    return (
      <div style={style} id={info.name} className={enabler ? 'pip' : 'base'}>
        <div onMouseDown={dragPip} onMouseUp={dragPip} className={enabler ? 'drag' : null}>
          <Icon className="small-button" name="arrows" />
        </div>
        {enabler && (<div>
          <div className="shield" style={pip.shield} onMouseUp={dragPip} />
          <div className="resizer" onMouseDown={toggleResize}>
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
  style: React.PropTypes.isRequired,
  info: React.PropTypes.isRequired,
  pip: React.PropTypes.isRequired,
  dragPip: React.PropTypes.isRequired,
  toggleResize: React.PropTypes.func,
  swapPositions: React.PropTypes.func,
  closePlayer: React.PropTypes.func,
};

export default Player;
