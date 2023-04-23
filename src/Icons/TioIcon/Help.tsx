import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconHelp: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="help" {...others} />
}

export default IconHelp;