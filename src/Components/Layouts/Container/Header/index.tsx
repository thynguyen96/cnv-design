import React from 'react';
import { Logo } from '../Logo';
import * as Form from '../../../Form';
import InputGroup from '../../../InputGroup';
import * as Inputs from '../../../Inputs';
import { IconClear, IconFirstPage, IconLastPage, IconSearch } from '../../../../Icons';
import Utils from '../../../../Utils';

interface HeaderComponent extends React.FunctionComponent<HeaderProps> { }

interface HeaderProps {
  logo?: {
    src?: string,
    srcSmall?: string,
    alt?: string,
    path?: string
  }
  className?: string,
  searchBar?: boolean,
  right?: React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[],
  hasToggleMenu?: boolean;
}

const Header: HeaderComponent = props => {

  let { className, hasToggleMenu = false } = props;
  className = Utils.getClassNames(className, 'navbar navbar-expand-lg navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered');

  return <header id="header" className={className}>
    <div className="navbar-nav-wrap">
      <div className="navbar-brand-wrapper">

        <Logo {...props.logo} />

      </div>

      <div className="navbar-nav-wrap-content-left">
        {hasToggleMenu &&
          <Inputs.Button className="js-navbar-vertical-aside-toggle-invoker close mr-3">
            <IconFirstPage className="navbar-vertical-aside-toggle-short-align" data-toggle="tooltip" data-placement="right" title="Collapse" />
            <IconLastPage className="navbar-vertical-aside-toggle-full-align" data-template='<div className="tooltip d-none d-sm-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-toggle="tooltip" data-placement="right" title="Expand" />
          </Inputs.Button>}
        {props.searchBar &&
          <div className="d-none d-md-block">
            <Form.Container className="position-relative">
              <InputGroup merge borderless hoverLight navbar>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <IconSearch />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Control
                  type="search"
                  className="js-form-search"
                  placeholder="Search in front"
                  aria-label="Search in front"
                  data-hs-form-search-options='{
                    "clearIcon": "#clearSearchResultsIcon",
                    "dropMenuElement": "#searchDropdownMenu",
                    "dropMenuOffset": 20,
                    "toggleIconOnFocus": true,
                    "activeClass": "focus"
                  }'
                />
                <InputGroup.Append link>
                  <InputGroup.Text inline>
                    <IconClear id="clearSearchResultsIcon" style={{ display: 'none' }} />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

            </Form.Container>
          </div>}
      </div>

      {props.right
        && <div className="navbar-nav-wrap-content-right">{props.right}</div>}

    </div>
  </header>

}

export default Header;