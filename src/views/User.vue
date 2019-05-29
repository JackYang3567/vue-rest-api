<template>
    <div class="segments-page2">
        <div class="container">
        <h2>  {{this.$route.path}} </h2>
         <div class="content" v-for="user in users"
            :key="user.id">
                <div >email:{{ user.email }}</div>
                <div class="slider-caption">
                  <span>{{user.gender}}</span>
                  <h2>{{user.username}}</h2>
                  <p>{{user.mobile_phone}}</p>
                </div>
        </div>
      </div>
    </div>
  </template>
  <script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  computed: mapState({
    users: state => state.users.users
  }),
  created () {
    this.$store.dispatch('users/getAllUsers')
  }
}
</script>
