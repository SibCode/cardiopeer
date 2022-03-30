<template>
    <matrix-login v-if="!$matrix.isLoggedIn()"></matrix-login>
    <div v-if="$matrix.isLoggedIn()">
        Matrix Demo Seite funktioniert!
        <q-btn color="purple" label="Test" @click="() => testfunction()"/>
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
    
</template>

<script lang="ts">
import {MatrixConfiguration} from '../../boot/MatrixConfiguration';
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