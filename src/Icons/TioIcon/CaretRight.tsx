import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconCaretRight: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="caret-right" {...others} />
}

export default IconCaretRight;