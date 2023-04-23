
import React from 'react';
import Utils from '../../../Utils';
import Option from './Option';

interface SelectDropdownComponent extends React.FunctionComponent<SelectDropdownProps> {

}

const _name = 'select-dropdown'

interface SelectDropdownProps {
    parentRect: DOMRect | null,
    isDropdowning: boolean,
    options: React.ReactComponentElement<typeof Option>[],
    indexOption?: number
}
const SelectDropdown: SelectDropdownComponent = props => {

    let attrs = getAttrs(props)

    if (attrs) {

        let { options } = props

        return <div {...attrs}>
            {options}
        </div>

        // return <Portal>
        //     <div {...attrs}>
        //         {options}
        //     </div>
        // </Portal>
    }

    return null
}

const getAttrs = (props: SelectDropdownProps): React.HTMLAttributes<HTMLDivElement> | null => {

    let { isDropdowning, indexOption = 3 } = props;
    indexOption < 0 && (indexOption = 3);

    if (isDropdowning){

        // let rectTop = parentRect.y + parentRect.height + 5
        // let rectLeft = parentRect.x
        // let rectWidth = parentRect.width

        return {
            className: Utils.getClassNames(
                Utils.getName(_name),
                {
                    'hide': !isDropdowning
                }),
                style: {
                    zIndex: indexOption
                }
            // style: {
            //     top: rectTop,
            //     left: rectLeft,
            //     width: rectWidth
            // }
        }
    }

    return null
}

export default SelectDropdown