import React, { PropsWithChildren } from 'react';
import ContentLoader from 'react-content-loader';
import CircleLoader from './Circle';
import { __BG_COLOR, __speed, __BG } from './interface';
import RectangleLoader from './Rectangle';
import RectGroupLoader from './RectGroup';

interface LoaderComponent extends React.FunctionComponent<PropsWithChildren<LoaderProps>> {
    Rect: typeof RectangleLoader,
    Circle: typeof CircleLoader,
    RectGroup: typeof RectGroupLoader
}

interface LoaderProps {
    width?: number | string,
    height?: number | string,
}

const Loader: LoaderComponent = props => {

    let {width, height} = props;

    let width1 = +(width?.toString() || '100').replace(/[^\d]/g, '');
    let height1 = +(height?.toString() || '100').replace(/[^\d]/g, '');


    return <ContentLoader
        speed={__speed}
        width={width}
        height={height}
        backgroundColor={__BG}
        foregroundColor={__BG_COLOR}
        viewBox={`0 0 ${width1} ${height1}`}
        preserveAspectRatio="none"
    >
        {props.children}
    </ContentLoader>

}

Loader.Rect = RectangleLoader;
Loader.Circle = CircleLoader;
Loader.RectGroup = RectGroupLoader;

export default Loader;