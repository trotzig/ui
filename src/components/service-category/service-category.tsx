import { Component, Prop } from '@stencil/core';
import { Service } from 'types/Service';

@Component({ tag: 'service-category', shadow: true, styleUrl: 'service-category.css' })
export class Categories {
  @Prop() observeCategory?: (el?: HTMLElement) => void;
  @Prop() services: Service[];
  @Prop() category: string;
  @Prop() label: string;
  @Prop() tagline?: string;
  @Prop() icon?: string;
  @Prop() featured?: string;
  @Prop() serviceLink?: string;

  hostData() {
    return { id: `category-${this.category}` };
  }

  render() {
    return (
      <div class="category-container">
        <h3 class="category" ref={this.observeCategory}>
          {this.icon && <mf-icon icon={this.icon} marginRight />}
          {this.label}
          {this.tagline && <p class="tagline">{this.tagline}</p>}
        </h3>
        <marketplace-results
          services={this.services}
          featured={this.featured}
          service-link={this.serviceLink}
        >
          <div slot="custom-card">
            <slot />
          </div>
        </marketplace-results>
      </div>
    );
  }
}
