import React from 'react';
import IconBase from './IconBase';

const IconUploadOnCloud: IconBase = props => {
  let { className, ...others } = props;
  return <i className={`tio-upload-on-cloud ${className}`} {...others}></i>
}

export default IconUploadOnCloud;