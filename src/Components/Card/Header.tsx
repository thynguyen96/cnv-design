import React from 'react';
import { Row } from '../Layouts/Grid/Row';
import Utils, { ExtendElementProps } from '../../Utils';

const _name = "card-header";

interface CardHeaderComponent extends React.FunctionComponent<CardHeaderProps> { }

export interface CardHeaderProps extends ExtendElementProps {
  classRow?: string
}

const CardHeader: CardHeaderComponent = props => {

  return <div {...getAttrs(props)}>
    <Row className={props.classRow || ''}>
      {props.children}
    </Row>
  </div>

}

const getAttrs = (props: CardHeaderProps) => {
  let { className, css, classRow, ...others } = props;

  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      _name,
      className
    ),
    style: css,
    ...others
  };
}

export default CardHeader;