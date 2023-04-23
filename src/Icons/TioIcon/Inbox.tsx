import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconInbox: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="inbox" {...others} />
}

export default IconInbox;