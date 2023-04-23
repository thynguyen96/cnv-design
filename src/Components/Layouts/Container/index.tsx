import React, { PropsWithChildren } from 'react';
import Header from './Header';
import { Logo } from './Logo';
import * as Navigation from './Navigation';
import OnLoad from '../../../Assets/Js/onload';
import Body from './Body';
import Breadcrumb from './Breadcrumb';

interface ContainerComponent extends React.FunctionComponent<PropsWithChildren<ContainerProps>> {
    Header: typeof Header,
    Logo: typeof Logo,
    Navigation?: typeof Navigation,
    Body: typeof Body,
    Breadcumb: typeof Breadcrumb
}

interface ContainerProps {
}

const Container: ContainerComponent = props => {

    return <React.Fragment>
        {props.children}
        <OnLoad/>
    </React.Fragment>
}

Container.Header = Header;
Container.Logo = Logo;
Container.Navigation = Navigation;
Container.Body = Body;
Container.Breadcumb = Breadcrumb;

export default Container;