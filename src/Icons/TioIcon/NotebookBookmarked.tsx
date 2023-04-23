import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconNotebookBookmarked: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="notebook-bookmarked" {...others} />
}

export default IconNotebookBookmarked;