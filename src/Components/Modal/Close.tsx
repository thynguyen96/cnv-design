import React from 'react';
import Utils from '../../Utils';

interface ModalCloseComponent extends React.FunctionComponent<ModalCloseProps>{}

interface ModalCloseProps{
  className?: string,
  css?: React.CSSProperties,
  [x: string]: any
}

const _name = 'modal-close';

const ModalClose: ModalCloseComponent = props => {

  return <div { ...getAttrs(props) }>{props.children}</div>

}

const getAttrs = (props: ModalCloseProps) => {
  let { className, css, children, ...others } = props;
  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name
    ),
    style: css,
    ...others
  }
}

export default ModalClose;