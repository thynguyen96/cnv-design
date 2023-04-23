import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconInfo: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="info" {...others} />
}

export default IconInfo;