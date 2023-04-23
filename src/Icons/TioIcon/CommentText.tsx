import React from 'react';
import IconBase from './IconBase';

const IconCommentText: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-comment-text ${className}`} {...others}></i>
}

export default IconCommentText;