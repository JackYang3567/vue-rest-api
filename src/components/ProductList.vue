<template>
     <div class="row" >
        <div class="col s6" :style="marginBottom" v-for="product in products"
          :key="product.id">
            <div class="content">
                <img :src="product.pic" />
                <div class="text">
                   {{ product.title }} - {{ product.price | currency }}
                    <br>
                    <button
                      :disabled="!product.inventory"
                      @click="addProductToCart(product)">
                      Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      marginBottom: { 'margin-bottom': '50px' }
    }
  },
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
