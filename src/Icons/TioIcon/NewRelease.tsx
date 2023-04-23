import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconNewRelease: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="new-release" {...others} />
}

export default IconNewRelease;