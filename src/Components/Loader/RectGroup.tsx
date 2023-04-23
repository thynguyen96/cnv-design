import React from 'react';
import { ElementLoaderProps } from './interface';
import RectangleLoader from './Rectangle';

interface RectGroupLoaderComponent extends React.FunctionComponent<RectGroupLoaderProps>{}

interface RectGroupLoaderProps extends ElementLoaderProps{
  count: number,
  width: number,
  height: number,
  r: number,
  distance: number,
  horizontal?: boolean
}

const RectGroupLoader: RectGroupLoaderComponent = props => {

  let { count, width, height, r, x, y, horizontal, distance } = props;

  return <React.Fragment>

    {(() => {
      let r = [];

      for (let i = 0; i < count; ++i){
        let ex = x, ey = y;

        if (horizontal){
          ex = x + i * (width + distance);
        }
        else{
          ey = y + i * (height + distance)
        }

        r.push(<RectangleLoader key={ i } width={ width } height={ height } x={ ex } y={ ey } />)
      }

      return r;
    })()}

  </React.Fragment>

}

export default RectGroupLoader;