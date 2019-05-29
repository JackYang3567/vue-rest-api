
<template>
 <div class="sidebar-panel">
        <ul id="slide-out" class="collapsible side-nav">
            <li class="list-top">
                 <a href="/"><i class="fas fa-home"></i>Home </a>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-building"></i>Properties<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <a href="/properties">Properties </a></li>
                        <li> <a href="/properties-details">Properties Details </a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-user"></i>Agent<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <a href="/agent">Agent </a></li>
                        <li> <a href="/agent-details">Agent Details </a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-rss"></i>Blog<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <a href="/blog">Blog </a></li>
                        <li> <a href="/blog-single">Blog Single </a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-user"></i>Account<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <a href="/profile">Profile </a></li>
                        <li> <a href="/signin">Sign In </a></li>
                        <li> <a href="/signup">Sign Up </a></li>
                        <li> <a href="/forgot-password">Forgot Password </a></li>
                        <li> <a href="/settings">Settings </a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="collapsible-header">
                    <i class="fas fa-clone"></i>Pages<span><i class="fas fa-angle-right right"></i></span>
                </div>
                <div class="collapsible-body">
                    <ul>
                        <li> <a href="/about">About </a></li>
                        <li> <a href="/features">Features </a></li>
                        <li> <a href="/services">Services </a></li>
                        <li> <a href="/gallery">Gallery </a></li>
                        <li> <a href="/portfolio">Portfolio </a></li>
                        <li> <a href="/coming-soon">Coming Soon </a></li>
                        <li> <a href="/page-not-found">Page Not Found </a></li>
                        <li> <a href="/faq">Faq </a></li>
                        <li> <a href="/testimonial">Testimonial </a></li>
                        <li> <a href="/products">Products List </a></li>
                    </ul>
                </div>
            </li>
            <li> <a href="/coming-soon"><i class="fas fa-clock"></i>Coming Soon </a></li>
            <li> <a href="/faq"><i class="fas fa-question"></i>Faq </a></li>
            <li> <a href="/contact"><i class="fas fa-envelope"></i>Contact </a></li>
            <li> <a href="/login"><i class="fas fa-sign-in-alt"></i>Login </a></li>
            <li> <a href="/register"><i class="fas fa-user-plus"></i>Register </a></li>
            <li class="bg-specific"> <a href="/submit-properties"><i class="fas fa-folder-plus"></i>Submit Properties </a></li>
            <li> <a href="/"><i class="fas fa-sign-out-alt"></i>Log Out </a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
