import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconStarOutlined: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="star-outlined" {...others} />
}

export default IconStarOutlined;