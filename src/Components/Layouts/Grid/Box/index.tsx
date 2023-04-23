import React from 'react';
import Utils from '../../../../Utils';
import './index.css';

interface BoxComponent extends React.FunctionComponent<BoxProps> {

}

const _name = 'box'
const _nameTitle = 'box-title'

interface BoxProps {
    title?: string | React.ReactElement,
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactElement | React.ReactElement[]
}
const Box: BoxComponent = props => {

    let { title, children } = props

    let attrs = getAttrs(props)

    return <section {...attrs}>
        {title
            && <div className={Utils.getClassNames(Utils.getName(_nameTitle), 'f-w-500 px-2')}>{title}</div>}
        {children}
    </section>
}

const getAttrs = (props: BoxProps): React.HTMLAttributes<HTMLElement> => {

    let { className, style, children } = props

    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            {
                'border': !checkIsBoxWrapper(children)
            },
            className),
        style: style
    }
}

const checkIsBoxWrapper = (children?: React.ReactElement | React.ReactElement[]): boolean => {

    if (children) {

        if (Array.isArray(children))

            for (let i = 0; i < children.length; i++) {
                if (checkIsBoxWrapper(children[i]))
                    return true
            }

        else if (children.type === React.Fragment) {

            if (checkIsBoxWrapper(children.props.children))
                return true

        } else if (children.type === Box)
            return true

    }

    return false
}

export default Box