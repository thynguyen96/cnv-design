import React from 'react';

export interface ColProps{
  [x: string]: any,
  className?: string,
  xl?: number | string | boolean,
  lg?: number | string | boolean,
  md?: number | string | boolean,
  sm?: number | string | boolean,
  xs?: number | string | boolean,
  size?: number | string
}

export const Col: React.FunctionComponent<ColProps> = props => {
  let { 
    children,
    className = '',
    size,
    xl = false,
    lg = false,
    md = false,
    sm = false,
    xs = false,
    ...others
  } = props;

  className += getSizeClass('', size);
  className += getSizeClass('xl', xl);
  className += getSizeClass('lg', lg);
  className += getSizeClass('md', md);
  className += getSizeClass('sm', sm);
  className += getSizeClass('xs', xs);

  return <div className={ `col ${ className }` } { ...others }>
    { children }
  </div>
}

const getSizeClass = (name: string, size?: number | string | boolean): string => {
  let type = typeof size;
  if (type === 'boolean' && !size) return '';
  let n = name ? '-' + name : '';
  let s = (type=== 'number' || type === 'string') ? '-' + size : '';
  return ` col${n}${s}`;
}