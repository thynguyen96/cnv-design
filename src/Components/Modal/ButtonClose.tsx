import React from 'react';
import Button from '../Inputs/Button';

interface ModalButtonCloseComponent extends React.FunctionComponent<ModalButtonCloseProps>{}

interface ModalButtonCloseProps{
  className?: string,
  css?: React.CSSProperties,
  variant?: 'primary' | 'link' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  [x: string]: any
};

const ModalButtonClose: ModalButtonCloseComponent = props => {
  let { children, ...others } = props;
  return <Button { ...others } data-dismiss="modal">{ children ? children : 'Close' }</Button>

}

export default ModalButtonClose;