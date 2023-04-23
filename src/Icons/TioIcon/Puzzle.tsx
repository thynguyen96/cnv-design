import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconPuzzle: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="puzzle" {...others} />
}

export default IconPuzzle;