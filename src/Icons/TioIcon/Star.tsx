import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconStar: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="star" {...others} />
}

export default IconStar;