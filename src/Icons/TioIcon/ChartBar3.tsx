import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconChartBar3: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="chart-bar-3" {...others} />
}

export default IconChartBar3;