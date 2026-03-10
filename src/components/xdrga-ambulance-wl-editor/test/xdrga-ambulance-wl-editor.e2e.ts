import { newE2EPage } from '@stencil/core/testing';

describe('xdrga-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xdrga-ambulance-wl-editor></xdrga-ambulance-wl-editor>');

    const element = await page.find('xdrga-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
