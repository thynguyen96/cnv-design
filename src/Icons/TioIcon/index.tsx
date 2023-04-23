import React from 'react';
import { IconBaseProps } from './IconBase';
import Utils from '../../Utils';

export interface TioIconComponent extends React.FunctionComponent<TioIconProps> { }

export interface TioIconProps extends IconBaseProps {
  icon: string |
  'chart-bar-4' |
  'circle' |
  'clear' |
  'clear-circle' |
  'clear-circle-outlined' |
  'clear-square' |
  'clear-square-outlined' |
  'comment-text' |
  'dollar-outlined' |
  'edit' |
  'file' |
  'first-page' |
  'joystick' |
  'help-outlined' |
  'label' |
  'labels' |
  'last-page' |
  'more-horizontal' |
  'pen' |
  'print' |
  'puzzle' |
  'remove' |
  'remove-circle' |
  'remove-circle-outlined' |
  'remove-from-trash' |
  'remove-square' |
  'remove-square-outlined' |
  'search' |
  'star' |
  'tune' |
  'user-add' |
  'caret-right' |
  'user-switch'
}

const TioIcon: TioIconComponent = props => {
  let { className, icon, ...others } = props;
  className = Utils.getClassNames(
    `tio-${icon}`,
    className
  )
  return <i className={className} {...others}></i>
}

export default TioIcon;