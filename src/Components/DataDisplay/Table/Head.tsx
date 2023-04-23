import React from 'react';
import Utils from '../../../Utils';
import Row from './Row';

interface HeadComponent extends React.FunctionComponent<HeadProps> {

}

const _name = 'table-head'

interface HeadProps {
    className?: string,
    children?: React.ReactComponentElement<typeof Row> | React.ReactComponentElement<typeof Row>[]
}
const Head: HeadComponent = props => {

    let { children } = props

    let attrs = getAttrs(props)

    return <thead {...attrs}>{children}</thead>
}

const getAttrs = (props: HeadProps): React.HTMLAttributes<HTMLTableSectionElement> => {

    let { className } = props

    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            className)
    }
}

export default Head