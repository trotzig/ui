import { newE2EPage } from '@stencil/core/testing';
import {
  BooleanFeatureCustom,
  BooleanFeatureStaticFalse,
  BooleanFeatureStaticTrue,
  ExpandedPlan,
  ExpandedPlanCustom,
  NumberFeatureCustom,
  Product,
  StringFeatureCustom,
  StringFeatureStatic,
  Regions,
  ZiggeoPlan,
} from '../../spec/mock/catalog';

/* eslint-disable no-param-reassign, @typescript-eslint/no-explicit-any */

const stringPlan: Catalog.ExpandedPlan = {
  ...ExpandedPlan,
  body: {
    ...ExpandedPlan.body,
    expanded_features: [
      { ...StringFeatureStatic, value: { ...StringFeatureStatic.value, name: 'Yes' } },
    ],
  },
};

const booleanPlanTrue: Catalog.ExpandedPlan = {
  ...ExpandedPlan,
  body: { ...ExpandedPlan.body, expanded_features: [BooleanFeatureStaticTrue] },
};

const booleanPlanFalse: Catalog.ExpandedPlan = {
  ...ExpandedPlan,
  body: { ...ExpandedPlan.body, expanded_features: [BooleanFeatureStaticFalse] },
};

const stringPlanCustom: Catalog.ExpandedPlan = {
  ...ExpandedPlanCustom,
  body: { ...ExpandedPlanCustom.body, expanded_features: [StringFeatureCustom] },
};

const numberPlanCustom: Catalog.ExpandedPlan = {
  ...ExpandedPlanCustom,
  body: { ...ExpandedPlanCustom.body, expanded_features: [NumberFeatureCustom] },
};

const booleanPlanCustom: Catalog.ExpandedPlan = {
  ...ExpandedPlanCustom,
  body: { ...ExpandedPlanCustom.body, expanded_features: [BooleanFeatureCustom] },
};

describe(`<manifold-plan-details>`, () => {
  describe('static features', () => {
    it('sets data-value for string features', async () => {
      const page = await newE2EPage({ html: `<manifold-plan-details />` });

      const props = { plan: stringPlan, product: Product };
      await page.$eval(
        'manifold-plan-details',
        (elm: any, { plan, product }: any) => {
          elm.plan = plan;
          elm.product = product;
        },
        props
      );

      await page.waitForChanges();

      const valueDisplay = await page.find('manifold-plan-details >>> .feature-value');
      const value = await valueDisplay.innerText;
      expect(value).toBe('Yes');
    });

    it('sets data-value for boolean features when true', async () => {
      const page = await newE2EPage({ html: `<manifold-plan-details />` });

      const props = { plan: booleanPlanTrue, product: Product };
      await page.$eval(
        'manifold-plan-details',
        (elm: any, { plan, product }: any) => {
          elm.plan = plan;
          elm.product = product;
        },
        props
      );

      await page.waitForChanges();

      const valueDisplay = await page.find('manifold-plan-details >>> .feature-value');
      const value = await valueDisplay.innerText;
      expect(value).toBe('Yes');
    });

    it('sets data-value for boolean features when true', async () => {
      const page = await newE2EPage({ html: `<manifold-plan-details />` });

      const props = { plan: booleanPlanFalse, product: Product };
      await page.$eval(
        'manifold-plan-details',
        (elm: any, { plan, product }: any) => {
          elm.plan = plan;
          elm.product = product;
        },
        props
      );

      await page.waitForChanges();

      const valueDisplay = await page.find('manifold-plan-details >>> .feature-value');
      const value = await valueDisplay.innerText;
      expect(value).toBe('No');
    });
  });

  describe('custom features', () => {
    it('renders manifold-select if string feature present', async () => {
      const page = await newE2EPage({ html: `<manifold-plan-details />` });

      const props = { plan: stringPlanCustom, product: Product };
      await page.$eval(
        'manifold-plan-details',
        (elm: any, { plan, product }: any) => {
          elm.plan = plan;
          elm.product = product;
        },
        props
      );

      await page.waitForChanges();

      const select = await page.find('manifold-plan-details >>> manifold-select');
      expect(select).not.toBeNull();
    });

    it('renders manifold-number-input if number feature present', async () => {
      const page = await newE2EPage({ html: `<manifold-plan-details />` });

      const props = { plan: numberPlanCustom, product: Product };
      await page.$eval(
        'manifold-plan-details',
        (elm: any, { plan, product }: any) => {
          elm.plan = plan;
          elm.product = product;
        },
        props
      );

      await page.waitForChanges();

      const numberInput = await page.find('manifold-plan-details >>> manifold-number-input');
      expect(numberInput).not.toBeNull();
    });

    it('renders manifold-toggle if boolean feature present', async () => {
      const page = await newE2EPage({ html: `<manifold-plan-details />` });

      const props = { plan: booleanPlanCustom, product: Product };
      await page.$eval(
        'manifold-plan-details',
        (elm: any, { plan, product }: any) => {
          elm.plan = plan;
          elm.product = product;
        },
        props
      );

      await page.waitForChanges();

      const toggle = await page.find('manifold-plan-details >>> manifold-toggle');
      expect(toggle).not.toBeNull();
    });
  });

  describe('measurable features', () => {
    it('shows table if too many pricing tiers', async () => {
      const page = await newE2EPage({
        html: '<manifold-plan-details />',
      });
      await page.$eval(
        'manifold-plan-details',
        (elm: any, props: any) => {
          elm.product = props.product;
          elm.plan = props.plan;
        },
        { product: Product, plan: ZiggeoPlan }
      );
      await page.waitForChanges();
      expect(await page.find('manifold-plan-details >>> table')).not.toBeNull();
    });
  });

  describe('regions', () => {
    it('shows the region selector when there are regions', async () => {
      const page = await newE2EPage({ html: '<manifold-plan-details />' });
      const plan: Catalog.ExpandedPlan = {
        ...ExpandedPlan,
        body: { ...ExpandedPlan.body, regions: [Regions[0].id, Regions[1].id] },
      };

      await page.$eval(
        'manifold-plan-details',
        (elm: any, props: any) => {
          elm.product = props.product;
          elm.plan = props.plan;
        },
        { product: Product, plan }
      );
      await page.waitForChanges();

      expect(await page.find('manifold-plan-details >>> manifold-region-selector')).not.toBeNull();
    });

    it('hides the region selector when the only region is global', async () => {
      const page = await newE2EPage({ html: '<manifold-plan-details />' });
      const global = Regions.find(({ body: { location } }) => location === 'global') || { id: '' };

      const plan: Catalog.ExpandedPlan = {
        ...ExpandedPlan,
        body: { ...ExpandedPlan.body, regions: [global.id] },
      };

      await page.$eval(
        'manifold-plan-details',
        (elm: any, props: any) => {
          elm.product = props.product;
          elm.plan = props.plan;
        },
        { product: Product, plan }
      );
      await page.waitForChanges();

      expect(await page.find('manifold-plan-details >>> manifold-region-selector')).toBeNull();
    });

    it('passes first region down to selector', async () => {
      const page = await newE2EPage({ html: '<manifold-plan-details />' });

      const plan: Catalog.ExpandedPlan = {
        ...ExpandedPlan,
        body: { ...ExpandedPlan.body, regions: ['abc'] },
      };

      await page.$eval(
        'manifold-plan-details',
        (elm: any, props: any) => {
          elm.product = props.product;
          elm.plan = props.plan;
        },
        { product: Product, plan }
      );
      await page.waitForChanges();

      const regionSelector = await page.find('manifold-plan-details >>> manifold-region-selector');
      expect(await regionSelector.getProperty('value')).toBe('abc');
    });
  });
});
