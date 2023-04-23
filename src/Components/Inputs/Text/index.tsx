import React from 'react';
import Utils, { ExtendElementRef } from '../../../Utils';
import './index.css';

interface TextComponent extends React.ForwardRefRenderFunction<ExtendElementRef, TextProps> {

}

const _name = 'text'
const _nameWrapper = 'text-wrapper'
const _nameHasTitle = 'has-title'
const _nameHasValue = 'has-value'

interface TextProps {
    title?: string,
    placeholder?: string,
    value?: string,
    onChange?(e: React.ChangeEvent<HTMLInputElement>, value: string): void,
    disabled?: boolean,
    className?: string,
    onFocus?(e: React.FocusEvent<HTMLInputElement>): void,
    onBlur?(e: React.FocusEvent<HTMLInputElement>): void,
    onHover?(e: React.MouseEvent<HTMLInputElement>): void
}
const Text: TextComponent = (props, ref) => {

    const inputRef = React.useRef<HTMLInputElement>(null)

    let { title, value } = props
    const [hasValue, setHasValue] = React.useState(isHasValue(value));

    Utils.extendRef(ref, inputRef, {
        setValue: (value: string) => setValue(inputRef, value, hasValue, setHasValue)
    });

    return title
        ? renderWrapper(props, inputRef, hasValue, setHasValue)
        : renderInput(props, inputRef, hasValue, setHasValue)
}

const renderWrapper = (props: TextProps, ref: React.RefObject<HTMLInputElement>, hasValue: boolean, setHasValue: React.Dispatch<React.SetStateAction<boolean>>) => {

    let { title } = props

    let attrs = getAttrsWrapper(props)

    return <label {...attrs}>
        {renderInput(props, ref, hasValue, setHasValue)}
        <span>{title}</span>
    </label>
}
const renderInput = (props: TextProps, ref: React.RefObject<HTMLInputElement>, hasValue: boolean, setHasValue: React.Dispatch<React.SetStateAction<boolean>>) => {

    let attrs = getAttrsInput(props, hasValue, setHasValue)

    return <input ref={ref} {...attrs} />
}
const getAttrsWrapper = (props: TextProps): React.LabelHTMLAttributes<HTMLLabelElement> => {

    let { disabled } = props

    return {
        className: Utils.getClassNames(
            Utils.getName(_nameWrapper),
            {
                'disabled': disabled
            })
    }
}
const getAttrsInput = (props: TextProps, hasValue: boolean, setHasValue: React.Dispatch<React.SetStateAction<boolean>>): React.InputHTMLAttributes<HTMLInputElement> => {

    let { title, placeholder, value, disabled, className } = props

    if (title)
        placeholder = title

    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            {
                [Utils.getName(_name, _nameHasTitle)]: title,
                [Utils.getName(_name, _nameHasValue)]: hasValue,
                'disabled': disabled
            },
            className),
        placeholder: placeholder,
        defaultValue: value,
        disabled: disabled,
        onChange: e => onChangeHandler(e, props, hasValue, setHasValue),
        autoCorrect: 'off',
        onFocus: e => onFocusHandler(e, props),
        onBlur: e => onBlurHandler(e, props),
        onMouseOver: e => onHoverHandler(e, props)
    }
}

const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>, props: TextProps) => {
    typeof props.onBlur === 'function' && props.onBlur(e);
}

const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>, props: TextProps) => {
    typeof props.onFocus === 'function' && props.onFocus(e);
}

const onHoverHandler = (e: React.MouseEvent<HTMLInputElement>, props: TextProps) => {
    typeof props.onHover === 'function' && props.onHover(e);
}

const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, props: TextProps, hasValue: boolean, setHasValue: React.Dispatch<React.SetStateAction<boolean>>) => {

    let { value } = e.target

    let nextHasValue = isHasValue(value)

    if (nextHasValue != hasValue)
        setHasValue(nextHasValue)

    callOnChange(e, props, value)
}

const callOnChange = (e: React.ChangeEvent<HTMLInputElement>, props: TextProps, value: string) => {

    let { onChange } = props

    if (onChange)
        onChange(e, value)
}

const setValue = (ref: React.RefObject<HTMLInputElement>, value: string, hasValue: boolean, setHasValue: React.Dispatch<React.SetStateAction<boolean>>) => {

    if (ref.current)
        ref.current.value = value

    let nextHasValue = isHasValue(value)

    if (nextHasValue != hasValue)
        setHasValue(nextHasValue)
}

const isHasValue = (value: string | undefined) => {

    if (value)
        return true

    return false
}

export default React.forwardRef(Text)