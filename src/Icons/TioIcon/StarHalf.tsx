import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconStarHalf: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="star-half" {...others} />
}

export default IconStarHalf;