<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group" v-if >
          <app-server v-for="server in servers"
                      :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
import Server from './ServerStatus.vue';
export default {
  data: function(){
    return {
      servers:[
        {id: 1, status:'no.1 is the only one real server'},
        {id: 2, status:'no.3 is a real human'},
        {id: 3, status:'am not a server'},
        {id: 4, status:'quiet!'}
      ]
    };
  },
  components:{
    appServer: Server
  }
}
</script>

<style>

</style>
