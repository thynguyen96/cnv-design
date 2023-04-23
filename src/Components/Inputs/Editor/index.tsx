import React from 'react';
import Quill from 'quill';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import './style.css';

type ValueSetterHandler = (value: string) => void
type ValueGetterHandler = () => string

export interface EditorRef {
    setValue: ValueSetterHandler;
    getValue: ValueGetterHandler;
}

interface EditorProps {
    inputKey?: string,
    value?: string,
    width?: string | number,
    height?: string | number,

    onChange?(value: string): void,

    onReady?(): void,

    disable?: boolean
}

interface EditorComponent extends React.ForwardRefRenderFunction<EditorRef, EditorProps> {
}

const Editor: EditorComponent = (props, ref) => {

    Quill.register(Quill.import('attributors/style/align'), true);
    Quill.register(Quill.import('attributors/style/background'), true);
    Quill.register(Quill.import('attributors/style/color'), true);
    Quill.register(Quill.import('attributors/style/direction'), true);
    Quill.register(Quill.import('attributors/style/font'), true);

    // Custom Size Style Inline
    const sizeStyle = Quill.import('attributors/style/size');
    sizeStyle.whitelist = ['10px', '11px', '12px', '13px', false, '15px', '16px', '17px', '18px', '19px', '20px', '21px', '22px', '23px', '24px', '25px', '26px', '27px', '28px', '29px', '30px', '31px', '32px', '33px', '34px', '35px', '36px', '37px', '38px', '39px', '40px', '41px', '42px', '43px', '44px', '45px', '46px', '47px', '48px', '49px', '50px'];
    Quill.register(sizeStyle, true);

    const {quill, quillRef} = useQuill({
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{'align': [false, 'center', 'right', 'justify']}],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                [{'size': sizeStyle.whitelist}],
                [{'header': [1, 2, 3, 4, 5, 6, false]}],
                ['link', 'image', 'video'],
                [{'color': []}, {'background': []}],
                ['clean']
            ],
        },
        scrollingContainer: 'html'
    })
    const {inputKey, width = '100%', height = '100%'} = props
    const quillBox = React.useRef<HTMLDivElement>(null)

    React.useImperativeHandle(ref, () => ({

        getValue: () => {

            return quill?.root.innerHTML ?? ''
        },
        setValue: (value: string) => {

            if (quill) {

                quill.clipboard.dangerouslyPasteHTML(value)
            }
        }
    }))

    React.useEffect(() => {

        if (quill) {

            const {value, onChange, onReady, disable} = props

            quill.clipboard.dangerouslyPasteHTML(value ?? '');

            quill.on('text-change', () => {

                if (onChange)
                    onChange(quill.root.innerHTML)
            })

            if (onReady)
                onReady()

            if (disable)
                quill.enable(false)
        }
    }, [quill])

    let wrapperCss: React.CSSProperties = {
        width: width
    }

    return <div ref={quillBox} style={wrapperCss}>
        <div key={inputKey} ref={quillRef} style={{minHeight: height}}/>
    </div>
}

export default React.forwardRef(Editor)