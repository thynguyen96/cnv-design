import React from 'react';
import Utils, { ExtendElementRef } from '../../../Utils';
import Text from '../Text';
import SelectOption, { InternalSelectOptionProps } from './Option';
import SelectDropdown from './Dropdown';
import './index.css';

interface SelectComponent extends React.FunctionComponent<SelectProps> {
    Option: typeof SelectOption
}

const _name = 'select'

type SelectOptionTypes = React.ReactComponentElement<typeof SelectOption> | React.ReactComponentElement<typeof SelectOption>[]

interface SelectProps {
    onChange?(e: React.MouseEvent, checked: boolean): void,
    disabled?: boolean,
    className?: string,
    children: SelectOptionTypes,
    indexOption?: number
}

const Select: SelectComponent = props => {

    const isMountedRef = React.useRef(true);
    const inputRef = React.useRef<ExtendElementRef>(null)

    let { disabled, children } = props
    const [isDropdowning, setIsDropdowning] = React.useState(false);

    React.useEffect(() => {
        isMountedRef.current = true;
    });

    React.useEffect(() => () => void (isMountedRef.current = false));
    let attrs = getAttrs(props);

    const onChange = (value: string) => {
        !disabled && inputRef.current && inputRef.current.setValue(value);
        setIsDropdowning(false);
    }

    const onFocus = (_e: React.FocusEvent<HTMLInputElement>) => setIsDropdowning(true);

    const onBlur = (_e: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            isMountedRef.current && isDropdowning && setIsDropdowning(false)
        }, 500);
    }

    return <div {...attrs}>
        <Text ref={inputRef} onFocus={onFocus} onBlur={onBlur} className="form-control" />
        {inputRef.current
            && <SelectDropdown
                parentRect={inputRef.current.getBoundingClientRect()}
                isDropdowning={isDropdowning}
                options={getRenders(disabled, children, onChange)}
                indexOption={props.indexOption} />}
    </div>
}

const getAttrs = (props: SelectProps): React.HTMLAttributes<HTMLDivElement> => {

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

const getRenders = (disabled?: boolean, children?: SelectOptionTypes, onChange?: Function): React.ReactComponentElement<typeof SelectOption>[] => {

    let renders: React.ReactComponentElement<typeof SelectOption>[] = []

    if (children) {

        if (Array.isArray(children))
            for (let i = 0; i < children.length; i++)
                renders = renders.concat(getRenders(disabled, children[i], onChange))

        else if (children.type === SelectOption) {

            let child: React.ReactComponentElement<typeof SelectOption> = ({ ...children })

            child.props = ({
                ...child.props,
                onClick: (e, value) => onSelectHandler(e, value, onChange)
            }) as InternalSelectOptionProps

            renders.push(child)
        }
    }

    return renders
}

const onSelectHandler = (e: React.MouseEvent, value: any, onChange?: Function) => onChange && onChange(value);

Select.Option = SelectOption

export default Select