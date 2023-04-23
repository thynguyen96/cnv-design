import React, { PropsWithChildren } from 'react';
import MenuHeader from './Header';
import MenuFooter from './Footer';
import MenuNavbar from './Navbar';
import Utils from '../../../../../Utils';

interface NavigationMenuComponent extends React.FunctionComponent<PropsWithChildren<NavigationMenuProps>> {
    Header: typeof MenuHeader,
    Footer: typeof MenuFooter,
    Navbar: typeof MenuNavbar
}

export interface NavigationMenuProps {
    footerOffset?: boolean,
    className?: string
}

const NavigationMenu: NavigationMenuComponent = props => {

    let {className, footerOffset, children} = props;

    className = Utils.getClassNames(className, 'js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered navbar-dark navbar-vertical-aside-initialized');

    return <aside className={className}>
        <div className="navbar-vertical-container">
            {footerOffset
                ? <div className="navbar-vertical-footer-offset">{children}</div>
                : children}
        </div>
    </aside>
}

NavigationMenu.Header = MenuHeader;
NavigationMenu.Footer = MenuFooter;
NavigationMenu.Navbar = MenuNavbar;

export default NavigationMenu;