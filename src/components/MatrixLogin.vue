<template>
  <div class="container">
    <q-card class="card">
      <q-card-section>
        <div class="text-h4 text-weight-thin">Cardiopeer Login</div>
        <div class="text-body1">
          Damit sie den Chat verwenden können, müssen Sie sich zuerst
          einloggen/registrieren.
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-actions>
        <q-btn
          flat
          @click="connect()"
          class="matrix-fade full-width"
          color="white"
          >Login</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MatrixLogin',
  methods: {
    connect() {
        this.$cardiopeer_matrix.login();
    },
  },
});
</script>

<style lang="sass" scoped>
.card
    max-width: 500px

.container
    display: flex
    justify-content: center
    margin-top: 50px
</style>

<style lang="css">
.matrix-fade {
  background-image: linear-gradient(to bottom right, #000000, #364561);
}
</style>