import React from 'react';
import flatpickr from 'flatpickr';
import Utils, { ExtendElementRef } from '../../../Utils';

const _nameWrapper = 'datetime';
const _name = {
  date: 'datetime-date',
  range: 'datetime-range',
  time: 'datetime-time'
};
interface DateTimeComponent extends React.ForwardRefRenderFunction<ExtendElementRef, DateTimeProps> { }

interface DateTimeProps {
  type?: DateTimeType | string,
  format?: string,
  maxValue?: string,
  minValue?: string,
  value?: string | string[],
  disabled?: boolean,
  disable?: string | (string | object)[],
  title?: string,
  placeholder?: string,
  multiple?: boolean,
  separator?: string,
  onChange?(value: string | null): void,
  className?: string,
  is24?: boolean,
  enableTime?: boolean;
  locale?: 'en' | 'vn'
}

export enum DateTimeType {
  DATE = 'date',
  RANGE = 'range',
  TIME = 'time'
};

const DateTime: DateTimeComponent = (props, ref) => {

  const inputRef = React.useRef<HTMLInputElement>(null);

  Utils.extendRef(ref, inputRef)

  React.useEffect(() => {
    if (Utils.isElement(inputRef.current)) {
      let dateOptions = {};
      Object.assign(dateOptions, getPropOptions(props));
      Object.assign(dateOptions, {
        onChange: (_: any[], value: string) => props.onChange && props.onChange(value),
        locale: flatpickr.l10ns['vn']// props.locale ?? 'en'
      })

      let parent = inputRef.current.parentNode;
      Utils.isNode(parent) && Utils.isNode(parent.firstChild) && flatpickr(parent.firstChild, dateOptions);
    }
  });

  return <div {...getAttrsWrapper()}>
    <input ref={inputRef} {...getAttrsInput(props, inputRef)} />
  </div>

}

const getAttrsWrapper = () => {
  return {
    className: Utils.getClassNames(Utils.getName(_nameWrapper))
  }
}

const getAttrsInput = (props: DateTimeProps, ref: React.RefObject<HTMLInputElement>): React.InputHTMLAttributes<HTMLInputElement> => {
  let { title, className, placeholder, disabled, value, type = DateTimeType.DATE } = props;
  let defaultValue = typeof value === 'string' ? value : undefined;

  type = type.toLowerCase();
  ~Object.values(_name).indexOf(type) || (type = DateTimeType.DATE);

  return {
    className: Utils.getClassNames(Utils.getName(type), { disabled }, className),
    placeholder,
    title,
    disabled,
    defaultValue,
    onChange: e => props.onChange && props.onChange(ref.current ? ref.current.value : null),
  };
}

const getPropOptions = (props: DateTimeProps): object => {
  let { type = DateTimeType.DATE } = props;

  switch (type) {
    case DateTimeType.RANGE:
      return getPropOptionsRange(props);

    case DateTimeType.TIME:
      return getPropOptionsTime(props);

    default:
      return getPropOptionsDate(props);
  }
}

const getPropOptionsDate = (props: DateTimeProps): object => {
  let rs = {};
  let { minValue, maxValue, format, disable, multiple, separator, enableTime, is24 } = props;

  minValue && Object.assign(rs, { minDate: minValue });
  maxValue && Object.assign(rs, { maxDate: maxValue });
  format && Object.assign(rs, { dateFormat: format });
  enableTime && Object.assign(rs, { enableTime });
  is24 && Object.assign(rs, { time_24hr: true });

  Array.isArray(disable) && Object.assign(rs, { disable });

  multiple && Object.assign(rs, { mode: 'multiple' });
  multiple && separator && Object.assign(rs, { conjunction: separator });

  return rs;
};

const getPropOptionsRange = (props: DateTimeProps): object => {
  let rs = { mode: 'range' };
  let { minValue, maxValue, format, disable, multiple, separator, value, enableTime, is24 } = props;

  minValue && Object.assign(rs, { minDate: minValue });
  maxValue && Object.assign(rs, { maxDate: maxValue });
  format && Object.assign(rs, { dateFormat: format });
  enableTime && Object.assign(rs, { enableTime });
  is24 && Object.assign(rs, { time_24hr: true });

  Array.isArray(disable) && Object.assign(rs, { disable });
  Array.isArray(value) && value.length && Object.assign(rs, { defaultDate: value });

  return rs;
};

const getPropOptionsTime = (props: DateTimeProps): object => {
  let rs = { enableTime: true, noCalendar: true };
  let { format, is24, minValue, maxValue, value } = props;

  minValue && Object.assign(rs, { minTime: minValue });
  maxValue && Object.assign(rs, { maxTime: maxValue });

  format && Object.assign(rs, { dateFormat: format });
  is24 && Object.assign(rs, { time_24hr: true });
  value && Object.assign(rs, { defaultDate: value });

  return rs;
};

export default React.forwardRef(DateTime);