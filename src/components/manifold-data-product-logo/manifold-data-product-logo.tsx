import { Component, Prop, State, Element } from '@stencil/core';
import Tunnel from '../../data/connection';
import { withAuth } from '../../utils/auth';
import { Connection, connections } from '../../utils/connections';

@Component({ tag: 'manifold-data-product-logo' })
export class ManifoldDataProductLogo {
  @Element() el: HTMLElement;
  /** _(optional)_ `alt` attribute */
  @Prop() alt?: string;
  /** _(hidden)_ Passed by `<manifold-connection>` */
  @Prop() connection: Connection = connections.prod; // Provided by manifold-connection
  /** URL-friendly slug (e.g. `"jawsdb-mysql"`) */
  @Prop() productLabel?: string;
  @Prop() resourceName?: string;
  @State() product?: Catalog.ExpandedProduct;

  async componentWillLoad() {
    const { catalog, gateway } = this.connection;

    if (this.resourceName) {
      const resourceResp = await fetch(`${gateway}/resource/${this.resourceName}`, withAuth());
      const resource: Gateway.Resource = await resourceResp.json();
      const productResp = await fetch(
        `${catalog}/products/${resource.product && resource.product.id}`,
        withAuth()
      );
      this.product = await productResp.json();
      return;
    }

    const response = await fetch(`${catalog}/products?label=${this.productLabel}`, withAuth());
    const [product]: Catalog.ExpandedProduct[] = await response.json();
    this.product = product;
  }

  render() {
    return this.product ? <img src={this.product.body.logo_url} alt={this.alt || this.product.body.name} /> : <slot />
  }

}

Tunnel.injectProps(ManifoldDataProductLogo, ['connection']);
