import React, { PropsWithChildren } from 'react';

const MenuFooter: React.FunctionComponent<PropsWithChildren> = props => {
    return <div className="navbar-vertical-footer">
        {props.children}
    </div>
}

export default MenuFooter;