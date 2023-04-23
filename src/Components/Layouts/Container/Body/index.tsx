import React, { PropsWithChildren } from 'react';
import Utils from '../../../../Utils';
import { Header } from './Header';

interface BodyComponent extends React.FunctionComponent<PropsWithChildren<BodyProps>> {
    Header: typeof Header
}

export interface BodyProps {
    fluid?: boolean,
    className?: string
}

const Body: BodyComponent = props => {
    let {fluid = false, className, children} = props;
    className = Utils.getClassNames('main', className);

    return <main role="main" className={className}>
        <div className={`container${fluid ? ' container-fluid' : ''}`}>
            {children}
        </div>
    </main>
}

Body.Header = Header;

export default Body;