<template>
    <!-- you define your Vue template here -->
    <matrix-login v-if="!$midata.isLoggedIn()"></matrix-login>
    <div v-if="$midata.isLoggedIn()">
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
        console.log(MatrixConfiguration.HOMESERVER_URL);
    },
    logout(){
        this.$midata.logout();
        location.reload();
    }
  }
});
</script>

<style>
/* This is where your CSS goes */
</style>