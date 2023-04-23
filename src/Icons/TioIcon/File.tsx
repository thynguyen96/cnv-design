import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconFile: IconBase = props => {
    let { children, ...others } = props;
    return <TioIcon icon="file" {...others} />
}

export default IconFile;