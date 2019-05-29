<template>
 <div class="agent segments-page2">
    <div class="container">
           <h1>Shopping Cart Example</h1>
            <hr>
            <h2>Products</h2>
            <ProductList/>
            <hr>
            <ShoppingCart/>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ProductList from '@/components/ProductList.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'Products',
  data () {
    return {
      show: true
    }
  },
  computed: {
    increment () {
      return this.$store.commit('increment')
    },
    count () {
      return this.$store.state.count
    }
  },
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  

</style>
