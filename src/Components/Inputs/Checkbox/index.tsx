import React from 'react';
import Control, { ControlProps, ControlRef } from '../Control';
import Utils from '../../../Utils';

interface CheckboxProps extends ControlProps {
  children?: React.ReactNode | React.ReactElement,
  id: string,
  before?: boolean,
  checked?: boolean
}

export interface CheckboxRef extends ControlRef {
  checked(): boolean;
}

interface CheckboxComponent extends React.ForwardRefRenderFunction<CheckboxRef, CheckboxProps> { }

const Checkbox: CheckboxComponent = (props, ref) => {
  const cbRef = React.useRef<HTMLInputElement & CheckboxRef>(null);
  Utils.extendRef(ref, cbRef, {
    checked: () => cbRef.current?.checked ?? false
  });

  const [useProps, setUseProps] = React.useState(false);
  const [InputChecked, setInputChecked] = React.useState(false);

  React.useEffect(
    () => {
      if (!useProps) {
        setUseProps(true);
        setInputChecked(props.checked || false);
      }
    }
  )

  let { id, before = false, type, className = '', children, checked, ...others } = props;

  return <div className='custom-control custom-checkbox'>
    {before && renderLabel(props)}
    <Control
      id={id}
      type='checkbox'
      ref={cbRef}
      className={Utils.getClassNames(
        'custom-control-input',
        className
      )}
      checked={InputChecked}
      {...others}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setInputChecked(e.target.checked);
        props.onChange && props.onChange(e);
      }}
    />
    {before || renderLabel(props)}
  </div>
}

const renderLabel = (props: CheckboxProps) => {
  return <label {...getAttrsLabel(props)}>{props.children}</label>
}

const getAttrsLabel = (props: CheckboxProps) => {
  let { id } = props;

  let rs = {
    className: Utils.getClassNames(
      'custom-control-label'
    )
  };

  id && Object.assign(rs, { htmlFor: id });

  return rs;
}

export default React.forwardRef(Checkbox);