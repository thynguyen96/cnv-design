import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconCircle: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="circle" {...others} />
}

export default IconCircle;