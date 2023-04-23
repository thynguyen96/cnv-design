import React from 'react';
import Utils, { ExtendElementProps } from '../../../Utils';

interface CellComponent extends React.FunctionComponent<CellProps> {

}

type CellChildTypes = React.ReactElement | null | undefined | ''
interface CellProps extends ExtendElementProps {
    children?: CellChildTypes | CellChildTypes[],
    head?: boolean
}
const Cell: CellComponent = props => {

    let { children, head } = props

    let attrs = getAttrs(props)

    return head ? <th {...attrs}>{children}</th> : <td {...attrs}>{children}</td>
}

const getAttrs = (props: CellProps): React.HTMLAttributes<HTMLTableDataCellElement> => {

    let { className, head, children, id, css, ...others } = props

    return {
        className: Utils.getClassNames(
            className),
        id,
        style: css,
        ...others
    }
}

export default Cell