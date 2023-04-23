import React from 'react';
import * as H from 'history';
import newGuid from './Guid';
import { configs } from '../configs';

export interface ExtendElementRef {
    [x: string]: any;

    getValue: () => string | null,
    setValue: (value: string) => void,
    setFocus: () => void,
    getBoundingClientRect: () => DOMRect | null,
};

export interface ExtendElementProps {
    [x: string]: any,

    className?: string,
    css?: React.CSSProperties,
    id?: string
}

const utils = {

    getName: (...args: any[]) => configs.prefix + '-' + args.join('-'),

    newGuid: newGuid,

    getClassNames: (...args: any[]) => {
        let result: string[] = []

        for (let i = 0; i < args.length; i++) {
            let item = args[i]
            const type = typeof item

            if (type === 'string' && item.length > 0)
                result.push(item)
            else if (type === 'object' && type !== null)
                for (const [key, value] of Object.entries(item))
                    if (value)
                        result.push(key)
        }

        return result.join(' ')
    },
    // todo
    goTo: (history: H.History, path: string) => {
        history.push(path)
    },

    openNewTab: (url: string) => {
        window.open(url, '_blank')
    },

    useDidMount: (didMount: () => void, didUnmount?: () => void, deps: React.DependencyList = []) => {

        React.useEffect(() => {

            if (didMount)
                didMount()

            return () => {

                if (didUnmount)
                    didUnmount()
            }
        }, deps)
    },
    useEvent: (event: string, callback: (e: Event) => void) => {

        const [eventCalled,] = React.useState(false)

        React.useEffect(() => {

            window.addEventListener(event, e => callback(e), false)

            return () => {

                window.removeEventListener(event, e => callback(e), false)
            }
        }, [])

        return eventCalled
    },
    useDebounce: (value: any, delay: number = 800) => {

        const [debouncedValue, setDebouncedValue] = React.useState(value)

        React.useEffect(
            () => {

                const handler = setTimeout(() => {
                    setDebouncedValue(value);
                }, delay)

                return () => {
                    clearTimeout(handler)
                }
            },
            [value, delay]
        )

        return debouncedValue
    },

    isElement: (e: any): e is Element => e instanceof Element,

    isNode: (e: any): e is Node => e instanceof Node,

    extendRef: (ref: ((instance: any | null) => void) | React.MutableRefObject<any | null> | null, elementRef: React.RefObject<any>, options?: object): void => {

        let extendObject: ExtendElementRef = {

            getValue: (): string | null => elementRef.current.value ? elementRef.current.value : null,

            setValue: (value: string) => elementRef.current && (elementRef.current.value = value),

            setFocus: () => elementRef.current && typeof elementRef.current.focus === 'function' && elementRef.current.focus(),

            getBoundingClientRect: () => elementRef.current && typeof elementRef.current.getBoundingClientRect === 'function' ? elementRef.current.getBoundingClientRect() : null

        };

        Object.assign(extendObject, options);
        // todo
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useImperativeHandle(ref, (): ExtendElementRef => extendObject);
    },

    nameSplit: (name: string, fallback?: string): { lastName: string | undefined, firstName: string | undefined } => {

        let lastName: string | undefined = undefined,
            firstName: string | undefined = undefined

        if (name)
            name = name.trim()

        if (name) {

            let splits = name.split(' ')

            lastName = splits[0]

            if (splits.length > 0) {

                firstName = ''

                let firstNames = []

                for (let i = 1; i < splits.length; i++)
                    firstNames.push(splits[i]);

                if (firstNames.length > 0)
                    firstName = firstNames.join(' ')

                if (!lastName && firstName)
                    lastName = ''
            }

            if (!firstName && lastName)
                firstName = ''
        }

        if (!lastName && !firstName)
            if (fallback) {
                lastName = fallback
                firstName = fallback
            }

        return {lastName: lastName, firstName: firstName}
    },
    nameMerge: (lastName: string | undefined, firstName: string | undefined): string => {

        if (lastName)
            lastName = lastName.trim()

        if (firstName)
            firstName = firstName.trim()

        let name = lastName + ' ' + firstName

        name = name.trim()

        return name
    }
}

const Utils = utils

export default Utils