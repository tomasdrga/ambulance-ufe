import { newSpecPage } from '@stencil/core/testing';
import { XdrgaAmbulanceWlList } from '../xdrga-ambulance-wl-list';

describe('xdrga-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XdrgaAmbulanceWlList],
      html: `<xdrga-ambulance-wl-list></xdrga-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xdrga-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xdrga-ambulance-wl-list>
    `);
  });
});
