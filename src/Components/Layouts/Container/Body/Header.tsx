import React, { PropsWithChildren } from 'react';
import { Row } from '../../../Layouts/Grid/Row'

export interface HeaderProps {
    className?: string,
    classRow?: string
}

export const Header: React.FunctionComponent<PropsWithChildren<HeaderProps>> = props => {
    let {className = '', classRow = ''} = props;
    return <div className={`page-header ${className}`}>
        <Row className={classRow}>
            {props.children}
        </Row>
    </div>
}