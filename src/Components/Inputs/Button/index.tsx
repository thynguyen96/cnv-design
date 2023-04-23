import React from 'react';
import { ExtendElementProps } from '../../../Utils';
import BtnButton from './Button';
import BtnLink from './Link';
import ButtonGroup from './Group';

export const _name = 'btn';

export interface BtnProps extends ExtendElementProps {
    onClick?(e: React.MouseEvent): void,

    variant?: 'primary' | 'link' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    type?: 'button' | 'submit' | 'reset',
    circle?: boolean,
    style?: 'outline' | 'soft' | 'ghost',
    size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
    disabled?: boolean,
    link?: string,
    children?: React.ReactNode | React.ReactElement
}

interface ButtonComponent extends React.FunctionComponent<BtnProps> {
    Group: typeof ButtonGroup
}

const Button: ButtonComponent = props => {
    let {link, children, ...others} = props;
    return link ?
        <BtnLink link={link} {...others}>{children}</BtnLink> :
        <BtnButton {...others}>{children}</BtnButton>
}

Button.Group = ButtonGroup;

export const getSizeClass = (s?: 'xl' | 'lg' | 'md' | 'sm' | 'xs') => s ? `btn-${s}` : '';

export default Button;