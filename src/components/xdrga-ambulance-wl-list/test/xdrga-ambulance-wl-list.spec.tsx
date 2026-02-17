import { newSpecPage } from '@stencil/core/testing';
import { XdrgaAmbulanceWlList } from '../xdrga-ambulance-wl-list';

describe('xdrga-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XdrgaAmbulanceWlList],
      html: `<xdrga-ambulance-wl-list></xdrga-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as PfxAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
