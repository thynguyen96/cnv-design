import React from 'react';
import IconBase from './IconBase';

const IconRemoveFromTrash: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-remove-from-trash ${className}`} {...others}></i>
}

export default IconRemoveFromTrash;