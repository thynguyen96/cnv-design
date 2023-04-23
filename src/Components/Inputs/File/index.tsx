import React, { HTMLAttributes } from 'react';
import Utils, { ExtendElementProps, ExtendElementRef } from '../../../Utils';
import './index.css';
import FileItem from './Item';

interface InputFileComponent extends React.ForwardRefRenderFunction<InputFileRef, InputFileProps> { }

export interface InputFileRef extends ExtendElementRef { }

export interface InputFileProps extends ExtendElementProps {
  draggable?: boolean,
  multiple?: boolean,
  multipleChoose?: boolean,
  disabled?: boolean,
  placeholder?: string,
}

const _wrapper = 'input-file-wrapper';
const _name = 'input-file';
const _draggable = 'draggable';
const _dragList = 'draggable-list';

const InputFile: InputFileComponent = (props, ref) => {

  const [ChoseFiles, setChoseFiles] = React.useState<File[]>([]);

  const fileRef = React.useRef<HTMLInputElement>(null);
  Utils.extendRef(ref, fileRef, {
    getValue: (): File | File[] => [...ChoseFiles]
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files || [];
    let newList = props.multipleChoose ? [...ChoseFiles] : [];

    for (let i = 0; i < files.length; ++i) {
      newList = [...newList, files[i]];
    }

    setChoseFiles([...newList]);

  }

  const onClickDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    Utils.isElement(fileRef.current) && fileRef.current.click();
  }

  const onRemove = (index: number) => {
    let newList = ChoseFiles.filter((_: File, i: number) => i !== index);
    setChoseFiles([...newList]);
  }

  return <div {...getAttrsWrapper(props, ChoseFiles.length)} {...{ 'cnv-multiple': props.multiple }} >
    <input ref={fileRef} {...getAttrsInput(props, onChange)} />
    {(
      () => {
        if (props.draggable) {
          return <div {...getAttrsDragList(props, onClickDrag)}>
            <span>{props.placeholder || 'Drop file here'}</span>
            {ChoseFiles.map((file: File, index: number) => {
              return <FileItem key={index} file={file} onClick={() => onRemove(index)} />
            })}
          </div>
        }

        return null;
      }
    )()}
  </div>

}

const getAttrsWrapper = (props: InputFileProps, numFile: number): HTMLAttributes<HTMLDivElement> => {
  let { className, id, css, draggable } = props;
  return {
    className: Utils.getClassNames(
      Utils.getName(_wrapper),
      {
        [_draggable]: draggable,
        'cnv-drop': numFile > 0
      },
      className
    ),
    id: id,
    style: css,
  }
}

const getAttrsInput = (props: InputFileProps, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void): React.InputHTMLAttributes<HTMLInputElement> => {
  let { className, multiple, draggable, id, css, ...others } = props;
  return {
    type: 'file',
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      'form-control',
      {
        disabled: props.disabled
      }
    ),
    multiple: multiple,
    onChange: onChange,
    ...others
  }
}

const getAttrsDragList = (props: InputFileProps, onClick: (e: React.MouseEvent<HTMLDivElement>) => void) => {
  return {
    className: Utils.getClassNames(
      Utils.getName(_dragList),
      _dragList
    ),
    onClick
  }
}

export default React.forwardRef(InputFile);