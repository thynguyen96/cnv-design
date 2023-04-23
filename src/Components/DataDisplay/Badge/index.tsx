import React from 'react';
import Utils from '../../../Utils';

export type BadgeTypes =
    'primary'
    | 'secondary'
    | 'light'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'

interface BadgeProps {
    type: BadgeTypes,
    soft?: boolean,
    pill?: boolean,
    title: string | undefined
}

const Badge = (props: BadgeProps) => {

    const { type, soft, pill, title } = props

    return <span className={Utils.getClassNames(
        'badge',
        {
            'badge-pill': pill,
            ['badge-' + type]: !soft,
            ['badge-soft-' + type]: soft
        })}>{title}</span>
}

export default Badge