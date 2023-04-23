import React from 'react';
import { NavbarItemSingle } from './ItemSingle';
import { IconMoreHorizontal } from '../../../../../../Icons';

export interface NavbarGroupNameProps{
  name: string
}

export const NavbarGroupName: React.FunctionComponent<NavbarGroupNameProps> = props => {
  return <NavbarItemSingle>
    <small className="nav-subtitle" title={ props.name }>{ props.name }</small>
    <IconMoreHorizontal className="nav-subtitle-replacer" />
  </NavbarItemSingle>
}