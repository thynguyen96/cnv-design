import React from 'react';
import IconBase from './IconBase';

const IconHelpOutlined: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-help-outlined ${className}`} {...others}></i>
}

export default IconHelpOutlined;