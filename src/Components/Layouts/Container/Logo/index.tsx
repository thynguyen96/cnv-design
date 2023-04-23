import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import Utils from '../../../../Utils';

interface LogoComponent extends React.FunctionComponent<PropsWithChildren<LogoProps>> {
}

export interface LogoProps {
    path?: string,
    src?: string,
    srcSmall?: string,
    alt?: string,
    className?: string
}

export const Logo: LogoComponent = props => {
    let {src, srcSmall, className} = props;
    className = Utils.getClassNames(className, 'navbar-brand');

    return <Link to={props.path || ''} className={className} aria-label="Front">
        {(() => {
            if (src) {
                return <React.Fragment>
                    <img className="navbar-brand-logo" src={src} alt={props.alt || "Logo"}/>
                    {srcSmall ?
                        <img className="navbar-brand-logo-mini" src={srcSmall} alt={props.alt || "Logo"}/> : null}

                </React.Fragment>
            }

            return props.children;
        })()}
    </Link>
}