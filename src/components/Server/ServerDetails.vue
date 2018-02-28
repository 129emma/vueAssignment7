<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>{{ server.id }}, Status : {{ server.status }}</p>
    </div>

</template>

<script>
import { serverBus } from '../../main.js';
export default {
  data: function(){
    return {
      server: null
    }
  },
  // serverbus get data from serverstatus, and here listening the change from serverbus
  created(){
    serverBus.$on('serverSelect',(server) => {
      this.server = server; //getting the updated server status
    });
  }
}
</script>

<style>

</style>
