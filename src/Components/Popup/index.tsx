import React, { PropsWithChildren } from 'react';
import Portal from '../../Portal';
import './index.css';

interface PopupComponent extends React.FunctionComponent<PropsWithChildren<PopupProps>> {
}

interface PopupProps {
    show?: boolean;
    width?: string;
    isStatic?: boolean;

    onHide?(): void;

    className?: string
}

const Popup: PopupComponent = props => {

    let {
        show = false,
        width,
        isStatic = false,
        onHide,
        className,
        children
    } = props;

    const popupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(
        () => {
            if (popupRef.current) {
                popupRef.current.querySelectorAll('[data-dismiss="popup"]').forEach(elDismiss => {
                    elDismiss.addEventListener('click', dismiss, false);
                });
            }

            return () => {
                if (popupRef.current) {
                    popupRef.current.querySelectorAll('[data-dismiss="popup"]').forEach(elDismiss => {
                        elDismiss.removeEventListener('click', dismiss, false);
                    });
                }
            }
        },
        [popupRef]
    );

    React.useEffect(
        () => {
            popupRef.current && show ? popupRef.current.classList.add('show') : dismiss();
        },
        [show]
    )

    const dismiss = () => {

        if (popupRef.current && popupRef.current.classList.contains('show')) {
            popupRef.current.classList.add('hide');
            setTimeout(() => {
                if (popupRef.current) {
                    popupRef.current.classList.remove('show', 'hide');
                    onHide && onHide();
                }
            }, 300);
        }
    }

    const styleBody: React.CSSProperties = {};
    width && (styleBody.width = width);

    return <Portal>
        <div className={`cnv-popup pos-fixed${className ? ' ' + className : ''}`} ref={popupRef}>
            <div className="cnv-popup-backdrop" onClick={() => isStatic || dismiss()}></div>
            <div className="cnv-popup-body" style={styleBody}>
                {children}
            </div>
        </div>
    </Portal>

}

export default Popup;