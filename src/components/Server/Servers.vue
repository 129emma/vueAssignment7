<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group" v-if >
          <!-- 5. render component -->
          <!-- 6. loop servers list -->
          <!-- 7. connect props from ServerStatus.vue to loop item-->
          <app-server v-for="serveritem in servers"
                      :changeServerStatus="serveritem"></app-server>
        </ul>
    </div>
</template>

<script>
//4. import serverstatus component from that file
import Server from './ServerStatus.vue';
export default {
  data: function(){
    return {
      servers:[
        {id: 1, status:'the only real server'},
        {id: 2, status:'a real human'},
        {id: 3, status:'am not a server'},
        {id: 4, status:'quiet!'}
      ]
    };
  },
//5. register component
  components:{
    appServer: Server
  }
}
</script>

<style>

</style>
