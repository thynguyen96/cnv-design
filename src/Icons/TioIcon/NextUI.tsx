import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconNextUI: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="next-ui" {...others} />
}

export default IconNextUI;