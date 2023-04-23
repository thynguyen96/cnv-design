import React from 'react';
import IconBase from './IconBase';

const IconUserAdd: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-user-add ${className}`} {...others}></i>
}

export default IconUserAdd;