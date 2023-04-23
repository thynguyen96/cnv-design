import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconPen: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="pen" {...others} />
}

export default IconPen;