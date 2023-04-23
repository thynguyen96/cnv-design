import React from 'react';
import { ElementLoaderProps, __BG_COLOR, __rr } from './interface';

interface RectangleLoaderComponent extends React.FunctionComponent<RectangleLoaderProps>{}

interface RectangleLoaderProps extends ElementLoaderProps{
  width: number,
  height: number,
  r?: number
}

const RectangleLoader: RectangleLoaderComponent = props => {
  
  let { width, height, x, y, r = __rr } = props;

  return <rect x={ x } y={ y } width={ width } height={ height } rx={ r } ry={ r } fill={ __BG_COLOR } />

}

export default RectangleLoader;