import React from 'react';
import Utils, { ExtendElementRef, ExtendElementProps } from '../../../Utils';

const _name = 'form-control';

interface ControlComponent extends React.ForwardRefRenderFunction<ControlRef, ControlProps> { }

export interface ControlRef extends ExtendElementRef { }

export type ControlTypes =
  'button'
  | 'checkbox' | 'radio'
  | 'color'
  | 'date' | 'datetime-local' | 'range' | 'time' | 'week' | 'month'
  | 'file' | 'image'
  | 'hidden'
  | 'text' | 'password' | 'url' | 'search' | 'number' | 'email' | 'tel'
  | 'submit' | 'reset'

export interface ControlProps extends ExtendElementProps {
  title?: string,
  placeholder?: string,
  value?: string,
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void,
  onFocus?(e: React.FocusEvent<HTMLInputElement>): void,
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void,
  disabled?: boolean,
  type?: ControlTypes
}

const Control: ControlComponent = (props, ref) => {

  const inputRef = React.useRef<HTMLInputElement>(null);
  Utils.extendRef(ref, inputRef);

  return <input ref={inputRef} {...getAttrs(props)} />

}

const getAttrs = (props: ControlProps): React.InputHTMLAttributes<HTMLInputElement> => {

  const { className, id, placeholder, title, value, disabled, type = 'text', ...others } = props;

  let rs: React.InputHTMLAttributes<HTMLInputElement> = {
    type,
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      className,
      {
        'disabled': disabled
      }),
    id,
    placeholder,
    title,
    defaultValue: value,
    disabled,
    onChange: e => onChangeHandler(e, props),
    autoCorrect: 'off',
    onFocus: e => onFocusHandler(e, props),
    onBlur: e => onBlurHandler(e, props),
    ...others
  };

  return rs;
}

const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, props: ControlProps) => {
  typeof props.onChange === 'function' && props.onChange(e);
}

const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>, props: ControlProps) => {
  typeof props.onBlur === 'function' && props.onBlur(e);
}

const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>, props: ControlProps) => {
  typeof props.onFocus === 'function' && props.onFocus(e);
}


export default React.forwardRef(Control);
