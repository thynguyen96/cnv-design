import React from 'react';
import Utils, { ExtendElementProps } from '../../../Utils';

import Head from './Head';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';

interface TableComponent extends React.FunctionComponent<TableProps> {
    Head: typeof Head,
    Body: typeof Body,
    Row: typeof Row,
    Cell: typeof Cell
}

const _name = 'table'

type TableChildTypes = React.ReactComponentElement<typeof Head | typeof Body> | null | undefined | ''
interface TableProps extends ExtendElementProps {
    children?: TableChildTypes | TableChildTypes[],
    striped?: boolean,
    dark?: boolean,
    bordered?: boolean,
    hover?: boolean,
    small?: boolean,
    responsive?: boolean,
    borderless?: boolean,
    responsiveClassName?: string
}
const Table: TableComponent = props => {

    return props.responsive ?
        <div className={`table-responsive ${props.responsiveClassName || ''}`}>{renderTable(props)}</div> :
        renderTable(props)

}

const renderTable = (props: TableProps) => {
    let attrs = getAttrs(props);
    return <table {...attrs}>{props.children}</table>
}

const getAttrs = (props: TableProps): React.TableHTMLAttributes<HTMLTableElement> => {

    let {
        className,
        striped = false,
        dark = false,
        bordered = false,
        borderless = false,
        hover = false,
        small = false,
        css,
        responsive,
        responsiveClassName = '',
        ...others
    } = props
    let defaultClassName = '';

    striped && (defaultClassName += 'table-striped');
    dark && (defaultClassName += ' table-dark');
    bordered && (defaultClassName += ' table-bordered');
    borderless && (defaultClassName += ' table-borderless');
    hover && (defaultClassName += ' table-hover');
    small && (defaultClassName += ' table-sm');

    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            _name,
            defaultClassName,
            className),
        style: css,
        ...others
    }
}

Table.Head = Head
Table.Body = Body
Table.Row = Row
Table.Cell = Cell

export default Table;