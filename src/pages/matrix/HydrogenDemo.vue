<template>
    <div id="app" class="hydrogen"></div>
</template>

<script lang="text/javascript">
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

async function start() {
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
    client.startWithLogin(loginOptions.password("username", "password"));

    await client.loadStatus.waitFor((status: string) => {
        return status === LoadStatus.Ready ||
            status === LoadStatus.Error ||
            status === LoadStatus.LoginFailed;
    }).promise;

    if (client.loginFailure) {
        alert("login failed: " + String(client.loginFailure));
    } else if (client.loadError) {
        alert("load failed: " + String(client.loadError.message));
    } else {
        const {session} = client;
        // looks for room corresponding to #element-dev:matrix.org, assuming it is already joined
        const room = session.rooms.get("!bEWtlqtDwCLFIAKAcv:matrix.org");
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

start();
</script>

<style>
/* This is where your CSS goes */
</style>