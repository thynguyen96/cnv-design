import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconEdit: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="edit" {...others} />
}

export default IconEdit;