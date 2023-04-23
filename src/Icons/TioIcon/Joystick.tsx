import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconJoystick: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="joystick" {...others} />
}

export default IconJoystick;