import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconBackUI: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="back-ui" {...others} />
}

export default IconBackUI;