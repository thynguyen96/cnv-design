import React from 'react';
import Utils, { ExtendElementProps } from '../../Utils';
import { Row } from '../Layouts/Grid/Row';

interface CardFooterComponent extends React.FunctionComponent<CardFooterProps>{}

export interface CardFooterProps extends ExtendElementProps{
  classRow?: string
}

const _name = 'card-footer';

const CardFooter: CardFooterComponent = props => {

  return <div { ...getAttrs(props) }>
    <Row className={ props.classRow || '' }>
      {props.children}
    </Row>
  </div>

}

const getAttrs = (props: CardFooterProps) => {
  let { className, css, classRow, ...others } = props;

  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      className
    ),
    style: css,
    ...others
  }
}

export default CardFooter