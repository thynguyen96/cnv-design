import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconHeart: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="heart" {...others} />
}

export default IconHeart;