import React from 'react';
import IconBase from './IconBase';

const IconChevronUp: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-chevron-up ${className}`} {...others}></i>
}

export default IconChevronUp;