import React from 'react';
import IconBase from './IconBase';

const IconChevronRight: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-chevron-right ${className}`} {...others}></i>
}

export default IconChevronRight;