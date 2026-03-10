[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Stencil Component Starter

> This is a starter project for building a standalone Web Components using Stencil.

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than runtime tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements specification.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/stenciljs/component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the [Ionic-generated](https://ionicframework.com/) web components use the prefix `ion`.

## Using this component

There are two strategies we recommend for using web components built with Stencil.

The first step for all two of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

You can read more about these different approaches in the [Stencil docs](https://stenciljs.com/docs/publishing).

### Lazy Loading

If your Stencil project is built with the [`dist`](https://stenciljs.com/docs/distribution) output target, you can import a small bootstrap script that registers all components and allows you to load individual component scripts lazily.

For example, given your Stencil project namespace is called `my-design-system`, to use `my-component` on any website, inject this into your HTML:

```html
<script type="module" src="https://unpkg.com/my-design-system"></script>
<!--
To avoid unpkg.com redirects to the actual file, you can also directly import:
https://unpkg.com/foobar-design-system@0.0.1/dist/foobar-design-system/foobar-design-system.esm.js
-->
<my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>
```

This will only load the necessary scripts needed to render `<my-component />`. Once more components of this package are used, they will automatically be loaded lazily.

You can also import the script as part of your `node_modules` in your applications entry file:

```tsx
import 'foobar-design-system/dist/foobar-design-system/foobar-design-system.esm.js';
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-y6v26a?file=src%2Fmain.tsx).

### Standalone

If you are using a Stencil component library with `dist-custom-elements`, we recommend importing Stencil components individually in those files where they are needed.

To export Stencil components as standalone components make sure you have the [`dist-custom-elements`](https://stenciljs.com/docs/custom-elements) output target defined in your `stencil.config.ts`.

For example, given you'd like to use `<my-component />` as part of a React component, you can import the component directly via:

```tsx
import 'foobar-design-system/my-component';

function App() {
  return (
    <>
      <div>
        <my-component
          first="Stencil"
          middle="'Don't call me a framework'"
          last="JS"
        ></my-component>
      </div>
    </>
  );
}

export default App;
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-b6zuds?file=src%2FApp.tsx).

## WAC 01 OpenAPI - Steps 4+

### 4. Generate client code with OpenAPI Generator

1) Install the generator CLI:

```bash
npm install --save-dev @openapitools/openapi-generator-cli
```

2) Create `openapitools.json` in the project root:

```json
{
  "$schema": "./node_modules/@openapitools/openapi-generator-cli/config.schema.json",
  "generator-cli": {
    "useDocker": true,
    "version": "6.6.0",
    "generators": {
      "ambulance-wl": {
        "generatorName": "typescript-fetch",
        "glob": "api/ambulance-wl.openapi.yaml",
        "output": "#{cwd}/src/api/ambulance-wl",
        "additionalProperties": {
          "supportsES6": "true",
          "withInterfaces": true
        }
      }
    }
  }
}
```

3) Create `src/api/ambulance-wl/.openapi-generator-ignore`:

```text
.npmignore
*.sh
```

4) Add the script to `package.json`:

```json
{
  "scripts": {
    "openapi": "openapi-generator-cli generate"
  }
}
```

5) Generate client code:

```bash
npm run openapi
```

### 5. Implement API calls in components

Update `src/components/<pfx>-ambulance-wl-list/<pfx>-ambulance-wl-list.tsx`:

```tsx
import { Component, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { AmbulanceWaitingListApi, WaitingListEntry, Configuration } from '../../api/ambulance-wl';

export class <Pfx>AmbulanceWlList {
  @Event({ eventName: "entry-clicked" }) entryClicked: EventEmitter<string>
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;
  @State() errorMessage: string;

  waitingPatients: WaitingListEntry[];

  private async getWaitingPatientsAsync(): Promise<WaitingListEntry[]> {
    try {
      const configuration = new Configuration({
        basePath: this.apiBase,
      });

      const waitingListApi = new AmbulanceWaitingListApi(configuration);
      const response = await waitingListApi.getWaitingListEntriesRaw({ ambulanceId: this.ambulanceId });
      if (response.raw.status < 299) {
        return await response.value();
      } else {
        this.errorMessage = `Cannot retrieve list of waiting patients: ${response.raw.statusText}`;
      }
    } catch (err: any) {
      this.errorMessage = `Cannot retrieve list of waiting patients: ${err.message || "unknown"}`;
    }
    return [];
  }

  render() {
    return (
      <Host>
        {this.errorMessage
          ? <div class="error">{this.errorMessage}</div>
          : <md-list>
              {this.waitingPatients.map(patient =>
                <md-list-item onClick={ () => this.entryClicked.emit(patient.id) }>
                  <div slot="headline">{patient.name}</div>
                  <div slot="supporting-text">{"Predpokladany vstup: " + patient.estimatedStart?.toLocaleString()}</div>
                  <md-icon slot="start">person</md-icon>
                </md-list-item>
              )}
            </md-list>
        }
      </Host>
    );
  }
}
```

Update `src/components/<pfx>-ambulance-wl-app/<pfx>-ambulance-wl-app.tsx`:

```tsx
export class <Pfx>AmbulanceWlApp {
  @State() private relativePath = "";
  @Prop() basePath: string = "";
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;

  render() {
    return (
      <Host>
        { element === "editor"
          ? <pfx-ambulance-wl-editor entry-id={entryId}
              oneditor-closed={ () => navigate("./list") }
            ></pfx-ambulance-wl-editor>
          : <pfx-ambulance-wl-list ambulance-id={this.ambulanceId} api-base={this.apiBase}
              onentry-clicked={ (ev: CustomEvent<string>) => navigate("./entry/" + ev.detail) }
            ></pfx-ambulance-wl-list>
        }
      </Host>
    );
  }
}
```

Update `src/index.html`:

```html
<body style="font-family: 'Roboto'; ">
  <<pfx>-ambulance-wl-app
    ambulance-id="bobulova"
    api-base="http://localhost:5000/api"
    base-path="/ambulance-wl/">
  </<pfx>-ambulance-wl-app>
</body>
```

### 6. Start dev server and verify

```bash
npm run start
```

Open `http://localhost:3333`. If you run only `npm run start:app` the list will show an error message. To make the error more visible, update `src/components/<pfx>-ambulance-wl-list/<pfx>-ambulance-wl-list.css`:

```css
:host {
  display: block;
  width: 100%;
  height: 100%;
}

.error {
  margin: auto;
  color: red;
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
}
```

### 7. Extend tests with mocked API

1) Install mock fetch:

```bash
npm install jest-fetch-mock --save-dev
```

2) Update `src/components/pfx-ambulance-wl-list/test/pfx-ambulance-wl-list.spec.tsx`:

```tsx
import { newSpecPage } from '@stencil/core/testing';
import { <Pfx>AmbulanceWlList } from '../<pfx>-ambulance-wl-list';
import { WaitingListEntry } from '../../../api/ambulance-wl/models';
import fetchMock from 'jest-fetch-mock';

describe('<pfx>-ambulance-wl-list', () => {
  const sampleEntries: WaitingListEntry[] = [
    {
      id: "entry-1",
      patientId: "p-1",
      name: "Juraj Prvy",
      waitingSince: new Date("20240203T12:00"),
      estimatedDurationMinutes: 20
    },
    {
      id: "entry-2",
      patientId: "p-2",
      name: "James Druhy",
      waitingSince: new Date("20240203T12:00"),
      estimatedDurationMinutes: 5
    }
  ];

  beforeAll(() => {
    fetchMock.enableMocks();
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('renders sample entries', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(sampleEntries));

    const page = await newSpecPage({
      components: [<Pfx>AmbulanceWlList],
      html: `<<pfx>-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></<pfx>-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as <Pfx>AmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    await page.waitForChanges();

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");

    expect(expectedPatients).toEqual(sampleEntries.length);
    expect(items.length).toEqual(expectedPatients);
  });

  it('renders error message on network issues', async () => {
    fetchMock.mockRejectOnce(new Error('Network Error'));

    const page = await newSpecPage({
      components: [<Pfx>AmbulanceWlList],
      html: `<<pfx>-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></<pfx>-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as <Pfx>AmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    await page.waitForChanges();

    const errorMessage = page.root.shadowRoot.querySelectorAll(".error");
    const items = page.root.shadowRoot.querySelectorAll("md-list-item");

    expect(errorMessage.length).toBeGreaterThanOrEqual(1);
    expect(expectedPatients).toEqual(0);
    expect(items.length).toEqual(expectedPatients);
  });
});
```

### 8. Optional Jest config

Create `jest.config.js`:

```js
module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/@stencil/core/testing/jest-preprocessor.js",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json",
    "jsx"
  ]
};
```

Add the script to `package.json`:

```json
{
  "scripts": {
    "test:jest": "jest --config ./jest.config.js"
  }
}
```

If you want to silence warnings from generated code, set these in `tsconfig.json`:

```json
{
  "noUnusedLocals": false,
  "noUnusedParameters": false
}
```

### 9. Archive and deploy

```bash
git add .
git commit -m "Added ambulance waiting list API"
git push
```

If you use the GitOps repo, set attributes in `ambulance-gitops/apps/<pfx>-ambulance-ufe/webcomponent-content.yaml`:

```yaml
spec:
  element: <pfx>-ambulance-wl-app
  attributes:
    - name: api-base
      value: http://localhost:5000/api
    - name: ambulance-id
      value: bobulova
```
