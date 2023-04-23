import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconLabelImportant: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="label-important" {...others} />
}

export default IconLabelImportant;