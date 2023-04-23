import React from 'react';
import { MenuNavbarItem } from '.';
import Utils from '../../../../../../Utils';
import { NavbarItem } from './Item';

export interface NavbarGroupProps{
  items: MenuNavbarItem[]
}

const _name = 'menu-item-group';

export const NavbarGroup: React.FunctionComponent<NavbarGroupProps> = props => {
  return <ul { ...getAttrs() }>
    {props.items.map((item: MenuNavbarItem, index: number) => <NavbarItem key={ index } item={ item } />)}
  </ul>
}

const getAttrs = () => {
  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      'js-navbar-vertical-aside-submenu nav nav-sub'
    )
  }
}