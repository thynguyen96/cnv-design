import React from 'react';
import Portal from '../../Portal';

interface ModalBackdropComponent extends React.FunctionComponent<ModalBackdropProps>{}

interface ModalBackdropProps{
  show?: boolean
}

const ModalBackdrop: ModalBackdropComponent = props => {

  const [ isShow, setIsShow ] = React.useState(false);

  React.useEffect(
    () => {
      if (props.show){
        document.getElementsByTagName('body')[0].classList.add('modal-open');
        setIsShow(true);
        // setTimeout(() => setIsShow(props.show || false), 300);
      }
      else{

      }
    }
  );

  if (!props.show) return null;

  return <Portal>
    <div className={ `modal-backdrop fade ${ isShow ? 'show' : '' }` }></div>
  </Portal>

}

export default ModalBackdrop;