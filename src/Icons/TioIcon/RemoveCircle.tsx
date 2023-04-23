import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconRemoveCircle: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="remove-circle" {...others} />
}

export default IconRemoveCircle;