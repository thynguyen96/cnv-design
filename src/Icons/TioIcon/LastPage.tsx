import React from 'react';
import IconBase from './IconBase';

const IconLastPage: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-last-page ${className}`} {...others}></i>
}

export default IconLastPage;