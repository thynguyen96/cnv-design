import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconUserSwitch: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="user-switch" {...others} />
}

export default IconUserSwitch;