import React from 'react';
import { Link } from 'react-router-dom';
import { ExtendElementProps } from '../../Utils';

interface InputGroupAppendComponent extends React.FunctionComponent<InputGroupAppendProps>{}

export interface InputGroupAppendProps extends ExtendElementProps{
  link?: boolean,
  href?: string
}

const InputGroupAppend: InputGroupAppendComponent = props => {
  let {
    link = false,
    href = '',
    className,
    css
  } = props;

  if (link){
    return <Link to={ href } className={ `input-group-append ${ className }` } style={ css }>
      {props.children}
    </Link>
  }

  return <div className={ `input-group-append ${ className }` } style={ css }>
    {props.children}
  </div>
}

export default InputGroupAppend;