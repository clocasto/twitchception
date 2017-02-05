import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { DragTypes } from '../Constants';
import Player from './Player';

/**
 * Implements the drag source contract.
 */
const playerSource = {
  beginDrag(props) {
    return {
      id: props.playerId,
    };
  },
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

const Pip = props => props.connectDragSource(<Player {...this.props} />);

Pip.propTypes = {
  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

// Export the wrapped component:
export default DragSource(DragTypes.PLAYER, playerSource, collect)(Pip);
