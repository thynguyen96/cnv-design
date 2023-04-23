import React from 'react';
import IconBase from './IconBase';

const IconRemoveCircleOutlined: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-remove-circle-outlined ${className}`} {...others}></i>
}

export default IconRemoveCircleOutlined;