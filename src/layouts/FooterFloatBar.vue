
<template>

    <div class="footer-navbar">
        <div class="container">
            <div class="row">
                <div class="col s1">
                    <div class="content-left">
                        <router-link to="/" data-activates="slide-out" class="sidebar"><i class="fas fa-bars"></i></router-link>
                    </div>
                </div>
                <div class="col s2">
                    <div class="content-center">
                        <a href="/"><i class="fas fa-home"></i></a>
                    </div>
                </div>
                <div class="col s2">
                    <div class="content-center">
                        <router-link to="/"> <i class="fas fa-shopping-cart"></i></router-link>
                    </div>
                </div>
                <div class="col s2">
                    <div class="content-center">
                        <router-link to="/"><i class="fas fa-users"></i></router-link>
                    </div>
                </div>
                <div class="col s2">
                    <div class="content-center">
                        <router-link to="/"> <i class="fas fa-chess-queen"></i></router-link>
                    </div>
                </div>
                <div class="col s2">
                    <div class="content-center">
                        <router-link to="/"> <i class="fas fa-phone"></i></router-link>
                    </div>
                </div>
                <div class="col s1">
                    <div class="content-right">
                        <router-link to="/" class="modal-trigger">
                            <i class="fas fa-user"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterFloatBar',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
