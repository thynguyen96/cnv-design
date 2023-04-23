import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconSettings: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="settings" {...others} />
}

export default IconSettings;