import React from 'react';
import IconBase from './IconBase';

const IconCalendarMonth: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-calendar-month ${className}`} {...others}></i>
}

export default IconCalendarMonth;