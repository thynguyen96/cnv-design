import React from 'react';
import { initMenu } from './initMenu';
import { initAppends } from './initAppends';

declare global {
    interface Document {

    }
    interface Window {
        $: (element: HTMLElement | string) => {
            modal: (options: string) => void,
            on: (event: string, callback: (e: React.ChangeEvent) => void) => void,
            val: (value?: any) => any,
            click: (callback: () => void) => void,
            tooltip: (action: string | { boundary: string }) => void,
            hsSideNav: any,
            hasClass: (event: string) => boolean,
            init: () => void
        }
    }
    interface HTMLDivElement {

    }
}

interface OnLoadComponent extends React.FunctionComponent<OnLoadProps> {

}

interface OnLoadProps {

}

const OnLoad: OnLoadComponent = props => {

    document.getElementsByTagName('body')[0].classList.add('navbar-vertical-aside-show-xl');

    window.addEventListener('load', (event) => {

        initAppends()

        initMenu()
    });

    window.addEventListener('resize', () => {
        if (window.screen.width <= 1200) 
            document.body.classList.add('navbar-vertical-aside-closed-mode');
        else
            document.body.classList.remove('navbar-vertical-aside-closed-mode');
    });

    return null
}

export default OnLoad