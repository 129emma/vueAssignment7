<template>

            <li class="list-group-item"
            style="cursor: pointer"
            @click="serverSelect">
                Server #{{ server.id }}
            </li>

</template>

<script>
import { serverBus } from '../../main.js';
export default {
  props: ['server'],
  methods:{
    serverSelect(){
      serverBus.$emit('serverSelect',this.server);
    }
  }
}
</script>

<style>

</style>
