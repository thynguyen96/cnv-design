import React from 'react';
import './index.css';

interface FlexComponent extends React.FunctionComponent<FlexProps>{}

interface FlexProps{
  justify?: 'start' | 'center' | 'between' | 'end';
  align?: 'top' | 'center' | 'bottom';
  direction?: 'column' | 'row' | 'rrow' | 'rcolumn' | 'inherit' | 'initial' | 'unset';
  className?: string;
  [x: string]: any
}

const Flex: FlexComponent = props => {
  
  let { justify = 'start', align = 'center', direction = 'row', className = '', children, ...others } = props;

  return <div 
    className={ `d-flex justify-content-${ justify } align-items-${ align } ${ className } flex-${ direction }` } 
    { ...others }
  >{children}</div>

}

export default Flex;