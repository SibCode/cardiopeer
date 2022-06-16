<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        :(
      </div>

      <div class="text-h2" style="opacity:.6">
        Implementierung der Hydrogen-Demo steht leider nicht verfügbar.
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Auf die Übersichtsseite zurückkehren"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HydrogenDemo',
});
</script>

<style>
/* This is where your CSS goes */
</style>