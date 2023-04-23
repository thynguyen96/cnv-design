import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconAdd: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="add" {...others} />
}

export default IconAdd;