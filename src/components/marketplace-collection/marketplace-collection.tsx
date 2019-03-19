import { Component, Prop } from '@stencil/core';

import { Service } from 'types/Service';

import Tunnel, { State } from '../../data/marketplace';

@Component({ tag: 'marketplace-collection' })
export class Collection {
  @Prop() name: string;
  @Prop() tagline: string;
  @Prop() icon?: string;
  @Prop() labels: string;

  render() {
    return (
      <Tunnel.Consumer>
        {(state: State) => (
          <service-category
            services={state.services.filter((s: Service) => this.labels.includes(s.body.label))}
            label={this.name}
            category={`collection-${this.name.replace(/\s/g, '-').toLowerCase()}`}
            icon={this.icon}
            featured={state.featured}
            serviceLink={state.serviceLink}
            tagline={this.tagline}
          />
        )}
      </Tunnel.Consumer>
    );
  }
}
