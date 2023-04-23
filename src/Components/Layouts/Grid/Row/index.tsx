import React from 'react';

export interface RowProps{
  [x: string]: any,
  className?: string
}

export const Row: React.FunctionComponent<RowProps> = props => {
  let { className = '', ...others } = props;
  return <div className={ `row ${ className }` } { ...others }>
    {props.children}
  </div>
}