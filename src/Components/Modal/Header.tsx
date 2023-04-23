import React from 'react';
import { IconClear } from '../../Icons';
import Utils from '../../Utils';

interface ModalHeaderComponent extends React.FunctionComponent<ModalHeaderProps> { }

interface ModalHeaderProps {
  iconClose?: boolean,
  className?: string,
  id?: string,
  css?: React.CSSProperties,
  [x: string]: any
}

const _name = 'modal-header';

const ModalHeader: ModalHeaderComponent = props => {

  return <div {...getAttrs(props)}>
    {props.children}
    {(
      () => {
        if (props.iconClose) {
          return <button type="button" className="btn btn-xs btn-icon btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
            <IconClear className="tio-lg" />
          </button>
        }

        return null;
      }
    )()}

  </div>

}

const getAttrs = (props: ModalHeaderProps) => {
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

export default ModalHeader;