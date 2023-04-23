import React from 'react';
import Utils from '../../Utils';

interface ModalTopCoverIconComponent extends React.FunctionComponent<ModalTopCoverIconProps> { }

interface ModalTopCoverIconProps {
  className?: string,
  css?: React.CSSProperties,
  [x: string]: any
}

const _name = 'modal-top-cover-icon';

const ModalTopCoverIcon: ModalTopCoverIconComponent = props => {

  return <div {...getAttrs(props)}>{props.children}</div>

}

const getAttrs = (props: ModalTopCoverIconProps) => {
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

export default ModalTopCoverIcon;