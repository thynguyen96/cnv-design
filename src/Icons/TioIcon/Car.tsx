import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconCar: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="car" {...others} />
}

export default IconCar;