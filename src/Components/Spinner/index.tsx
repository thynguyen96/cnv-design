import React from 'react';
import './index.css';

interface SpinnerComponent extends React.FunctionComponent<SpinnerProps>{}

interface SpinnerProps{
  type?: 'border' | 'grow';
  variant?: 'primary' | 'secondary' | 'danger' | 'white' | 'info' | 'success' | 'warning' | 'light' | 'dark';
  className?: string
}

const Spinner: SpinnerComponent = props => {

  let { type = 'border', variant = 'secondary', className } = props;

  return <div 
    className={ `cnv-spinner-${ type } spinner-${ variant } text-${ variant }${ className ? ' ' + className : '' }` } 
    role="status">
    <span className="visually-hidden">Loading...</span>
  </div>

}

export default Spinner;