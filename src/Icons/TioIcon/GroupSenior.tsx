import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconGroupSenior: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="group-senior" {...others} />
}

export default IconGroupSenior;