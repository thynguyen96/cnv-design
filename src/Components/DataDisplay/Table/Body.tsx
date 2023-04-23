import React from 'react';
import Utils, { ExtendElementProps } from '../../../Utils';
import Row from './Row';

interface BodyComponent extends React.FunctionComponent<BodyProps> {

}

const _name = 'table-body'

interface BodyProps extends ExtendElementProps{
    className?: string,
    children?: React.ReactComponentElement<typeof Row> | React.ReactComponentElement<typeof Row>[]
}
const Body: BodyComponent = props => {

    let { children } = props

    let attrs = getAttrs(props)

    return <tbody {...attrs}>{children}</tbody>
}

const getAttrs = (props: BodyProps): React.HTMLAttributes<HTMLTableSectionElement> => {

    let { className, id, css, ...others } = props

    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            className),
        id,
        style: css,
        ...others
    }
}

export default Body