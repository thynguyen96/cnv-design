import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconUser: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="user" {...others} />
}

export default IconUser;