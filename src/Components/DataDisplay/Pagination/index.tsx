import React from 'react';
import Utils from '../../../Utils';
import { Grid } from '../../Layouts';
import PaginationItem from './Item';
import PaginationLink from './Link';

interface PaginationComponent extends React.FunctionComponent<PaginationProps> {
    Item: typeof PaginationItem,
    Link: typeof PaginationLink
}

interface PaginationProps {
    sidesButton?: boolean,
    totalItems: number,
    currentPage?: number,
    itemsPerPage: number,
    distance?: number,
    first?: string,
    prev?: string,
    next?: string,
    last?: string,
    showing?: boolean,
    showingLabel?: string,

    onClick?(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number, isActive: boolean): void,

    className?: string
}

const _wrapper = 'pagination-wrapper';
const _name = 'pagination';

const firstElement = (props: PaginationProps, disabled: boolean) => {
    return <PaginationItem
        key={-2}
        current={props.currentPage || 1}
        goTo={1}
        className={`first${disabled ? ' disabled' : ''}`}
        onClick={props.onClick}>{props.first || 'First'}</PaginationItem>
};

const prevElement = (props: PaginationProps, disabled: boolean) => {
    return <PaginationItem
        key={-1}
        current={props.currentPage || 1}
        goTo={(props.currentPage || 1) - 1}
        className={`prev${disabled ? ' disabled' : ''}`}
        onClick={props.onClick}>{props.prev || 'Previous'}</PaginationItem>
};

const lastElement = (props: PaginationProps, disabled: boolean, end: number) => {
    return <PaginationItem
        key={end + 2}
        current={props.currentPage || 1}
        goTo={end}
        className={`last${disabled ? ' disabled' : ''}`}
        onClick={props.onClick}>{props.last || 'Last'}</PaginationItem>
};

const nextElement = (props: PaginationProps, disabled: boolean, end: number) => {
    let nextPage = (props.currentPage || 1) + 1;
    nextPage > end && (nextPage = 0);

    return <PaginationItem
        key={end + 1}
        current={props.currentPage || 1}
        goTo={nextPage}
        className={`next${disabled ? ' disabled' : ''}`}
        onClick={props.onClick}>{props.next || 'Next'}</PaginationItem>
};

const Pagination: PaginationComponent = (props) => {

    const paginationRef = React.useRef<HTMLUListElement>(null);

    let {
        sidesButton = false,
        totalItems,
        currentPage = 1,
        itemsPerPage,
        distance,
        showing = false,
        showingLabel = ''
    } = props;

    if (totalItems < 1 || itemsPerPage < 1) return null;

    let totalPage = Math.ceil(totalItems / itemsPerPage);
    if (totalPage <= 1) return null;

    let start = 1, end = totalPage;
    currentPage < 1 && (currentPage = 1);

    if (distance && distance > 0) {
        let split = Math.floor(distance / 2);

        start = currentPage - split;
        end = start + distance;

        distance % 2 === 0 && (end -= 1);
        distance = end - start;

        if (start < 1) {
            start = 1;
            end = start + distance;
        }

        if (end > totalPage) {
            end = totalPage;
            start = end - distance;
            start < 1 && (start = 1);
        }
    }

    return <Grid.Row>
        <Grid.Col md size={showing ? 6 : 12}>
            <nav {...getAttrsNav()} aria-label="Page navigation">
                <ul {...getAttrsUl(props)} ref={paginationRef}>
                    {sidesButton ? [
                        firstElement(props, currentPage === 1),
                        prevElement(props, currentPage === 1)
                    ] : null}

                    {(() => {
                        let p = [];

                        for (let i = start; i <= end; ++i) {
                            currentPage === end
                            p.push(<PaginationItem
                                key={i}
                                current={currentPage}
                                goTo={i}
                                onClick={props.onClick}>{i}</PaginationItem>);
                        }

                        return p;
                    })()}

                    {sidesButton ? [
                        nextElement(props, currentPage === end, end),
                        lastElement(props, currentPage === totalPage, totalPage)
                    ] : null}
                </ul>
            </nav>
        </Grid.Col>

        {(() => {

            if (showing) {
                let textShowing = showingLabel || 'Showing from {{from}} to {{to}} of {{total}}';
                let from = (currentPage - 1) * itemsPerPage + 1;
                let to = from + itemsPerPage - 1;
                to > totalItems && (to = totalItems);

                textShowing = textShowing
                    .replace(/\{\{\s*from\s*\}\}/g, from.toString())
                    .replace(/\{\{\s*to\s*\}\}/g, to.toString())
                    .replace(/\{\{\s*total\s*\}\}/, totalItems.toString());

                return <Grid.Col md size={6} className="text-right justify-content-end">
                    <span>{textShowing}</span>
                </Grid.Col>
            }

            return null;

        })()}
    </Grid.Row>

}

const getAttrsNav = () => {
    return {
        className: Utils.getClassNames(
            Utils.getName(_wrapper)
        )
    }
}

const getAttrsUl = (props: PaginationProps) => {
    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            _name,
            props.className || ''
        )
    }
}

Pagination.Link = PaginationLink;
Pagination.Item = PaginationItem;

export default Pagination;