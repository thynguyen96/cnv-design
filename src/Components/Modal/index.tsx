import React from 'react';
import Utils, { ExtendElementProps } from '../../Utils';
import ModalBackdrop from './Backdrop';
import ModalBody from './Body';
import ModalButtonClose from './ButtonClose';
import ModalClose from './Close';
import ModalFooter from './Footer';
import ModalHeader from './Header';
import ModalTitle from './Title';
import ModalTopCover from './TopCover';
import ModalTopCoverIcon from './TopCoverIcon';

interface ModalComponent extends React.FunctionComponent<ModalProps> {
  Header: typeof ModalHeader,
  Title: typeof ModalTitle,
  Body: typeof ModalBody,
  Footer: typeof ModalFooter,
  TopCover: typeof ModalTopCover,
  TopCoverIcon: typeof ModalTopCoverIcon,
  Close: typeof ModalClose,
  ButtonClose: typeof ModalButtonClose
}

export interface ModalProps extends ExtendElementProps {
  show?: boolean,
  onHide?(): void,
  static?: boolean,
  scroll?: boolean,
  vCentered?: boolean,
  size?: 'xl' | 'lg' | 'sm'
}

const _name = 'modal';
const _nameDialog = 'modal-dialog';

const Modal: ModalComponent = props => {

  const modalRef = React.useRef<HTMLDivElement>(null);

  const [IsShow, setIsShow] = React.useState(false);

  React.useEffect(
    () => {
      if (props.show) {
        Utils.isElement(modalRef.current) && modalRef.current.classList.add('show');
        setIsShow(true)
      }
    }
  )

  return <React.Fragment>
    <ModalBackdrop show={props.show} />
    <div ref={modalRef} {...getAttrsModal(props, IsShow)}>
      <div {...getAttrsDialog(props)}>
        <div className="modal-content">
          {props.children}
        </div>
      </div>
    </div>
  </React.Fragment>

}

const getAttrsModal = (props: ModalProps, IsShow: boolean) => {
  let style: React.CSSProperties = {};
  IsShow && (style.display = 'block');

  let rs = {
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      'fade'
    ),
    tabIndex: -1,
    role: 'dialog',
    'area-hidden': 'true',
    style
  }

  props.static && Object.assign(rs, { 'data-backdrop': 'static' })

  return rs;
}

const getAttrsDialog = (props: ModalProps) => {
  return {
    className: Utils.getClassNames(
      Utils.getName(_nameDialog),
      _nameDialog,
      {
        'modal-dialog-centered': props.vCentered,
        'modal-dialog-scrollable': props.scroll
      },
      getSize(props.size)
    ),
    role: 'document'
  }
}

const getSize = (size?: 'xl' | 'lg' | 'sm'): string => {
  return size ? `modal-${size} ` : '';
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.TopCover = ModalTopCover;
Modal.TopCoverIcon = ModalTopCoverIcon;
Modal.Close = ModalClose;
Modal.ButtonClose = ModalButtonClose;

export default Modal;