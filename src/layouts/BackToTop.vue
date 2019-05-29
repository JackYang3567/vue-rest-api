<template>
    <div id="back-to-top" class="hidden" :style="{'background': bgColor}"  v-show="showIcon">
      
        <div @click="goTop()">
            <svg viewBox="0 0 24 24" >
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                    :fill="svgFillColor">
                </path>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
  props: ['type','top','right','bottom','size','color','duration','bgColor','svgFillColor'],
    data () {
    return {
      showIcon: false,
      scrollTop: 0,
      defaultType: 0,
      defaultTop: 400,
      defaultRight: 30,
      defaultBottom: 30,
      defaultSize: 24,
      defaultColor: '#666',
      defaultDuration: 300
    }
  },
  beforeDestroy () {
    window.removeEventListener("scroll",this.handelScroll, false)
  },
  mounted () {
    this.type ? this.defaultType = this.type: ''
    this.top ?  this.defaultTop = this.top: ''
    this.right ? this.defaultRight = this.right: ''
    this.bottom ? this.defaultBottom = this.bottom: ''
    this.size ? this.defaultSize = this.size: ''
    this.color ? this.defaultColor = this.color: ''
    this.duration ? this.defaultDuration = this.duration: ''
    window.addEventListener('scroll', this.handelScroll, false)
  },
  methods: {
    handelScroll () {
      this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      this.scrollTop > this.defaultTop ? this.showIcon = true : this.showIcon = false
    },
    goTop () {
      window.requestAnimationFrame = (function() {
        return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60)
          }
      })()
      var step = this.scrollTop / (this.defaultDuration / (1000 / 60)) >> 0
      var self = this
      function fn () {
        if (self.scrollTop >= 0) {
          self.scrollTop -= step
          document.documentElement.scrollTop = document.body.scrollTop = self.scrollTop
          fn.rafTimer = requestAnimationFrame(fn)
        } else {
          document.body.scrollTop = 0
          cancelAnimationFrame(fn.rafTimer)
        }
      }
      fn.rafTimer = requestAnimationFrame(fn)
    }
  }
}
</script>
<style scoped>
  #back-to-top {
    
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    bottom: 40px;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
    -moz-box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
    color: #fff;
    cursor: pointer;
    display: block;
    height: 56px;
    opacity: 1;
    outline: 0;
    position: fixed;
    right: 20px;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-transition: bottom .2s,opacity .2s;
    -o-transition: bottom .2s,opacity .2s;
    -moz-transition: bottom .2s,opacity .2s;
    transition: bottom .2s,opacity .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 56px;
    z-index: 100;
  }
  #back-to-top svg {
    display: block;
    fill: currentColor;
    height: 50px;
    margin: 5px auto 0;
    width: 50px;
}
.hidden{
  display: none;
}

</style>
