import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface PaginationLinkComponent extends React.FunctionComponent<PropsWithChildren<PaginationLinkProps>> {
}

interface PaginationLinkProps {
    current: number,
    goTo: number,

    onClick?(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number, isActive: boolean): void,
}

const PaginationLink: PaginationLinkComponent = (props) => {
    let active = props.goTo === props.current;

    let onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        props.goTo > 0 && typeof props.onClick === 'function' && props.onClick(e, props.goTo, active)
    }

    return <Link to="#" className={`page-link`} onClick={onClick}>
        {props.children}
        {active ? <span className="sr-only">(current)</span> : null}
    </Link>

}

export default PaginationLink;