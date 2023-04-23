import React from 'react';
import { IconClearCircle } from '../../../Icons';
import Utils, { ExtendElementRef } from '../../../Utils';
import './index.css';

type BasicDataType = string | number;

type CustomTagFunction = (tag: string, index: number, remove: RemoveHandler) => React.ReactElement<HTMLLIElement>;

type ChangeHandler = (value: string[]) => void;

type RemoveHandler = (index: number) => void;

type KeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => void;

type BlurHandler = (event: React.FocusEvent<HTMLInputElement>) => void;

interface InputTagsComponent extends React.ForwardRefRenderFunction<InputTagsRef, InputTagsProps> { }

export interface InputTagsRef extends ExtendElementRef { }

export interface InputTagsProps {
  className?: string;
  value?: BasicDataType | BasicDataType[];
  disabled?: boolean;
  placeholder?: string;
  enableBackspaceDelete?: boolean;
  onChange?: ChangeHandler;
  customTag?: CustomTagFunction;
  onlyNumber?: boolean
}

const _name = 'input-tags';

const InputTags: InputTagsComponent = (props, ref) => {

  const [Tags, setTags] = React.useState<string[]>(fixedTagsValue(props.value));
  const [isWorking, setIsWorking] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);
  Utils.extendRef(ref, inputRef, {
    getValue: () => Tags,
    setValue: (value: BasicDataType | BasicDataType[]) => setTags(fixedTagsValue(value))
  });

  const _removeTag: RemoveHandler = index => {
    let tags = Tags.filter((_, i) => i !== index);
    setTags([...tags]);
    props.onChange && props.onChange([...tags]);
  }

  const _keyDown: KeyDownHandler = e => {
    let target = e.target as HTMLInputElement;
    let val = target.value;
    let key = e.key;

    if (props.onlyNumber) {
      if (!(/^[0-9]+$/).test(key) && key !== 'Backspace' ) {
        e.preventDefault()
      }
    }

    if (key === 'Enter' || key === ',') {
      if (val && !Tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        let newTags = fixedTagsValue([...Tags, val]);
        setTags(newTags);

        props.onChange && props.onChange([...newTags]);

      }
      setIsWorking(true);
      e.preventDefault();
      target.value = '';
      target.focus();
    }
    else if (key === 'Backspace' && !val) {
      if (Tags.length && props.enableBackspaceDelete) {
        let lastTag = Tags.pop();
        let newTags = fixedTagsValue([...Tags]);
        setTags(newTags);
        props.onChange && props.onChange([...newTags]);
        inputRef.current && (inputRef.current.value = (lastTag || ''))
      }
      setIsWorking(true);
      target.focus();
    }

  }

  const _focus = () => setIsWorking(true);

  const _blur: BlurHandler = e => {
    let remain = e.target.value.trim();
    let tags = fixedTagsValue([...Tags, remain]);
    remain && setTags(tags);
    props.onChange && props.onChange([...tags]);
    setIsWorking(false);
  }

  return <div {...getAttrs(props)}>
    <ul className="input-tags__tags">
      {renderTags(Tags, _removeTag, props.customTag)}
      <li className="input-tags__tags__input" key={Tags.length}>
        <input
          type="text"
          className="form-control"
          ref={inputRef}
          onFocus={_focus}
          onBlur={_blur}
          onKeyDown={_keyDown}
          autoFocus={isWorking}
          disabled={props.disabled}
          placeholder={props.placeholder}
        />
      </li>
    </ul>
  </div>

}

const fixedTagsValue = (value?: BasicDataType | BasicDataType[]): string[] => {
  let rs: string[] = [];

  if (typeof value === 'string' || typeof value === 'number') {
    value = value.toString().trim();
    value.length && rs.push(value);
  }
  else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; ++i) {
      rs = rs.concat(fixedTagsValue(value[i]));
    }
  }

  return rs;
}

const renderTags = (tags: string[], remove: RemoveHandler, customTag?: CustomTagFunction) => {
  return tags.map((tag: string, index: number) => {
    if (customTag) return customTag(tag, index, remove);
    return <li key={index}>
      {tag}
      <IconClearCircle onClick={() => remove(index)} />
    </li>
  })
}

const getAttrs = (props: InputTagsProps) => {
  let { className, disabled } = props;
  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      className,
      {
        disabled
      }
    )
  }
}

export default React.forwardRef(InputTags);
