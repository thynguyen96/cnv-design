import React from 'react';
import Utils from '../../../Utils';
import './index.css';

interface RadioComponent extends React.FunctionComponent<RadioProps> {

}

const _name = 'radio'

interface RadioProps {
    name: string,
    value: string,
    checked?: boolean,
    onChange?(e: React.MouseEvent, value: string): void,
    disabled?: boolean,
    className?: string,
    children?: React.ReactElement | React.ReactElement[]
}
const Radio: RadioComponent = props => {

    const inputRef = React.useRef<HTMLInputElement>(null)

    let { children } = props

    let attrs = getAttrs(props)
    let attrsInput = getAttrsInput(props, inputRef)

    return <label {...attrs}>
        <input ref={inputRef} {...attrsInput} />
        {children}
    </label>
}

const getAttrs = (props: RadioProps): React.HTMLAttributes<HTMLLabelElement> => {

    let { disabled, className } = props

    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            {
                'disabled': disabled
            },
            className)
    }
}
const getAttrsInput = (props: RadioProps, ref: React.RefObject<HTMLInputElement>): React.InputHTMLAttributes<HTMLInputElement> => {

    let { name, value, checked, disabled } = props

    return {
        type: 'radio',
        name: name,
        value: value,
        checked: checked ?? false,
        disabled: disabled,
        onClick: e => onClickHandler(e, props, ref)
    }
}

const onClickHandler = (e: React.MouseEvent, props: RadioProps, ref: React.RefObject<HTMLInputElement>) => {

    let { onChange } = props

    if (onChange && ref.current)
        onChange(e, ref.current.value)
}

export default Radio