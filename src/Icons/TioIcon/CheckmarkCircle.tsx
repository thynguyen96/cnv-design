import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconCheckmarkCircle: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="checkmark-circle" {...others} />
}

export default IconCheckmarkCircle;