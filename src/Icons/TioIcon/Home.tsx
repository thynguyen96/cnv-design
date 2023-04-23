import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconHome: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="home" {...others} />
}

export default IconHome;