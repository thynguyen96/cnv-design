import React from 'react';
import Utils, { ExtendElementProps } from '../../Utils';
import InputGroupAppend from './Append';
import InputGroupPrepend from './Prepend';
import InputGroupText from './Text'
import { Control } from '../Inputs';

const _name = 'input-group';

interface InputGroupComponent extends React.FunctionComponent<InputGroupProps>{
  Prepend: typeof InputGroupPrepend,
  Text: typeof InputGroupText,
  Append: typeof InputGroupAppend,
  Control: typeof Control
}

export interface InputGroupProps extends ExtendElementProps{
  merge?: boolean,
  borderless?: boolean,
  hoverLight?: boolean,
  navbar?: boolean
}

const InputGroup: InputGroupComponent = props => {
  return <div { ...getAttrs(props) }>{props.children}</div>
}

const getAttrs = (props: InputGroupProps) => {
  let {
    merge = false,
    borderless = false,
    hoverLight = false,
    navbar = false,
    className,
    css,
    id,
    ...others
  } = props;

  let extendClass = _name;

  merge && (extendClass +=  ` ${_name}-merge`);
  borderless && (extendClass += ` ${_name}-borderless`);
  hoverLight && (extendClass += ` ${_name}-hover-light`);
  navbar && (extendClass += `  navbar-${_name}`);
  className && (extendClass += ` ${ className }`);

  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      extendClass,
    ),
    style: css,
    id,
    ...others
  };
}

InputGroup.Prepend = InputGroupPrepend;
InputGroup.Text = InputGroupText;
InputGroup.Append = InputGroupAppend;
InputGroup.Control = Control;

export default InputGroup;