<template>
    <div class="layui-main">
        <div class="layui-tab">
            <div class="layui-card-body">
                <div class="layui-fluid">
                    <div class="box layui-text">
                    <h1>Message</h1>
                     <h1>Message</h1>
                       <h1>Message</h1>
                         <h1>Message</h1>
                       

                         <p>==={{messages}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


import { mapState, mapMutations } from 'vuex'



let self = this

export default {
  data () {
    return {
      error: false,
      error_message: '',
     
    }
  },
  
  mounted() {
    
  },

  computed: mapState({
    // users: state => state.users.users
  }),
  created () {
  
    // this.$store.dispatch('users/getAllUsers')
    self = this
  },
  methods: {
       clickButton: function (data) {
            // $socket is socket.io-client instance
            this.$socket.emit('new_msg', data)
        }
  }
}
</script>
<style scoped>
 
</style>
