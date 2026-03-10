import { newSpecPage } from '@stencil/core/testing';
import { XdrgaAmbulanceWlApp } from '../xdrga-ambulance-wl-app';

describe('xdrga-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XdrgaAmbulanceWlApp],
      html: `<xdrga-ambulance-wl-app base-path="/"></xdrga-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xdrga-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XdrgaAmbulanceWlApp],
      html: `<xdrga-ambulance-wl-app base-path="/ambulance-wl/"></xdrga-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xdrga-ambulance-wl-list");
  });
});