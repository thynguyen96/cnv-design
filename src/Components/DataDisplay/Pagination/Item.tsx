import React, { PropsWithChildren } from 'react';
import PaginationLink from './Link';

interface PaginationItemComponent extends React.FunctionComponent<PropsWithChildren<PaginationItemProps>> {
}

interface PaginationItemProps {
    className?: string,
    goTo: number,
    current: number,

    onClick?(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number, isActive: boolean): void,
}

const PaginationItem: PaginationItemComponent = (props) => {

    let {className = '', current, goTo, onClick} = props;
    let active = (current === goTo);

    return <li className={`page-item ${className}${active ? ' active' : ''}`}>
        <PaginationLink current={current} goTo={goTo} onClick={onClick}>{props.children}</PaginationLink>
    </li>

}

export default PaginationItem;