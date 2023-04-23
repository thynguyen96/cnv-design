import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconClinic: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="clinic" {...others} />
}

export default IconClinic;