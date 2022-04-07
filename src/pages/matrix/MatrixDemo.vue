<template>
    <matrix-login v-if="!$matrix.isLoggedIn()"></matrix-login>
    <q-page v-if="$matrix.isLoggedIn()">
      <div>
        Matrix Demo Seite funktioniert!
        <q-btn color="purple" label="Test" @click="() => testfunction()"/>
        <q-btn color="purple" label="Daten" @click="() => patientMidata()"/>
      <q-btn
          color="black"
          label="Logout"
          icon="logout"
          rounded
          outline
          @click="logout()"
          class="gt-xs"
        />
      </div>
    </q-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MatrixLogin from '../../components/MatrixLogin.vue'



export default defineComponent({
  name: 'MatrixDemo',
  components: {
      'matrix-login': MatrixLogin
  },
  methods: {
    testfunction(){
        this.$matrix.consoleMtxClient();
    },
    patientMidata(){
      this.$matrix.testPatientData();
    },
    logout(){
        this.$matrix.logout();
        location.reload();
    }
  }
});
</script>

<style>
/* This is where your CSS goes */
</style>