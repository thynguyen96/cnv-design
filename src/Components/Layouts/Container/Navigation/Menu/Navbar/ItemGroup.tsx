import React, { PropsWithChildren } from 'react';

export interface NavbarItemGroupProps {
    className?: string
}

export const NavbarItemGroup: React.FunctionComponent<PropsWithChildren<NavbarItemGroupProps>> = props => {
    return <li className={`navbar-vertical-aside-has-menu ${props.className}`}>
        {props.children}
    </li>
}