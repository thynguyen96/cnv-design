import Utils from '../../Utils';

const _nameMenu = 'menu';
const _nameMenuGroup = 'menu-item-group';

export const initMenu = () => {

    let menu = document.getElementsByClassName(Utils.getName('menu'))

    if (menu.length) {

        Array.from(menu[0].getElementsByClassName('nav-link')).map(navlink => {

            let action = navlink.getAttribute('href')

            if (!action)
                return

            let { pathname, hash } = window.location

            let currentPath = pathname + (hash || '/');

            action.startsWith('/') || (action = '/' + action);
            action.indexOf('#') === -1 && (action += hash ? '#' : '/')

            let parent = navlink.parentElement

            if (!Utils.isElement(parent)
                || parent.classList.contains(Utils.getName(_nameMenu)))
                return

            if (currentPath.indexOf(action) === 0) {

                parent.classList.add('show')
                navlink.classList.add('active')

                let group = navlink.nextElementSibling;
                if (
                    !Utils.isElement(group)
                    || !group.classList.contains(Utils.getName(_nameMenuGroup))
                    || !group.childElementCount)
                    return

                // group.setAttribute('style', 'display: block');

                let firstChild = group.firstElementChild
                let maxHeight = (
                    (firstChild ? firstChild.clientHeight : 0) + 1) * group.childElementCount

                group.setAttribute('style', 'max-height:' + maxHeight + 'px!important')

            } else {

                if (parent.classList.contains('show'))
                    parent.classList.remove('show')

                if (navlink.classList.contains('active'))
                    navlink.classList.remove('active')

                let group = navlink.nextElementSibling

                if (Utils.isElement(group))
                    group.setAttribute('style', 'max-height:0!important')

            }
        })
    }
}