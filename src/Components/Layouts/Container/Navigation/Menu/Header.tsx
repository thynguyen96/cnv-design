import React, { PropsWithChildren } from 'react';

const MenuHeader: React.FunctionComponent<PropsWithChildren> = props => {
    return <div className="navbar-brand-wrapper justify-content-between">
        {props.children}
    </div>
}

export default MenuHeader;