import { newE2EPage } from '@stencil/core/testing';

describe('xdrga-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xdrga-ambulance-wl-app></xdrga-ambulance-wl-app>');

    const element = await page.find('xdrga-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
