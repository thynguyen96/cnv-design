import React from 'react';
import IconBase from './IconBase';

const IconBookmark: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-bookmark ${className}`} {...others}></i>
}

export default IconBookmark;