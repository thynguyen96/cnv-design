import React from 'react';
import { createPortal } from 'react-dom';

interface PortalComponent extends React.FunctionComponent<PortalProps> {
}

interface PortalProps {
    children?: React.ReactNode | React.ReactElement
}

const Portal: PortalComponent = props => createPortal(props.children, document.body);

export default Portal;