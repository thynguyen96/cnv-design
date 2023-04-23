import React from 'react';
import Utils, { ExtendElementRef, ExtendElementProps } from '../../Utils';

const _name = 'form';

interface FormContainerComponent extends React.ForwardRefRenderFunction<FormContainerRef, FormContainerProps> {

}

export interface FormContainerRef extends ExtendElementRef { }

export interface FormContainerProps extends ExtendElementProps {
    method?: string,
    action?: string,
    onSubmit?(e: React.FormEvent): void,
    children?: React.ReactNode | React.ReactElement
}

const FormContainer: FormContainerComponent = (props, ref) => {

    const FormContainerRef = React.useRef<HTMLFormElement>(null);

    Utils.extendRef(ref, FormContainerRef);

    return <form ref={FormContainerRef} {...getAttrs(props)}>{props.children}</form>

}

const getAttrs = (props: FormContainerProps): React.FormHTMLAttributes<HTMLFormElement> => {
    let { method = 'GET', action, className, onSubmit } = props;

    return {
        method,
        action,
        className: Utils.getClassNames(Utils.getName(_name), className),
        onSubmit
    };
}

export default React.forwardRef(FormContainer);