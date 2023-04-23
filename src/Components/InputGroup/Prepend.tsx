import React from 'react';
import { ExtendElementProps } from '../../Utils';

interface InputGroupPrependComponent extends React.FunctionComponent<ExtendElementProps>{}

const InputGroupPrepend: InputGroupPrependComponent = props => {

  return <div className={ `input-group-prepend ${ props.className }` } style={ props.css }>
    {props.children}
  </div>

}

export default InputGroupPrepend;