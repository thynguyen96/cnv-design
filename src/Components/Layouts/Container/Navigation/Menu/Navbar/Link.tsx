import React from 'react';
import { Link } from 'react-router-dom';
import { IconBase, IconCircle } from '../../../../../../Icons';
import Utils from '../../../../../../Utils';

export interface NavbarLinkProps{
  action?: string,
  icon?: IconBase,
  className?: string,
  name: string
}

const _name = 'menu-item-link';

const setActive = (navlink: HTMLAnchorElement) => {

}

const setInactive = (navlink: HTMLAnchorElement) => {

}

export const NavbarLink: React.FunctionComponent<NavbarLinkProps> = props => {

  const linkRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (Utils.isElement(linkRef.current)){
      linkRef.current.addEventListener('click', () => {
        let isActive = linkRef.current?.classList.contains('active');

        Array.from(linkRef.current?.parentElement?.parentElement?.getElementsByClassName(Utils.getName(_name)) || [])
        .map(navlink => {
          navlink.classList.contains('active') && navlink.classList.remove('active');
          navlink.parentElement?.classList.remove('show');
          navlink.nextElementSibling?.setAttribute('style', 'display:none;max-height:0!important');
        });

        let next = linkRef.current?.nextElementSibling;

        if (Utils.isElement(next) && next.childElementCount){
          let parent = linkRef.current?.parentElement;

          if (!Utils.isElement(parent)) return;

          if (isActive){
            parent.classList.remove('show');
            next.setAttribute('style', 'max-height:0!important');
            linkRef.current?.classList.remove('active');
          }
          else{
            // next.setAttribute('style', 'display: block');
            
            let firstChild = next.firstElementChild;
            let maxHeight = ((firstChild ? firstChild.clientHeight : 0) + 1) * next.childElementCount;

            next.setAttribute('style', 'max-height:' + maxHeight + 'px!important');
            parent.classList.add('show');
            linkRef.current?.classList.add('active');
          }
          
          return;
        }
      });
    }
  }, [ linkRef ])

  let { name } = props;
  return <Link ref={ linkRef } { ...getAttrs(props) }>
    {(() => {
      if (props.icon){
        return <props.icon className="nav-icon" />
      }
      else{
        return <IconCircle className="nav-indicator-icon" />
      }
    })()}
    <span className="text-truncate">{ name }</span>
  </Link>
}

const getAttrs = (props: NavbarLinkProps) => {
  let { className = '', action = '', name } = props;
  return {
    className: Utils.getClassNames(
      Utils.getName(_name),
      'nav-link',
      className
    ),
    to: action,
    title: name
  }
}