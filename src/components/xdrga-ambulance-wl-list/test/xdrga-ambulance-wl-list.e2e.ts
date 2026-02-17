import { newE2EPage } from '@stencil/core/testing';

describe('xdrga-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xdrga-ambulance-wl-list></xdrga-ambulance-wl-list>');

    const element = await page.find('xdrga-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
