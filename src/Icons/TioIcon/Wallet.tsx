import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconWallet: IconBase = props => {
    let { children, ...others } = props;
    return <TioIcon icon="wallet" {...others} />
}

export default IconWallet;