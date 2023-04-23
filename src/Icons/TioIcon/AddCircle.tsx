import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconAddCircle: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="add-circle" {...others} />
}

export default IconAddCircle;