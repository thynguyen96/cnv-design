import * as React from 'react';
import Utils from '../../Utils';
import './index.css';

interface SVGIconProps {
    href: string,
    className?: string,
    size?: number,
    rotate?: number,
    style?: React.CSSProperties
}

const SVGIcon = (props: SVGIconProps) => {

    const { href } = props

    if (!href)
        return null

    const { className, rotate, style } = props
    let { size } = props

    if (!size)
        size = 12

    return <svg
        className={Utils.getClassNames(
            'svg-icon',
            {
                [className || '']: className,
                ['svg-icon-size-' + size]: size,
                ['svg-icon-rotate-' + rotate]: rotate,
            })}
        style={style}>
        <use xmlnsXlink='http://www.w3.org/1999/xlink' xlinkHref={href} />
    </svg>
}

export default SVGIcon