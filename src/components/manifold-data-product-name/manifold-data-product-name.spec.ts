import { ManifoldDataProductName } from './manifold-data-product-name';

describe('<manifold-data-product-name>', () => {
  it('fetches product from label on load', () => {
    const productLabel = 'test-product';

    const productName = new ManifoldDataProductName();
    productName.fetchProduct = jest.fn();
    productName.productLabel = productLabel;
    productName.componentWillLoad();
    expect(productName.fetchProduct).toHaveBeenCalledWith(productLabel);
  });

  it('fetches product from label on change', () => {
    const newProduct = 'new-product';

    const productName = new ManifoldDataProductName();
    productName.fetchProduct = jest.fn();
    productName.productLabel = 'old-product';
    productName.productChange(newProduct);
    expect(productName.fetchProduct).toHaveBeenCalledWith(newProduct);
  });

  it('fetches resource on load', () => {
    const resourceName = 'my-resource';

    const productName = new ManifoldDataProductName();
    productName.fetchResource = jest.fn();
    productName.resourceName = resourceName;
    productName.componentWillLoad();
    expect(productName.fetchResource).toHaveBeenCalledWith(resourceName);
  });

  it('fetches resource on change', () => {
    const newResource = 'new-resource';

    const productName = new ManifoldDataProductName();
    productName.fetchResource = jest.fn();
    productName.resourceName = 'old-resource';
    productName.resourceChange(newResource);
    expect(productName.fetchResource).toHaveBeenCalledWith(newResource);
  });
});
