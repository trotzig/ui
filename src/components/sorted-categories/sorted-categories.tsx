import { Component, Prop } from '@stencil/core';

import Tunnel, { State } from '../../data/marketplace';
import { themeIcons } from '../../assets/icons';
import { categories, formatCategoryLabel } from '../service-grid/utils';

@Component({ tag: 'sorted-categories', shadow: true })
export class Categories {
  @Prop() observeCategory: (el?: HTMLElement) => void;

  render() {
    return (
      <Tunnel.Consumer>
        {(state: State) => {
          const categoryMap = categories(state.services);
          const sortedCategories = Object.keys(categoryMap).sort((a, b) => a.localeCompare(b));
          return (
            <div>
              {sortedCategories.map(tag => (
                <service-category
                  services={categoryMap[tag]}
                  observeCategory={this.observeCategory}
                  label={formatCategoryLabel(tag)}
                  category={tag}
                  icon={themeIcons[tag]}
                  featured={state.featured}
                  serviceLink={state.serviceLink}
                >
                  <service-card
                    description={`Add your own ${formatCategoryLabel(tag)} service`}
                    label={'bring-your-own'}
                    logo={themeIcons[tag]}
                    name={`Bring your own ${formatCategoryLabel(tag)} service`}
                    is-custom={true}
                    is-featured={false}
                  />
                </service-category>
              ))}
            </div>
          );
        }}
      </Tunnel.Consumer>
    );
  }
}
