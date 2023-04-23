import React from 'react';
import { ElementLoaderProps, __BG_COLOR } from './interface'

interface CircleLoaderConponent extends React.FunctionComponent<CircleLoaderProps>{}

interface CircleLoaderProps extends ElementLoaderProps{
  r: number
}

const CircleLoader: CircleLoaderConponent = props => {
  
  let { r, x, y } = props;
  if (r < 1) return null;

  return <circle cx={ x } cy={ y } r={ r } fill={ __BG_COLOR } />

}

export default CircleLoader;