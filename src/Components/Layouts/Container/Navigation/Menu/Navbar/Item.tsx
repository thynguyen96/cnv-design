import React from 'react';
import { MenuNavbarItem } from '.'
import { NavbarGroupName } from './GroupName';
import { NavbarItemGroup } from './ItemGroup';
import { NavbarItemSingle } from './ItemSingle';
import { NavbarLink } from './Link';
import { NavbarGroup } from './Group';

export interface NavbarItemProps {
    item: MenuNavbarItem
}

export const NavbarItem: React.FunctionComponent<NavbarItemProps> = props => {
    let {item} = props;
    let {groupName, items = [], isRoute} = item;

    if (isRoute) return null;
    let trimItems = items.filter(i => !i.isRoute);

    return <React.Fragment>
        {groupName && <NavbarGroupName name={groupName}/>}
        {trimItems.length > 0 ? renderGroup(item, trimItems) : renderSingle(item)}
    </React.Fragment>;
}

const renderSingle = (item: MenuNavbarItem) => {
    return <NavbarItemSingle className={item.className || ''}>
        <NavbarLink action={item.action} icon={item.icon} name={item.name}/>
    </NavbarItemSingle>
}

const renderGroup = (item: MenuNavbarItem, items: MenuNavbarItem[]) => {
    return <NavbarItemGroup className={item.className || ''}>
        <NavbarLink action={items[0].action} icon={item.icon} name={item.name}
                    className='js-navbar-vertical-aside-menu-link nav-link-toggle'/>
        <NavbarGroup items={items}/>
    </NavbarItemGroup>
}