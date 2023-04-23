import React from 'react';
import IconBase from './IconBase';

const IconFirstPage: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-first-page ${className}`} {...others}></i>
}

export default IconFirstPage;