/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { JSX } from '@stencil/core';
import {
  Connection,
} from './utils/connections';
import {
  ResourceState,
} from './data/resource';
import {
  Option,
} from 'types/Select';


export namespace Components {
  interface ManifoldActivePlan {
    isExistingResource?: boolean;
    plans?: Catalog.ExpandedPlan[];
    product?: Catalog.Product;
    regions?: string[];
    selectedResource?: Gateway.Resource;
  }
  interface ManifoldBadge {}
  interface ManifoldButton {
    'color'?: 'black' | 'white';
    'disabled': boolean;
    'onClickEvent'?: (e: MouseEvent) => void;
    'size'?: 'small';
  }
  interface ManifoldConnection {
    /**
     * _(optional)_ Specify `env="stage"` for staging
     */
    env: 'stage' | 'prod';
  }
  interface ManifoldCostDisplay {
    baseCost?: number;
    compact?: boolean;
    isCustomizable?: boolean;
    measuredFeatures: Catalog.ExpandedFeature[];
  }
  interface ManifoldDataManageButton {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    features: Gateway.FeatureMap;
    planId: string;
    productId: string;
    regionId?: string;
    /**
     * Name of resource
     */
    resourceName: string;
  }
  interface ManifoldDataProductLogo {
    /**
     * _(optional)_ `alt` attribute
     */
    alt?: string;
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    /**
     * URL-friendly slug (e.g. `"jawsdb-mysql"`)
     */
    productLabel?: string;
    /**
     * Look up product name from resource
     */
    resourceName?: string;
  }
  interface ManifoldDataProductName {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    /**
     * URL-friendly slug (e.g. `"jawsdb-mysql"`)
     */
    productLabel?: string;
    /**
     * Look up product name from resource
     */
    resourceName?: string;
  }
  interface ManifoldDataProvisionButton {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    features: Gateway.FeatureMap;
    /**
     * ID of input (useful for `<label>`)
     */
    inputId: string;
    ownerId: string;
    planId: string;
    productId: string;
    /**
     * Product to provision (slug)
     */
    productLabel: string;
    regionId?: string;
  }
  interface ManifoldDataResourceList {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    /**
     * Link format structure, with `:resource` placeholder
     */
    linkFormat?: string;
    /**
     * Disable auto-updates?
     */
    paused: boolean;
    /**
     * Should the JS event still fire, even if link-format is passed?
     */
    preserveEvent: boolean;
  }
  interface ManifoldForwardSlot {}
  interface ManifoldIcon {
    /**
     * a CSS variable starting with `--manifold-c-*`
     */
    color: string;
    /**
     * a CSS variable starting with `--manifold-g-*`
     */
    gradient?: string;
    /**
     * The icon ID
     */
    icon: string;
    marginLeft: boolean;
    marginRight: boolean;
  }
  interface ManifoldImageGallery {
    images?: string[];
  }
  interface ManifoldLazyImage {
    alt: string;
    itemprop: string;
    src: string;
  }
  interface ManifoldMarketplace {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    /**
     * Comma-separated list of hidden products (labels)
     */
    excludes?: string;
    /**
     * Comma-separated list of featured products (labels)
     */
    featured?: string;
    /**
     * Hide categories & side menu?
     */
    hideCategories?: boolean;
    /**
     * Hide template cards?
     */
    hideTemplates?: boolean;
    /**
     * Link format structure, with `:product` placeholder
     */
    linkFormat?: string;
    /**
     * Should the JS event still fire, even if link-format is passed?
     */
    preserveEvent: boolean;
    /**
     * Comma-separated list of shown products (labels)
     */
    products?: string;
  }
  interface ManifoldMarketplaceGrid {
    excludes?: string[];
    featured?: string[];
    hideCategories?: boolean;
    hideTemplates?: boolean;
    linkFormat?: string;
    preserveEvent: boolean;
    products?: string[];
    services?: Catalog.Product[];
  }
  interface ManifoldNumberInput {
    decrementDisabledLabel?: string;
    error?: string;
    increment: number;
    incrementDisabledLabel?: string;
    max: number;
    min: number;
    name: string;
    suffix: string;
    value: number;
  }
  interface ManifoldPlanCost {
    allFeatures: Catalog.ExpandedFeature[];
    compact?: boolean;
    connection: Connection;
    customizable?: boolean;
    planId: string;
    selectedFeatures: Gateway.FeatureMap;
  }
  interface ManifoldPlanDetails {
    isExistingResource?: boolean;
    plan?: Catalog.ExpandedPlan;
    product?: Catalog.Product;
    regions?: string[];
    resourceFeatures?: Gateway.ResolvedFeature[];
    resourceRegion?: string;
  }
  interface ManifoldPlanMenu {
    plans?: Catalog.ExpandedPlan[];
    selectPlan: Function;
    selectedPlanId?: string;
  }
  interface ManifoldPlanSelector {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    /**
     * URL-friendly slug (e.g. `"jawsdb-mysql"`)
     */
    productLabel?: string;
    /**
     * Specify region order
     */
    regions?: string;
    /**
     * Is this tied to an existing resource?
     */
    resourceName?: string;
  }
  interface ManifoldProduct {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    /**
     * _(optional)_ Hide the CTA on the left?
     */
    productLabel: string;
  }
  interface ManifoldProductDetails {
    product?: Catalog.Product;
  }
  interface ManifoldProductPage {
    product?: Catalog.Product;
    provider?: Catalog.Provider;
  }
  interface ManifoldRegionSelector {
    allowedRegions: string[];
    ariaLabel: string;
    connection: Connection;
    name: string;
    preferredRegions?: string[];
    value?: string;
  }
  interface ManifoldResourceContainer {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    /**
    * Which resource does this belong to?
    */
    'resourceLabel': string;
  }
  interface ManifoldResourceCredentials {
    /**
    * _(hidden)_ Passed by `<manifold-connection>`
    */
    'connection': Connection;
  }
  interface ManifoldResourceCredentialsView {
    'credentials'?: Marketplace.Credential[];
    'resourceState': ResourceState;
  }
  interface ManifoldResourceDetails {}
  interface ManifoldResourceDetailsView {
    'data'?: Gateway.Resource;
  }
  interface ManifoldResourceStatus {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection: Connection;
    /**
     * Resource name for this status
     */
    resourceName?: string;
  }
  interface ManifoldSelect {
    defaultValue?: string;
    name: string;
    options: Option[];
    required?: boolean;
  }
  interface ManifoldServiceCard {
    connection: Connection;
    description?: string;
    isFeatured?: boolean;
    label?: string;
    linkFormat?: string;
    logo?: string;
    name?: string;
    preserveEvent: boolean;
    productId?: string;
    skeleton: boolean;
  }
  interface ManifoldSkeletonImg {}
  interface ManifoldSkeletonText {}
  interface ManifoldTemplateCard {
    category: string;
    linkFormat?: string;
    preserveEvent: boolean;
  }
  interface ManifoldToastText {
    /**
     * `success` | `warning` | `error`
     */
    alertType?: 'success' | 'warning' | 'error' | undefined;
    dismissable?: boolean;
    /**
     * Use custom icon path data (1024×1024)
     */
    icon?: string;
    text: string;
  }
  interface ManifoldToast {
    /**
     * `success` | `warning` | `error`
     */
    alertType?: 'success' | 'warning' | 'error' | undefined;
    /**
     * Is this dismissable?
     */
    dismissable?: boolean;
    /**
     * Use custom icon path data (1024×1024)
     */
    icon?: string;
  }
  interface ManifoldToggle {
    ariaLabelledby?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    label?: string;
    name: string;
  }
  interface ManifoldTooltip {
    labelText?: string;
  }
}

declare namespace LocalJSX {
  interface ManifoldActivePlan extends JSXBase.HTMLAttributes {
    isExistingResource?: boolean;
    plans?: Catalog.ExpandedPlan[];
    product?: Catalog.Product;
    regions?: string[];
    selectedResource?: Gateway.Resource;
  }
  interface ManifoldBadge extends JSXBase.HTMLAttributes {}
  interface ManifoldButton extends JSXBase.HTMLAttributes {
    'color'?: 'black' | 'white';
    'disabled'?: boolean;
    'onClickEvent'?: (e: MouseEvent) => void;
    'size'?: 'small';
  }
  interface ManifoldConnection extends JSXBase.HTMLAttributes {
    /**
     * _(optional)_ Specify `env="stage"` for staging
     */
    env?: 'stage' | 'prod';
  }
  interface ManifoldCostDisplay extends JSXBase.HTMLAttributes {
    baseCost?: number;
    compact?: boolean;
    isCustomizable?: boolean;
    measuredFeatures?: Catalog.ExpandedFeature[];
  }
  interface ManifoldDataManageButton extends JSXBase.HTMLAttributes {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    features?: Gateway.FeatureMap;
    'onManifold-manageButton-click'?: (event: CustomEvent<any>) => void;
    'onManifold-manageButton-error'?: (event: CustomEvent<any>) => void;
    'onManifold-manageButton-success'?: (event: CustomEvent<any>) => void;
    planId?: string;
    productId?: string;
    regionId?: string;
    /**
     * Name of resource
     */
    resourceName?: string;
  }
  interface ManifoldDataProductLogo extends JSXBase.HTMLAttributes {
    /**
     * _(optional)_ `alt` attribute
     */
    alt?: string;
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    /**
     * URL-friendly slug (e.g. `"jawsdb-mysql"`)
     */
    productLabel?: string;
    /**
     * Look up product name from resource
     */
    resourceName?: string;
  }
  interface ManifoldDataProductName extends JSXBase.HTMLAttributes {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    /**
     * URL-friendly slug (e.g. `"jawsdb-mysql"`)
     */
    productLabel?: string;
    /**
     * Look up product name from resource
     */
    resourceName?: string;
  }
  interface ManifoldDataProvisionButton extends JSXBase.HTMLAttributes {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    features?: Gateway.FeatureMap;
    /**
     * ID of input (useful for `<label>`)
     */
    inputId?: string;
    'onManifold-provisionButton-click'?: (event: CustomEvent<any>) => void;
    'onManifold-provisionButton-error'?: (event: CustomEvent<any>) => void;
    'onManifold-provisionButton-invalid'?: (event: CustomEvent<any>) => void;
    'onManifold-provisionButton-success'?: (event: CustomEvent<any>) => void;
    ownerId?: string;
    planId?: string;
    productId?: string;
    /**
     * Product to provision (slug)
     */
    productLabel?: string;
    regionId?: string;
  }
  interface ManifoldDataResourceList extends JSXBase.HTMLAttributes {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    /**
     * Link format structure, with `:resource` placeholder
     */
    linkFormat?: string;
    'onManifold-resourceList-click'?: (event: CustomEvent<any>) => void;
    /**
     * Disable auto-updates?
     */
    paused?: boolean;
    /**
     * Should the JS event still fire, even if link-format is passed?
     */
    preserveEvent?: boolean;
  }
  interface ManifoldForwardSlot extends JSXBase.HTMLAttributes {}
  interface ManifoldIcon extends JSXBase.HTMLAttributes {
    /**
     * a CSS variable starting with `--manifold-c-*`
     */
    color?: string;
    /**
     * a CSS variable starting with `--manifold-g-*`
     */
    gradient?: string;
    /**
     * The icon ID
     */
    icon?: string;
    marginLeft?: boolean;
    marginRight?: boolean;
  }
  interface ManifoldImageGallery extends JSXBase.HTMLAttributes {
    images?: string[];
  }
  interface ManifoldLazyImage extends JSXBase.HTMLAttributes {
    alt?: string;
    itemprop?: string;
    src?: string;
  }
  interface ManifoldMarketplace extends JSXBase.HTMLAttributes {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    /**
     * Comma-separated list of hidden products (labels)
     */
    excludes?: string;
    /**
     * Comma-separated list of featured products (labels)
     */
    featured?: string;
    /**
     * Hide categories & side menu?
     */
    hideCategories?: boolean;
    /**
     * Hide template cards?
     */
    hideTemplates?: boolean;
    /**
     * Link format structure, with `:product` placeholder
     */
    linkFormat?: string;
    /**
     * Should the JS event still fire, even if link-format is passed?
     */
    preserveEvent?: boolean;
    /**
     * Comma-separated list of shown products (labels)
     */
    products?: string;
  }
  interface ManifoldMarketplaceGrid extends JSXBase.HTMLAttributes {
    excludes?: string[];
    featured?: string[];
    hideCategories?: boolean;
    hideTemplates?: boolean;
    linkFormat?: string;
    preserveEvent?: boolean;
    products?: string[];
    services?: Catalog.Product[];
  }
  interface ManifoldNumberInput extends JSXBase.HTMLAttributes {
    decrementDisabledLabel?: string;
    error?: string;
    increment?: number;
    incrementDisabledLabel?: string;
    max?: number;
    min?: number;
    name?: string;
    onUpdateValue?: (event: CustomEvent<any>) => void;
    suffix?: string;
    value?: number;
  }
  interface ManifoldPlanCost extends JSXBase.HTMLAttributes {
    allFeatures?: Catalog.ExpandedFeature[];
    compact?: boolean;
    connection?: Connection;
    customizable?: boolean;
    planId?: string;
    selectedFeatures?: Gateway.FeatureMap;
  }
  interface ManifoldPlanDetails extends JSXBase.HTMLAttributes {
    isExistingResource?: boolean;
    'onManifold-planSelector-change'?: (event: CustomEvent<any>) => void;
    'onManifold-planSelector-load'?: (event: CustomEvent<any>) => void;
    plan?: Catalog.ExpandedPlan;
    product?: Catalog.Product;
    regions?: string[];
    resourceFeatures?: Gateway.ResolvedFeature[];
    resourceRegion?: string;
  }
  interface ManifoldPlanMenu extends JSXBase.HTMLAttributes {
    plans?: Catalog.ExpandedPlan[];
    selectPlan?: Function;
    selectedPlanId?: string;
  }
  interface ManifoldPlanSelector extends JSXBase.HTMLAttributes {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    /**
     * URL-friendly slug (e.g. `"jawsdb-mysql"`)
     */
    productLabel?: string;
    /**
     * Specify region order
     */
    regions?: string;
    /**
     * Is this tied to an existing resource?
     */
    resourceName?: string;
  }
  interface ManifoldProduct extends JSXBase.HTMLAttributes {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    /**
     * _(optional)_ Hide the CTA on the left?
     */
    productLabel?: string;
  }
  interface ManifoldProductDetails extends JSXBase.HTMLAttributes {
    product?: Catalog.Product;
  }
  interface ManifoldProductPage extends JSXBase.HTMLAttributes {
    product?: Catalog.Product;
    provider?: Catalog.Provider;
  }
  interface ManifoldRegionSelector extends JSXBase.HTMLAttributes {
    allowedRegions?: string[];
    ariaLabel?: string;
    connection?: Connection;
    name?: string;
    onChange?: (event: CustomEvent<any>) => void;
    preferredRegions?: string[];
    value?: string;
  }
  interface ManifoldResourceContainer extends JSXBase.HTMLAttributes {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    /**
    * Which resource does this belong to?
    */
    'resourceLabel'?: string;
  }
  interface ManifoldResourceCredentials extends JSXBase.HTMLAttributes {
    /**
    * _(hidden)_ Passed by `<manifold-connection>`
    */
    'connection'?: Connection;
  }
  interface ManifoldResourceCredentialsView extends JSXBase.HTMLAttributes {
    'credentials'?: Marketplace.Credential[];
    'onCredentialsRequested'?: (event: CustomEvent<any>) => void;
    'resourceState'?: ResourceState;
  }
  interface ManifoldResourceDetails extends JSXBase.HTMLAttributes {}
  interface ManifoldResourceDetailsView extends JSXBase.HTMLAttributes {
    'data'?: Gateway.Resource;
  }
  interface ManifoldResourceStatus extends JSXBase.HTMLAttributes {
    /**
     * _(hidden)_ Passed by `<manifold-connection>`
     */
    connection?: Connection;
    /**
     * Resource name for this status
     */
    resourceName?: string;
  }
  interface ManifoldSelect extends JSXBase.HTMLAttributes {
    defaultValue?: string;
    name?: string;
    onUpdateValue?: (event: CustomEvent<any>) => void;
    options?: Option[];
    required?: boolean;
  }
  interface ManifoldServiceCard extends JSXBase.HTMLAttributes {
    connection?: Connection;
    description?: string;
    isFeatured?: boolean;
    label?: string;
    linkFormat?: string;
    logo?: string;
    name?: string;
    'onManifold-marketplace-click'?: (event: CustomEvent<any>) => void;
    preserveEvent?: boolean;
    productId?: string;
    skeleton?: boolean;
  }
  interface ManifoldSkeletonImg extends JSXBase.HTMLAttributes {}
  interface ManifoldSkeletonText extends JSXBase.HTMLAttributes {}
  interface ManifoldTemplateCard extends JSXBase.HTMLAttributes {
    category?: string;
    linkFormat?: string;
    'onManifold-template-click'?: (event: CustomEvent<any>) => void;
    preserveEvent?: boolean;
  }
  interface ManifoldToastText extends JSXBase.HTMLAttributes {
    /**
     * `success` | `warning` | `error`
     */
    alertType?: 'success' | 'warning' | 'error' | undefined;
    dismissable?: boolean;
    /**
     * Use custom icon path data (1024×1024)
     */
    icon?: string;
    text?: string;
  }
  interface ManifoldToast extends JSXBase.HTMLAttributes {
    /**
     * `success` | `warning` | `error`
     */
    alertType?: 'success' | 'warning' | 'error' | undefined;
    /**
     * Is this dismissable?
     */
    dismissable?: boolean;
    /**
     * Use custom icon path data (1024×1024)
     */
    icon?: string;
  }
  interface ManifoldToggle extends JSXBase.HTMLAttributes {
    ariaLabelledby?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    label?: string;
    name?: string;
    onUpdateValue?: (event: CustomEvent<any>) => void;
  }
  interface ManifoldTooltip extends JSXBase.HTMLAttributes {
    labelText?: string;
  }

  interface IntrinsicElements {
    'manifold-active-plan': ManifoldActivePlan;
    'manifold-badge': ManifoldBadge;
    'manifold-button': ManifoldButton;
    'manifold-connection': ManifoldConnection;
    'manifold-cost-display': ManifoldCostDisplay;
    'manifold-data-manage-button': ManifoldDataManageButton;
    'manifold-data-product-logo': ManifoldDataProductLogo;
    'manifold-data-product-name': ManifoldDataProductName;
    'manifold-data-provision-button': ManifoldDataProvisionButton;
    'manifold-data-resource-list': ManifoldDataResourceList;
    'manifold-forward-slot': ManifoldForwardSlot;
    'manifold-icon': ManifoldIcon;
    'manifold-image-gallery': ManifoldImageGallery;
    'manifold-lazy-image': ManifoldLazyImage;
    'manifold-marketplace': ManifoldMarketplace;
    'manifold-marketplace-grid': ManifoldMarketplaceGrid;
    'manifold-number-input': ManifoldNumberInput;
    'manifold-plan-cost': ManifoldPlanCost;
    'manifold-plan-details': ManifoldPlanDetails;
    'manifold-plan-menu': ManifoldPlanMenu;
    'manifold-plan-selector': ManifoldPlanSelector;
    'manifold-product': ManifoldProduct;
    'manifold-product-details': ManifoldProductDetails;
    'manifold-product-page': ManifoldProductPage;
    'manifold-region-selector': ManifoldRegionSelector;
    'manifold-resource-container': ManifoldResourceContainer;
    'manifold-resource-credentials': ManifoldResourceCredentials;
    'manifold-resource-credentials-view': ManifoldResourceCredentialsView;
    'manifold-resource-details': ManifoldResourceDetails;
    'manifold-resource-details-view': ManifoldResourceDetailsView;
    'manifold-resource-status': ManifoldResourceStatus;
    'manifold-select': ManifoldSelect;
    'manifold-service-card': ManifoldServiceCard;
    'manifold-skeleton-img': ManifoldSkeletonImg;
    'manifold-skeleton-text': ManifoldSkeletonText;
    'manifold-template-card': ManifoldTemplateCard;
    'manifold-toast-text': ManifoldToastText;
    'manifold-toast': ManifoldToast;
    'manifold-toggle': ManifoldToggle;
    'manifold-tooltip': ManifoldTooltip;
  }
}

export { LocalJSX as JSX };

declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

declare global {
  interface HTMLManifoldActivePlanElement
    extends Components.ManifoldActivePlan,
      HTMLStencilElement {}
  var HTMLManifoldActivePlanElement: {
    prototype: HTMLManifoldActivePlanElement;
    new (): HTMLManifoldActivePlanElement;
  };

  interface HTMLManifoldBadgeElement extends Components.ManifoldBadge, HTMLStencilElement {}
  var HTMLManifoldBadgeElement: {
    prototype: HTMLManifoldBadgeElement;
    new (): HTMLManifoldBadgeElement;
  };

  interface HTMLManifoldButtonElement extends Components.ManifoldButton, HTMLStencilElement {}
  var HTMLManifoldButtonElement: {
    prototype: HTMLManifoldButtonElement;
    new (): HTMLManifoldButtonElement;
  };

  interface HTMLManifoldConnectionElement extends Components.ManifoldConnection, HTMLStencilElement {}
  var HTMLManifoldConnectionElement: {
    prototype: HTMLManifoldConnectionElement;
    new (): HTMLManifoldConnectionElement;
  };

  interface HTMLManifoldCostDisplayElement
    extends Components.ManifoldCostDisplay,
      HTMLStencilElement {}
  var HTMLManifoldCostDisplayElement: {
    prototype: HTMLManifoldCostDisplayElement;
    new (): HTMLManifoldCostDisplayElement;
  };

  interface HTMLManifoldDataManageButtonElement
    extends Components.ManifoldDataManageButton,
      HTMLStencilElement {}
  var HTMLManifoldDataManageButtonElement: {
    prototype: HTMLManifoldDataManageButtonElement;
    new (): HTMLManifoldDataManageButtonElement;
  };

  interface HTMLManifoldDataProductLogoElement
    extends Components.ManifoldDataProductLogo,
      HTMLStencilElement {}
  var HTMLManifoldDataProductLogoElement: {
    prototype: HTMLManifoldDataProductLogoElement;
    new (): HTMLManifoldDataProductLogoElement;
  };

  interface HTMLManifoldDataProductNameElement
    extends Components.ManifoldDataProductName,
      HTMLStencilElement {}
  var HTMLManifoldDataProductNameElement: {
    prototype: HTMLManifoldDataProductNameElement;
    new (): HTMLManifoldDataProductNameElement;
  };

  interface HTMLManifoldDataProvisionButtonElement
    extends Components.ManifoldDataProvisionButton,
      HTMLStencilElement {}
  var HTMLManifoldDataProvisionButtonElement: {
    prototype: HTMLManifoldDataProvisionButtonElement;
    new (): HTMLManifoldDataProvisionButtonElement;
  };

  interface HTMLManifoldDataResourceListElement
    extends Components.ManifoldDataResourceList,
      HTMLStencilElement {}
  var HTMLManifoldDataResourceListElement: {
    prototype: HTMLManifoldDataResourceListElement;
    new (): HTMLManifoldDataResourceListElement;
  };

  interface HTMLManifoldForwardSlotElement
    extends Components.ManifoldForwardSlot,
      HTMLStencilElement {}
  var HTMLManifoldForwardSlotElement: {
    prototype: HTMLManifoldForwardSlotElement;
    new (): HTMLManifoldForwardSlotElement;
  };

  interface HTMLManifoldIconElement extends Components.ManifoldIcon, HTMLStencilElement {}
  var HTMLManifoldIconElement: {
    prototype: HTMLManifoldIconElement;
    new (): HTMLManifoldIconElement;
  };

  interface HTMLManifoldImageGalleryElement
    extends Components.ManifoldImageGallery,
      HTMLStencilElement {}
  var HTMLManifoldImageGalleryElement: {
    prototype: HTMLManifoldImageGalleryElement;
    new (): HTMLManifoldImageGalleryElement;
  };

  interface HTMLManifoldLazyImageElement extends Components.ManifoldLazyImage, HTMLStencilElement {}
  var HTMLManifoldLazyImageElement: {
    prototype: HTMLManifoldLazyImageElement;
    new (): HTMLManifoldLazyImageElement;
  };

  interface HTMLManifoldMarketplaceElement extends Components.ManifoldMarketplace, HTMLStencilElement {}
  var HTMLManifoldMarketplaceElement: {
    prototype: HTMLManifoldMarketplaceElement;
    new (): HTMLManifoldMarketplaceElement;
  };

  interface HTMLManifoldMarketplaceGridElement
    extends Components.ManifoldMarketplaceGrid,
      HTMLStencilElement {}
  var HTMLManifoldMarketplaceGridElement: {
    prototype: HTMLManifoldMarketplaceGridElement;
    new (): HTMLManifoldMarketplaceGridElement;
  };

  interface HTMLManifoldNumberInputElement
    extends Components.ManifoldNumberInput,
      HTMLStencilElement {}
  var HTMLManifoldNumberInputElement: {
    prototype: HTMLManifoldNumberInputElement;
    new (): HTMLManifoldNumberInputElement;
  };

  interface HTMLManifoldPlanCostElement extends Components.ManifoldPlanCost, HTMLStencilElement {}
  var HTMLManifoldPlanCostElement: {
    prototype: HTMLManifoldPlanCostElement;
    new (): HTMLManifoldPlanCostElement;
  };

  interface HTMLManifoldPlanDetailsElement
    extends Components.ManifoldPlanDetails,
      HTMLStencilElement {}
  var HTMLManifoldPlanDetailsElement: {
    prototype: HTMLManifoldPlanDetailsElement;
    new (): HTMLManifoldPlanDetailsElement;
  };

  interface HTMLManifoldPlanMenuElement extends Components.ManifoldPlanMenu, HTMLStencilElement {}
  var HTMLManifoldPlanMenuElement: {
    prototype: HTMLManifoldPlanMenuElement;
    new (): HTMLManifoldPlanMenuElement;
  };

  interface HTMLManifoldPlanSelectorElement
    extends Components.ManifoldPlanSelector,
      HTMLStencilElement {}
  var HTMLManifoldPlanSelectorElement: {
    prototype: HTMLManifoldPlanSelectorElement;
    new (): HTMLManifoldPlanSelectorElement;
  };

  interface HTMLManifoldProductElement extends Components.ManifoldProduct, HTMLStencilElement {}
  var HTMLManifoldProductElement: {
    prototype: HTMLManifoldProductElement;
    new (): HTMLManifoldProductElement;
  };

  interface HTMLManifoldProductDetailsElement
    extends Components.ManifoldProductDetails,
      HTMLStencilElement {}
  var HTMLManifoldProductDetailsElement: {
    prototype: HTMLManifoldProductDetailsElement;
    new (): HTMLManifoldProductDetailsElement;
  };

  interface HTMLManifoldProductPageElement
    extends Components.ManifoldProductPage,
      HTMLStencilElement {}
  var HTMLManifoldProductPageElement: {
    prototype: HTMLManifoldProductPageElement;
    new (): HTMLManifoldProductPageElement;
  };

  interface HTMLManifoldRegionSelectorElement
    extends Components.ManifoldRegionSelector,
      HTMLStencilElement {}
  var HTMLManifoldRegionSelectorElement: {
    prototype: HTMLManifoldRegionSelectorElement;
    new (): HTMLManifoldRegionSelectorElement;
  };

  interface HTMLManifoldResourceContainerElement extends Components.ManifoldResourceContainer, HTMLStencilElement {}
  var HTMLManifoldResourceContainerElement: {
    prototype: HTMLManifoldResourceContainerElement;
    new (): HTMLManifoldResourceContainerElement;
  };

  interface HTMLManifoldResourceCredentialsElement extends Components.ManifoldResourceCredentials, HTMLStencilElement {}
  var HTMLManifoldResourceCredentialsElement: {
    prototype: HTMLManifoldResourceCredentialsElement;
    new (): HTMLManifoldResourceCredentialsElement;
  };

  interface HTMLManifoldResourceCredentialsViewElement extends Components.ManifoldResourceCredentialsView, HTMLStencilElement {}
  var HTMLManifoldResourceCredentialsViewElement: {
    prototype: HTMLManifoldResourceCredentialsViewElement;
    new (): HTMLManifoldResourceCredentialsViewElement;
  };

  interface HTMLManifoldResourceDetailsElement extends Components.ManifoldResourceDetails, HTMLStencilElement {}
  var HTMLManifoldResourceDetailsElement: {
    prototype: HTMLManifoldResourceDetailsElement;
    new (): HTMLManifoldResourceDetailsElement;
  };

  interface HTMLManifoldResourceDetailsViewElement extends Components.ManifoldResourceDetailsView, HTMLStencilElement {}
  var HTMLManifoldResourceDetailsViewElement: {
    prototype: HTMLManifoldResourceDetailsViewElement;
    new (): HTMLManifoldResourceDetailsViewElement;
  };

  interface HTMLManifoldResourceStatusElement extends Components.ManifoldResourceStatus, HTMLStencilElement {}
  var HTMLManifoldResourceStatusElement: {
    prototype: HTMLManifoldResourceStatusElement;
    new (): HTMLManifoldResourceStatusElement;
  };

  interface HTMLManifoldSelectElement extends Components.ManifoldSelect, HTMLStencilElement {}
  var HTMLManifoldSelectElement: {
    prototype: HTMLManifoldSelectElement;
    new (): HTMLManifoldSelectElement;
  };

  interface HTMLManifoldServiceCardElement
    extends Components.ManifoldServiceCard,
      HTMLStencilElement {}
  var HTMLManifoldServiceCardElement: {
    prototype: HTMLManifoldServiceCardElement;
    new (): HTMLManifoldServiceCardElement;
  };

  interface HTMLManifoldSkeletonImgElement
    extends Components.ManifoldSkeletonImg,
      HTMLStencilElement {}
  var HTMLManifoldSkeletonImgElement: {
    prototype: HTMLManifoldSkeletonImgElement;
    new (): HTMLManifoldSkeletonImgElement;
  };

  interface HTMLManifoldSkeletonTextElement
    extends Components.ManifoldSkeletonText,
      HTMLStencilElement {}
  var HTMLManifoldSkeletonTextElement: {
    prototype: HTMLManifoldSkeletonTextElement;
    new (): HTMLManifoldSkeletonTextElement;
  };

  interface HTMLManifoldTemplateCardElement
    extends Components.ManifoldTemplateCard,
      HTMLStencilElement {}
  var HTMLManifoldTemplateCardElement: {
    prototype: HTMLManifoldTemplateCardElement;
    new (): HTMLManifoldTemplateCardElement;
  };

  interface HTMLManifoldToastTextElement extends Components.ManifoldToastText, HTMLStencilElement {}
  var HTMLManifoldToastTextElement: {
    prototype: HTMLManifoldToastTextElement;
    new (): HTMLManifoldToastTextElement;
  };

  interface HTMLManifoldToastElement extends Components.ManifoldToast, HTMLStencilElement {}
  var HTMLManifoldToastElement: {
    prototype: HTMLManifoldToastElement;
    new (): HTMLManifoldToastElement;
  };

  interface HTMLManifoldToggleElement extends Components.ManifoldToggle, HTMLStencilElement {}
  var HTMLManifoldToggleElement: {
    prototype: HTMLManifoldToggleElement;
    new (): HTMLManifoldToggleElement;
  };

  interface HTMLManifoldTooltipElement extends Components.ManifoldTooltip, HTMLStencilElement {}
  var HTMLManifoldTooltipElement: {
    prototype: HTMLManifoldTooltipElement;
    new (): HTMLManifoldTooltipElement;
  };

  interface HTMLElementTagNameMap {
    'manifold-active-plan': HTMLManifoldActivePlanElement;
    'manifold-badge': HTMLManifoldBadgeElement;
    'manifold-button': HTMLManifoldButtonElement;
    'manifold-connection': HTMLManifoldConnectionElement;
    'manifold-cost-display': HTMLManifoldCostDisplayElement;
    'manifold-data-manage-button': HTMLManifoldDataManageButtonElement;
    'manifold-data-product-logo': HTMLManifoldDataProductLogoElement;
    'manifold-data-product-name': HTMLManifoldDataProductNameElement;
    'manifold-data-provision-button': HTMLManifoldDataProvisionButtonElement;
    'manifold-data-resource-list': HTMLManifoldDataResourceListElement;
    'manifold-forward-slot': HTMLManifoldForwardSlotElement;
    'manifold-icon': HTMLManifoldIconElement;
    'manifold-image-gallery': HTMLManifoldImageGalleryElement;
    'manifold-lazy-image': HTMLManifoldLazyImageElement;
    'manifold-marketplace': HTMLManifoldMarketplaceElement;
    'manifold-marketplace-grid': HTMLManifoldMarketplaceGridElement;
    'manifold-number-input': HTMLManifoldNumberInputElement;
    'manifold-plan-cost': HTMLManifoldPlanCostElement;
    'manifold-plan-details': HTMLManifoldPlanDetailsElement;
    'manifold-plan-menu': HTMLManifoldPlanMenuElement;
    'manifold-plan-selector': HTMLManifoldPlanSelectorElement;
    'manifold-product': HTMLManifoldProductElement;
    'manifold-product-details': HTMLManifoldProductDetailsElement;
    'manifold-product-page': HTMLManifoldProductPageElement;
    'manifold-region-selector': HTMLManifoldRegionSelectorElement;
    'manifold-resource-container': HTMLManifoldResourceContainerElement;
    'manifold-resource-credentials': HTMLManifoldResourceCredentialsElement;
    'manifold-resource-credentials-view': HTMLManifoldResourceCredentialsViewElement;
    'manifold-resource-details': HTMLManifoldResourceDetailsElement;
    'manifold-resource-details-view': HTMLManifoldResourceDetailsViewElement;
    'manifold-resource-status': HTMLManifoldResourceStatusElement;
    'manifold-select': HTMLManifoldSelectElement;
    'manifold-service-card': HTMLManifoldServiceCardElement;
    'manifold-skeleton-img': HTMLManifoldSkeletonImgElement;
    'manifold-skeleton-text': HTMLManifoldSkeletonTextElement;
    'manifold-template-card': HTMLManifoldTemplateCardElement;
    'manifold-toast-text': HTMLManifoldToastTextElement;
    'manifold-toast': HTMLManifoldToastElement;
    'manifold-toggle': HTMLManifoldToggleElement;
    'manifold-tooltip': HTMLManifoldTooltipElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}
