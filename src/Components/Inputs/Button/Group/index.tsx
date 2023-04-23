import React from 'react';
import Utils from '../../../../Utils';
import Button from '..';

interface ButtonGroupComponent extends React.FunctionComponent<ButtonGroupProps> {

}

const _name = 'btn-group'

interface ButtonGroupProps {
    disabled?: boolean,
    className?: string,
    children?: React.ReactElement | React.ReactElement[]
}
const ButtonGroup: ButtonGroupComponent = props => {

    let { disabled, children } = props

    let attrs = getAttrs(props);

    return <div {...attrs}>{getRenders(disabled, children)}</div>
}

const getAttrs = (props: ButtonGroupProps): React.HTMLAttributes<HTMLDivElement> => {

    let { disabled, className } = props

    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            _name,
            {
                'disabled': disabled
            },
            className)
    }
}

const getRenders = (disabled?: boolean, children?: React.ReactElement | React.ReactElement[]): React.ReactElement[] => {

    let renders: React.ReactElement[] = []

    if (children) {

        if (Array.isArray(children))
            for (let i = 0; i < children.length; i++)
                renders = renders.concat(getRenders(disabled, children[i]))

        else if (children.type === React.Fragment)
            renders = renders.concat(getRenders(disabled, children.props.children))

        else if (children.type === Button) {

            if (!children.props.circle)
                if (!children.props.variant || ['primary', 'default', 'dashed'].indexOf(children.props.variant) > -1) {

                    let child: React.ReactElement = ({ ...children })

                    if (disabled)
                        child.props = ({ ...child.props, disabled })

                    renders.push(child)
                }
        }
    }

    return renders
}

export default ButtonGroup