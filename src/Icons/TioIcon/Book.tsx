import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconBook: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="book" {...others} />
}

export default IconBook;