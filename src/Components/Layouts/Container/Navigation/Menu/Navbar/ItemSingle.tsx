import React, { PropsWithChildren } from 'react';

export interface NavbarItemSingleProps {
    className?: string
}

export const NavbarItemSingle: React.FunctionComponent<PropsWithChildren<NavbarItemSingleProps>> = (props) => {

    return <li className={`nav-item ${props.className}`}>
        {props.children}
    </li>

}