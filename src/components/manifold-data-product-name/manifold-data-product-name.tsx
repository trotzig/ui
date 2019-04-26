import { Component, Prop, State, Element } from '@stencil/core';
import Tunnel from '../../data/connection';
import { withAuth } from '../../utils/auth';
import { Connection, connections } from '../../utils/connections';

@Component({ tag: 'manifold-data-product-name' })
export class ManifoldDataProductName {
  @Element() el: HTMLElement;
  /** _(hidden)_ Passed by `<manifold-connection>` */
  @Prop() connection: Connection = connections.prod; // Provided by manifold-connection
  /** URL-friendly slug (e.g. `"jawsdb-mysql"`) */
  @Prop() productLabel: string;
  @State() product?: Catalog.ExpandedProduct;

  componentWillLoad() {
    // Don’t return this promise to invoke the loading state
    fetch(`${this.connection.catalog}/products?label=${this.productLabel}`, withAuth())
      .then(response => response.json())
      .then((products: Catalog.ExpandedProduct[]) => {
        this.product = products[0]; // eslint-disable-line prefer-destructuring
      });
  }

  render() {
    return this.product ? this.product.body.name : <slot />
  }

}

Tunnel.injectProps(ManifoldDataProductName, ['connection']);
