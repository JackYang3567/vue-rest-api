
import { mapState, mapActions, mapMutations } from 'vuex'
// import axios from 'axios';
// import store from '../store';
export default {
  computed: {
    ... mapState({      
        messages:   state => state.message.messages,
   }),   
 },
 created(){   
     this.$store.dispatch('message/SOCKET_getAllMessages')
 },
 methods: { 
  
  
  }
}
