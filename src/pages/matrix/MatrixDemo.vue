<template>
    <matrix-login v-if="!$cardiopeer_midata.isLoggedIn()"></matrix-login>
    <q-page v-if="$cardiopeer_midata.isLoggedIn()">
      <div>
        Matrix Demo Seite funktioniert!
        <q-btn color="purple" label="Login" @click="() => login()"/>
        <q-btn color="purple" label="Daten" @click="() => checkStorage()"/>
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
    login(){
      this.$cardiopeer_matrix.login();
    },
    checkStorage(){
      this.$cardiopeer_storage.checkStorage();
    },
    logout(){
        this.$cardiopeer_midata.logout();
        this.$cardiopeer_matrix.logout();
        location.reload();
    }
  }
});
</script>

<style>
/* This is where your CSS goes */
</style>