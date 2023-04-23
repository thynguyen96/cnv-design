import React from 'react';
import Utils from '../../Utils';

interface ModalBodyComponent extends React.FunctionComponent<ModalBodyProps>{}

interface ModalBodyProps{
  className?: string,
  id?: string,
  css?: React.CSSProperties,
  [x: string]: any
}

const _name = 'modal-body';

const ModalBody: ModalBodyComponent = props => {

  return <div { ...getAttrs(props) }>{ props.children }</div>

}

const getAttrs = (props: ModalBodyProps) => {
  let { className, id, css, children, ...others } = props;
  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      className
    ),
    id,
    style: css
  }
}

export default ModalBody;