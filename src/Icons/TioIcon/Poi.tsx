import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconPoi: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="poi" {...others} />
}

export default IconPoi;