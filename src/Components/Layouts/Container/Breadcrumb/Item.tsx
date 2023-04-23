import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem } from '.';

export interface ItemProps{
  item: BreadcrumbItem,
  active?: boolean
}

export const Item: React.FunctionComponent<ItemProps> = props => {
  return <li className="breadcrumb-item">
    <Link 
      className={ `breadcrumb-link ${ props.active ? 'active' : '' }` } 
      to={ props.item.action || '' }
      area-current={ props.active ? 'pages' : undefined }
    >
      {props.item.name}
    </Link>
  </li>
}