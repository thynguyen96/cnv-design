import React from 'react';
// import { RouteComponentProps, StaticContext } from 'react-router';
import Utils from '../../../../../../Utils';
import { NavbarItem } from './Item';
import { IconBase } from '../../../../../../Icons';
import './index.css';

export interface MenuNavbarItem {
    name: string,
    action?: string,
    items?: MenuNavbarItem[],
    groupName?: string,
    icon?: IconBase,
    className?: string,
    component?: React.ComponentType<any> | React.FunctionComponent | React.FunctionComponent<any>,
    isRoute?: boolean,
    permission?: string
}

interface MenuNavbarComponent extends React.FunctionComponent<MenuNavbarProps> {
}

export interface MenuNavbarProps {
    navbar: MenuNavbarItem[],
}

const _name = 'menu';

const MenuNavbar: MenuNavbarComponent = props => {

    let {navbar} = props;

    return <div {...getAttrsMenu()}>
        {(() => {

            if (!navbar.length) return null;

            return <ul className="navbar-nav navbar-nav-lg nav-tabs">
                {navbar.map((item: MenuNavbarItem, index: number) => <NavbarItem key={index} item={item}/>)}
            </ul>

        })()}
    </div>

}

const getAttrsMenu = () => {
    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            'navbar-vertical-content'
        )
    }
}

export default MenuNavbar;