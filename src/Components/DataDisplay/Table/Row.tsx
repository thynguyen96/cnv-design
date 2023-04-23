import React from 'react';
import Utils from '../../../Utils';
import Cell from './Cell';

interface RowComponent extends React.FunctionComponent<RowProps> {

}

const _name = 'table-row'

interface RowProps {
    className?: string,
    children?: React.ReactComponentElement<typeof Cell> | React.ReactComponentElement<typeof Cell>[]
}
const Row: RowComponent = props => {

    let { children } = props

    let attrs = getAttrs(props)

    return <tr {...attrs}>{children}</tr>
}

const getAttrs = (props: RowProps): React.HTMLAttributes<HTMLTableRowElement> => {

    let { className } = props

    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            className)
    }
}

export default Row