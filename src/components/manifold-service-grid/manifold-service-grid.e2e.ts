import { newE2EPage } from '@stencil/core/testing';

/* eslint-disable no-param-reassign, @typescript-eslint/no-explicit-any */

describe('<manifold-service-grid> sorted categories', () => {
  it('displays all services', async () => {
    // Set properties and wait
    const page = await newE2EPage({
      html:
        '<manifold-services-tunnel><manifold-service-grid></manifold-service-grid></manifold-services-tunnel>',
    });
    await page.$eval('manifold-services-tunnel', (elm: any) => {
      elm.services = [
        { body: { name: 'footastic', tags: ['foo'] } },
        { body: { name: 'bartastic', tags: ['bar'] } },
        { body: { name: 'baztastic', tags: ['baz'] } },
      ];
    });
    await page.waitForChanges();

    // See if all categories are present
    const categories = await page.findAll('manifold-service-grid >>> manifold-marketplace-results');
    expect(categories.length).toBe(3);

    // Each category should have one service card and one custom card
    categories.forEach(async cat => {
      const card = await cat.findAll('manifold-service-card');
      expect(card.length).toBe(2);
      expect(card[1].getAttribute('is-custom')).toBe('');
    });
  });

  it('formats links correctly', async () => {
    // Set properties and wait
    const page = await newE2EPage({
      html:
        '<manifold-services-tunnel><manifold-service-grid></manifold-service-grid></manifold-services-tunnel>',
    });
    await page.$eval('manifold-services-tunnel', (elm: any) => {
      elm.services = [{ body: { name: 'JawsDB MySQL', tags: ['db'], label: 'jawsdb-mysql' } }];
      elm.serviceLink = '/discover/view/service/:service';
    });
    await page.waitForChanges();

    // See if first <a> href matches the pattern
    const el = await page.find('manifold-service-grid >>> manifold-marketplace-results');
    const card = await el.find('manifold-service-card');
    expect(card).not.toBeNull();

    if (card) {
      const href = card.getAttribute('service-link');
      expect(href).toBe('/discover/view/service/jawsdb-mysql');
    }
  });

  it('correctly filters results', async () => {
    const page = await newE2EPage({
      html:
        '<manifold-services-tunnel><manifold-service-grid></manifold-service-grid></manifold-services-tunnel>',
    });
    await page.$eval('manifold-services-tunnel', (elm: any) => {
      elm.services = [
        { body: { name: 'JawsDB MySQL', tags: ['db'], label: 'jawsdb-mysql' } },
        { body: { name: 'LogDNA', tags: ['logging'], label: 'logdna' } },
      ];
    });
    await page.waitForChanges();

    const categories = await page.findAll('manifold-service-grid >>> manifold-marketplace-results');
    expect(categories.length).toEqual(2);

    const input = await page.find('manifold-service-grid >>> .search-bar');
    await input.press('KeyL');
    await input.press('KeyO');
    await input.press('KeyG');

    const results = await page.findAll('manifold-service-grid >>> manifold-marketplace-results');
    expect(results.length).toEqual(1);
  });

  it('correctly highlights featured services', async () => {
    // Set properties and wait
    const page = await newE2EPage({
      html:
        '<manifold-services-tunnel><manifold-service-grid></manifold-service-grid></manifold-services-tunnel>',
    });
    await page.$eval('manifold-services-tunnel', (elm: any) => {
      elm.services = [
        { body: { name: 'JawsDB MySQL', tags: ['db'], label: 'jawsdb-mysql' } },
        { body: { name: 'LogDNA', tags: ['logging'], label: 'logdna' } },
      ];
      elm.featured = 'fake,logdna,fake-2';
    });
    await page.waitForChanges();

    const el = await page.findAll('manifold-service-grid >>> manifold-marketplace-results');
    const jawsDB = await el[0].find('manifold-service-card');
    const logDNA = await el[1].find('manifold-service-card');
    expect(jawsDB).not.toBeNull();
    expect(logDNA).not.toBeNull();

    if (jawsDB && logDNA) {
      const jawsIsFeatured = jawsDB.getAttribute('is-featured');
      const logDNAIsFeatured = logDNA.getAttribute('is-featured');

      expect(jawsIsFeatured).toBeFalsy(); // this will be missing or null or something
      expect(logDNAIsFeatured).toBe(''); // HTML attributes will read as '' if preset (true)
    }
  });
});