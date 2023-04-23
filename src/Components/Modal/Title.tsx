import React from 'react';
import Utils from '../../Utils';

interface ModalTitleComponent extends React.FunctionComponent<ModalTitleProps>{}

interface ModalTitleProps{
  [x: string]: any,
  className?: string,
  id?: string,
  css?: React.CSSProperties
}

const _name = 'modal-title';

const ModalTitle: ModalTitleComponent = props => {
  return <h5 { ...getAttrs(props) }>{ props.children }</h5>
}

const getAttrs = (props: ModalTitleProps) => {
  let { className, id, css, children, ...others } = props;
  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      className
    ),
    id,
    style: css,
    ...others
  }
}

export default ModalTitle;