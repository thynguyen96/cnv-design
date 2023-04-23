import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../../../Utils';
import { BtnProps, getSizeClass, _name } from '.'

interface BtnLinkComponent extends React.FunctionComponent<BtnProps>{}

const BtnLink: BtnLinkComponent = (props) => {
  return <Link to={ props.link || '' } { ...getAttrs(props) }>{props.children}</Link>
}

const getAttrs = (props: BtnProps): React.AnchorHTMLAttributes<HTMLAnchorElement> => {
  let { 
    variant = 'secondary', 
    circle = false,
    disabled = false,
    size, 
    style, 
    css, 
    className,
    onClick,
    link,
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

  let rs: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    onClick,
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      'btn-' + styleClass + variant,
      getSizeClass(size),
      circle ? `btn-circle rounded-circle` : '',
      disabled ? 'disabled' : '',
      className),
    ...others
  };

  css && Object.assign(rs, { style: css });

  return rs;
}

export default BtnLink;