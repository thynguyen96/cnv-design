import React, { PropsWithChildren } from 'react';
import Utils from '../../../Utils';

interface FormLabelComponent extends React.FunctionComponent<PropsWithChildren<FormLabelProps>> {
}

export interface FormLabelProps {
    className?: string,
    mapId?: string
}

const _name = 'input-label';

const FormLabel: FormLabelComponent = props => {

    return <label {...getAttrs(props)}>{props.children}</label>

}

const getAttrs = (props: FormLabelProps) => {
    let {className = '', mapId} = props;
    return {
        className: Utils.getClassNames(
            Utils.getName(_name),
            _name,
            className
        ),
        htmlFor: mapId
    }
}

export default FormLabel;