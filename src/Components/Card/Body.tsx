import React from 'react';
import Utils, { ExtendElementProps } from '../../Utils';

interface CardBodyComponent extends React.FunctionComponent<CardBodyProps> { }

export interface CardBodyProps extends ExtendElementProps { }

const _name = 'card-body';

const CardBody: CardBodyComponent = props => {

  return <div {...getAttrs(props)}></div>

}

const getAttrs = (props: CardBodyProps) => {

  let { className, id, css, ...others } = props;

  return {
    className: Utils.getClassNames(
      _name,
      className
    ),
    id,
    style: css,
    ...others
  }

}

export default CardBody;