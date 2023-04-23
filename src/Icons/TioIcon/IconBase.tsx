import React from 'react';

export interface IconBaseProps {
  [x: string]: any,
  className?: string
}

export default interface IconBase extends React.FunctionComponent<IconBaseProps> { }