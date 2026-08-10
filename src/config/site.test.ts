import { describe, it, expect } from 'vitest';
import { site, telHref } from './site';

describe('site config', () => {
  it('exposes a hotline as digits only for tel: links', () => {
    expect(telHref(site.hotline)).toBe('tel:0936899431');
  });

  it('has two locations with full NAP', () => {
    expect(site.locations).toHaveLength(2);
    for (const loc of site.locations) {
      expect(loc.name).toBeTruthy();
      expect(loc.address).toBeTruthy();
      expect(loc.phone).toMatch(/^0\d{9,10}$/); // digits only, no spaces
    }
  });

  it('has a Zalo link', () => {
    expect(site.zaloUrl).toMatch(/^https:\/\/zalo\.me\//);
  });
});
