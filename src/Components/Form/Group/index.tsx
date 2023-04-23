import React, { PropsWithChildren } from 'react';
import Utils from '../../../Utils';

const _name = 'form-group';

interface FormGroupComponent extends React.FunctionComponent<PropsWithChildren<FormGroupProps>> {
}

export interface FormGroupProps {
    className?: string
}

const FormGroup: FormGroupComponent = props => {

    return <div {...getAttrs(props)}>{props.children}</div>

}

const getAttrs = (props: FormGroupProps) => {
    return {
        className: Utils.getClassNames(Utils.getName(_name), 'form-group', props.className)
    }
}

export default FormGroup;