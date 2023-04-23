import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconChartBar4: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="chart-bar-4" {...others} />
}

export default IconChartBar4;