import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconCopy: IconBase = props => {
    let { children, ...others } = props;
    return <TioIcon icon="copy" {...others} />
}

export default IconCopy;