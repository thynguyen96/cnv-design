import React from 'react';
import Utils from '../../../Utils';
import { BtnProps, getSizeClass, _name } from '.';

interface BtnButtonComponent extends React.FunctionComponent<BtnProps>{}

const BtnButton: BtnButtonComponent = props => {
  return <button { ...getAttrs(props) }>{props.children}</button>
}

const getAttrs = (props: BtnProps): React.ButtonHTMLAttributes<HTMLButtonElement> => {
  let { 
    variant = 'secondary', 
    type = 'button', 
    circle = false,
    disabled = false,
    size, 
    style, 
    css, 
    className,
    onClick,
    ...others
  } = props;

  let styleClass = style ? `-${style}` : '';
  
  if (circle){
    css = css || {} as React.CSSProperties;
    Object.assign(css, {
      padding: 0,
      lineHeight: 1
    } as React.CSSProperties);
  }

  let rs: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    type,
    onClick,
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      'btn-' + styleClass + variant,
      getSizeClass(size),
      circle ? `btn-circle rounded-circle` : '',
      disabled ? 'disabled' : '',
      className),
    style: css,
    disabled,
    ...others
  };

  return rs;
}

export default BtnButton;
