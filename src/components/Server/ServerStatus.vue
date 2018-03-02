<template>
<!-- servers.vue is parent element of serverstatus.vue -->
<!-- 1.create this new file which is included in the servers.vue -->
            <li class="list-group-item"
            style="cursor: pointer"
            @click="serverSelect">
<!-- 2.create a click function which link to serverselect function -->
                Server #{{ changeServerStatus.id }}
            </li>

</template>

<script>
import { serverBus } from '../../main.js';
export default {
  //3. create a prop
  props: ['changeServerStatus'],

  methods:{
    serverSelect(){
 // monitor data changes and process to serverbus
      serverBus.$emit('serverSelect',this.changeServerStatus);
    }
  }
}
</script>

<style>

</style>
