import React from 'react';
import Utils from '../../../Utils';
import Control, { ControlProps, ControlRef } from '../../Inputs/Control';

interface FormControlComponent extends React.ForwardRefRenderFunction<FormControlRef, FormControlProps> { }

export interface FormControlRef extends ControlRef { }

export interface FormControlProps extends ControlProps { }

const FormControl: FormControlComponent = (props, ref) => {

  const controlRef = React.useRef<ControlRef>(null);
  Utils.extendRef(ref, controlRef);

  let { children, ...others } = props;
  return <Control ref={controlRef} {...others} />

}

export default React.forwardRef(FormControl);