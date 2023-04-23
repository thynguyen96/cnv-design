import React from 'react';
import TioIcon from '.';
import IconBase from './IconBase';

const IconShoppingCart: IconBase = props => {
  let { children, ...others } = props;
  return <TioIcon icon="shopping-cart" {...others} />
}

export default IconShoppingCart;