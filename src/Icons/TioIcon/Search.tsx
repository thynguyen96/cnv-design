import React from 'react';
import IconBase from './IconBase';

const IconSearch: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-search ${className}`} {...others}></i>
}

export default IconSearch;