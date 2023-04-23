export const initAppends = () => {

    appendCss('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&amp;display=swap')

}

const appendCss = (href: string) => {

    let link = document.createElement('link')
    link.href = href
    link.rel = 'stylesheet'

    displayedHead(
        head => head.appendChild(link))

}

const displayedHead = (successCallback: (head: HTMLHeadElement) => void) => {

    let heads = document.getElementsByTagName('head')

    if (!heads?.item || heads.item.length == 0) {

        setTimeout(() => displayedHead(successCallback), 200)

        return
    }

    let item = heads.item(0)

    if (item)
        successCallback(item)

}