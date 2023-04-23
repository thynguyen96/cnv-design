import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconGift: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="gift" {...others} />
}

export default IconGift;