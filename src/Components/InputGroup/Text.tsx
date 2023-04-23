import React from 'react';
import { ExtendElementProps } from '../../Utils';

interface InputGroupTextComponent extends React.FunctionComponent<ExtendElementProps>{}

export interface InputGroupTextProps extends ExtendElementProps{
  inline?: boolean
}

const Text: InputGroupTextComponent = props => {
  let {
    inline = false,
    className,
    css
  } = props;

  if (inline){
    return <span className={ `input-group-text ${ className }` } style={ css }>
      { props.children }
    </span>
  }

  return <div className={ `input-group-text ${ className }` } style={ css }>
    { props.children }
  </div>
}

export default Text;