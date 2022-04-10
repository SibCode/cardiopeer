<template>
    <!--<matrix-login v-if="!$matrix.isLoggedIn()"></matrix-login>-->
    <!--<q-page v-if="$matrix.isLoggedIn()">-->
    <q-page>
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
//import MatrixLogin from '../../components/MatrixLogin.vue'



export default defineComponent({
  name: 'MatrixDemo',
  components: {
      //'matrix-login': MatrixLogin
  },
  methods: {
    login(){
      this.$matrix.login();
    },
    checkStorage(){
      this.$matrix.checkStorage();
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