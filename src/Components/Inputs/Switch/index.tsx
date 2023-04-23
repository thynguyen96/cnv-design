import React from 'react';
import Utils from '../../../Utils';
import './index.css';

interface SwitchComponent extends React.FunctionComponent<SwitchProps> {

}

const _name = 'switch'

interface SwitchProps {
    checked?: boolean,
    onChange?(e: React.MouseEvent, checked: boolean): void,
    disabled?: boolean,
    className?: string
}
const Switch: SwitchComponent = props => {

    const inputRef = React.useRef<HTMLInputElement>(null)

    let attrs = getAttrs(props)
    let attrsInput = getAttrsInput(props, inputRef)

    return <button {...attrs}>
        <input ref={inputRef} {...attrsInput} />
        <nav></nav>
    </button>
}

const getAttrs = (props: SwitchProps): React.HTMLAttributes<HTMLButtonElement> => {

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
const getAttrsInput = (props: SwitchProps, ref: React.RefObject<HTMLInputElement>): React.InputHTMLAttributes<HTMLInputElement> => {

    let { checked, disabled } = props

    return {
        type: 'checkbox',
        defaultChecked: checked,
        disabled: disabled,
        onClick: e => onClickHandler(e, props, ref)
    }
}

const onClickHandler = (e: React.MouseEvent, props: SwitchProps, ref: React.RefObject<HTMLInputElement>) => {

    let { onChange } = props

    if (onChange && ref.current)
        onChange(e, ref.current.checked)
}

export default Switch