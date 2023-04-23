import React from 'react';
import Utils from '../../Utils';

interface ModalFooterComponent extends React.FunctionComponent<ModalFooterProps>{}

interface ModalFooterProps{
  className?: string,
  css?: React.CSSProperties,
  [x: string]: any
}

const _name = 'modal-footer';

const ModalFooter: ModalFooterComponent = props => {

  return <div { ...getAttrs(props) }>{ props.children }</div>

}

const getAttrs = (props: ModalFooterProps) => {
  let { className, iconClose, css, children, ...others } = props;
  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      className
    ),
    style: css,
    ...others
  }
}

export default ModalFooter;