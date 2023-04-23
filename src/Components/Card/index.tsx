import React from 'react';
import Utils, { ExtendElementProps } from '../../Utils';
import CardBody from './Body';
import CardHeader from './Header';
import CardFooter from './Footer';

interface CardComponent extends React.FunctionComponent<CardProps> {
  Header: typeof CardHeader,
  Body: typeof CardBody,
  Footer: typeof CardFooter
}

export interface CardProps extends ExtendElementProps {
  variant?: string,
  fluid?: boolean,
}

const Card: CardComponent = props => {

  let {
    className = '',
    variant,
    fluid,
    css,
    ...others
  } = props;

  return <div
    className={
      Utils.getClassNames(
        'card',
        className,
        {
          ['card-' + variant]: variant,
          'card-fluid': fluid
        })}
    style={css}
    {...others}>
    {props.children}
  </div>

}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;