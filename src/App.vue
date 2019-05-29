<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <Header />
    <!-- <DropdownMenu />
    <Sidebar /> 
    <Modal />-->
    <main class="main">
       <transition :name="transitionName">
         <router-view class="child-view" />
       </transition >
    </main>
   <!-- <FooterFloatBar /> -->
    
    <Footer />
    <BackToTop bgColor="#f90808" svgFillColor="#2c3e50"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/layouts/Headerbar.vue'
import Footer from '@/layouts/Footerbar.vue'
import FooterFloatBar from '@/layouts/FooterFloatBar.vue'
import Modal from '@/layouts/Modal.vue'
import Sidebar from '@/layouts/Sidebar.vue'
import DropdownMenu from '@/layouts/DropdownMenu.vue'
//import BackToTop from 'vue-totop'
import BackToTop from '@/layouts/BackToTop.vue'



export default {
  name: 'home',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
  components: {
    Header,
    Footer,
    FooterFloatBar,
    Modal,
    Sidebar,
    BackToTop,
    DropdownMenu
  }
}
</script>
<style  src="../public/css/style.css" ></style>
<style scoped>
#app {
  

  }
  .main {
    padding-bottom: 10px;
    max-width: 1140px;
    margin: 0 auto;
    position: relative;
}
</style>
