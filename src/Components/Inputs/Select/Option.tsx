import React from 'react';
import Utils from '../../../Utils';

interface SelectOptionComponent extends React.FunctionComponent<SelectOptionProps> {

}

const _name = 'select-option'

export interface InternalSelectOptionProps extends SelectOptionProps {
    onClick(e: React.MouseEvent, value: any): void,
}
interface SelectOptionProps {
    value: any,
    disabled?: boolean,
    className?: string,
    children?: React.ReactElement | React.ReactElement[]
}
const SelectOption: SelectOptionComponent = props => {

    let { children } = props

    let attrs = getAttrs(props)

    return <div {...attrs}>
        {children}
    </div>
}

const getAttrs = (props: SelectOptionProps): React.HTMLAttributes<HTMLDivElement> => {

    let { disabled, className } = props

    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            {
                'disabled': disabled
            },
            className),
        onClick: e => onClickHandler(e, props as InternalSelectOptionProps)
    }
}

const onClickHandler = (e: React.MouseEvent, props: InternalSelectOptionProps) => {

    let { value, onClick } = props

    if (onClick)
        onClick(e, value)
}

export default SelectOption