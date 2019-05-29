
<template>
   <div class="container">
        <div class="slide">
            <div class="slider-slide owl-carousel owl-theme">
                <div class="content" v-for="slider in sliders"
                :key="slider.id">
                    <div class="mask"></div>
                    <img :src="slider.pic" alt="">
                    <div class="slider-caption">
                        <span>{{slider.caption.span_text}}</span>
                        <h2>{{slider.caption.h2_text}}</h2>
                        <p>{{slider.caption.p_text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    sliders: state => state.sliders.sliders
  }),
  created () {
    this.$store.dispatch('sliders/getAllSliders')
  }
}
</script>

<style scoped>
.slide {
    /* height: 230px; */
    margin-top: 10px;
}
</style>
