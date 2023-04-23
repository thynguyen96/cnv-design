import React from 'react';
import IconBase from './IconBase';

const IconMoreHorizontal: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-more-horizontal ${className}`} {...others}></i>
}

export default IconMoreHorizontal;