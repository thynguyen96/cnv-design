import React from 'react';
import { IconClear, IconFile } from '../../../Icons';

interface FileItemComponent extends React.FunctionComponent<FileItemRef> { }

interface FileItemRef {
  file: File,
  onClick?(): void
}

const FileItem: FileItemComponent = props => {

  return <div className="cnv-file-input-item">
    {(
      () => {
        if (props.file.type.match(/^image\/.+/g)) {
          return <img src={URL.createObjectURL(props.file)} alt={props.file.name} />
        }

        return <IconFile />
      }

    )()}
    <IconClear onClick={props.onClick} />
  </div>

}

export default FileItem;