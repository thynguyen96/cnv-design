import React from 'react';
import Utils from '../../Utils';

interface ModalTopCoverComponent extends React.FunctionComponent<ModalTopCoverProps>{}

interface ModalTopCoverProps{
  className?: string,
  css?: React.CSSProperties,
  [x: string]: any
}

const _name = 'modal-top-cover';

const ModalTopCover: ModalTopCoverComponent = props => {

  return <div { ...getAttrs(props) }>{props.children}</div>

}

const getAttrs = (props: ModalTopCoverProps) => {
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

export default ModalTopCover;