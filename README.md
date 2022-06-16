# Cardiopeer

This project is a demo application that takes the [MIDATA demonstration application from the i4mi](https://github.com/i4mi/midata-quasar-starter-app) (no official release, version as of Mar 21, 2022) and combines it with the [Matrix network](https://matrix.org/) by utilizing and integrating the [Hydrogen web client](https://github.com/vector-im/hydrogen-web) v.0.2.26 as a proof of concept.

The goal is to create a modular system to use with MIDATA that enables you to login with a MIDATA account and securely communicate over the Matrix network for patient - doctor, patient - patient or patient - coach communication. The idea is to create a secure platform which with future updates allows the sharing of health care data available in MIDATA through chat or embedded features.

The installation process and description for this project is taken from the original MIDATA demo app and expanded on to further explain the steps involved in integrating the the Hydrogen web client and with it the Matrix network.

# Technical Documentation on Hydrogen View SDK Implementation

This documentation is taken and expanded on from [the official hydrogen implementation documentation seen here](https://github.com/vector-im/hydrogen-web/blob/master/doc/SDK.md).
The Hydrogen view SDK allows developers to integrate parts of the Hydrogen application into the UI of their own application. Hydrogen is written with the MVVM pattern, so to construct a view, you'd first construct a view model, which you then pass into the view. For most view models, you will first need a running client. For this project look at the "Midata Quasar Starter Application (Demo App)" part of this guide to get the client running.

## Embedding the Hydrogen View SDK

The attribute `class="hydrogen"` needs to be added to the element in which the chat should be rendered as the CSS we'll include from the SDK assumes for now that the app is run in an element with this classname. This makes it easy to be embedded in the application.

You'll need to provide the username and password of a user that is already in a room. This application is storing such information in the CardiopeerUser class as an instance after loging in and providing authentification. The idea is to create a room for matched pairs which the hydrogen client that can then provide an instance for the clients to chat. 

```ts
import {
    Platform,
    Client,
    LoadStatus,
    createNavigation,
    createRouter,
    RoomViewModel,
    TimelineView,
    viewClassForTile
} from "hydrogen-view-sdk";
import downloadSandboxPath from 'hydrogen-view-sdk/download-sandbox.html?url';
import workerPath from 'hydrogen-view-sdk/main.js?url';
import olmWasmPath from '@matrix-org/olm/olm.wasm?url';
import olmJsPath from '@matrix-org/olm/olm.js?url';
import olmLegacyJsPath from '@matrix-org/olm/olm_legacy.js?url';
const assetPaths = {
    downloadSandbox: downloadSandboxPath,
    worker: workerPath,
    olm: {
        wasm: olmWasmPath,
        legacyBundle: olmLegacyJsPath,
        wasmBundle: olmJsPath
    }
};
import "hydrogen-view-sdk/theme-element-light.css";
// OR import "hydrogen-view-sdk/theme-element-dark.css";

async function main() {
    const app = document.querySelector<HTMLDivElement>('#app')!
    const config = {};
    const platform = new Platform({container: app, assetPaths, config, options: { development: import.meta.env.DEV }});
    const navigation = createNavigation();
    platform.setNavigation(navigation);
    const urlRouter = createRouter({
        navigation: navigation,
        history: platform.history
    });
    urlRouter.attach();
    const client = new Client(platform);

    const loginOptions = await client.queryLogin("matrix.org").result;
    client.startWithLogin(loginOptions.password("username", "password")); // Here you would provide the login credentials provided for the client

    await client.loadStatus.waitFor((status: string) => {
        return status === LoadStatus.Ready ||
            status === LoadStatus.Error ||
            status === LoadStatus.LoginFailed;
    }).promise;

    if (client.loginFailure) {
        alert("login failed: " + client.loginFailure);
    } else if (client.loadError) {
        alert("load failed: " + client.loadError.message);
    } else {
        const {session} = client;
        // looks for room corresponding to #element-dev:matrix.org, assuming it is already joined
        const room = session.rooms.get("roomname"); // Here you would add the room created for the peer chat
        const vm = new RoomViewModel({
            room,
            ownUserId: session.userId,
            platform,
            urlCreator: urlRouter,
            navigation,
        });
        await vm.load();
        const view = new TimelineView(vm.timelineViewModel, viewClassForTile);
        app.appendChild(view.mount());
    }
}

main();
```

## No typescript support (yet)

Typescript support is not yet available while we're converting the Hydrogen codebase to Typescript. Since the Midata Quasar Starter Application basically runs on typescript you need to add a `.d.ts` in the `src` directory. For this project this declaration can be found in the environment declarations (`env.d.ts`). The code snippet to make Typescript not complain that `hydrogen-view-sdk` doesn't have types is the following:

```ts
declare module "hydrogen-view-sdk";
```

# Midata Quasar Starter Application (Demo App)

The base for this application is a starter/demo application created with the Quasar CLI and UI Framework. It provides an introduction to web development and shows what MIDATA is and how to set up an application on the MIDATA test server. It also includes a small MIDATA application that showcases the OAuth 2.0 authentication process and implements basic functionality of the npm package [JSonFhir](https://www.npmjs.com/package/@i4mi/js-on-fhir).

This starter/demo application is aimed at students and interested parties who are planning to develop a web application with MIDATA. It should give a first insight into the subjects.

## Setup
Node and npm have to be installed on your machine. The nodejs package includes both node and npm executables.

### Node
- #### Node installation on Windows

  Go to the [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm with apt install, using the following commands.

```bash
sudo apt install nodejs
sudo apt install npm
```

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.
```bash
node --version
v14.17.5

npm --version
7.24.2
```

If you need to update `npm`, you can update using `npm`.
```bash
npm install npm -g
```

### Repository
To download the original demo app from github, use `git clone https://github.com/i4mi/midata-quasar-starter-app.git` in your terminal.
To download this project, use `git clone https://github.com/SibCode/cardiopeer.git` in your terminal.

### Install the dependencies
Then change the directory with `cd midata-quasar-starter-app` and install the dependencies.
```bash
npm i
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
Make sure that port 8080 isn't already in use. You need to be running the webapp on http://localhost:8080, otherwise the MIDATA demo won't work (due to OAuth2 redirect url mismatch).
```bash
npx quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
npx quasar build
```

### Automatic deployment to GitHub Pages
The production build of the app can be deployed automatically to the GitHub Pages by using the GitHub Actions.
A workflow is already implemented, it just needs a few settings. You can also adjust it to your own needs (for example linting on development branch).

After correct setup, the workflow deploys the app when you push to a branch **main**. When you use **master** see the corresponding setting below. When changes are detected the workflow pushes the generated build files to a branch **gh-pages**. Make sure that the branch **gh-pages** is available in your project. There the files are picked up by a GitHub-internal job and published to a public, repository specific domain. For this repository it is: https://sibcode.github.io/cardiopeer/#/

#### Check publicPath
When the app is served in a subdirectory (bla.com/pizza/ instead of bla.com), which is the case for the GitHub Pages, you need to set the variable **publicPath** in **quasar.conf.js** to the name of the subdirectory (corresponds to your repository name).
For this app the production **publicPath** is "/midata-quasar-starter-app/".

#### Redirect URL for Midata
The MIDATA service needs to know the URL where to redirect the user after successful login.
This can be configured in **quasar.conf.js** with the **VUE_FHIR_REDIRECT_URL** variable (second entry).
Make sure it also includes "/#/midata/demo" and it is registered as **redirect URI** in the MIDATA app declaration.

#### Enable GitHub Pages
1. If it doesn't exist yet, push a new branch to your repository called **gh-pages**
2. Open repository settings > Pages
3. Select Source: gh-pages, /root -> Save

#### Check default branch
Make sure the name of your default branch is listed as trigger in the workflow file. Currently it uses the branch **main** to trigger the **build_and_deploy** job.
The workflow file is located here: **root/.github/workflows/main.yml**
Note: Depending on your ssh token permissions you may only be able to edit files in this location via browser.

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

