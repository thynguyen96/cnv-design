import React from 'react';
import Utils from '../../../../Utils';
import { Item, ItemProps } from './Item';

interface BreadcrumbComponent extends React.FunctionComponent<BreadcrumbProps> { }

export interface BreadcrumbProps {
  items: BreadcrumbItem[],
  className?: string
}

export interface BreadcrumbItem {
  action?: string,
  name: React.ReactNode | React.ReactElement
}

const Breadcrumb: BreadcrumbComponent = props => {
  let { items, className } = props;
  if (!items.length) return null;
  className = Utils.getClassNames(className);

  return <nav aria-label="breadcrumb" className={className}>
    <ol className="breadcrumb breadcrumb-no-gutter">
      {items.map((item: BreadcrumbItem, index: number) => {
        let p: ItemProps = { item, active: index === items.length };
        return <Item key={index} {...p} />
      })}
    </ol>
  </nav>
}

export default Breadcrumb;