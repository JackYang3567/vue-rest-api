

<template>
     <div class="sidebar-panel">
        <ul id="modaldropdown" class="collapsible side-nav">
            <li><a href="#"><i class="fas fa-user"></i>My Profile</a></li>
            <li><a href="#"><i class="fas fa-sign-in-alt"></i>Sign In</a></li>
            <li><a href="#"><i class="fas fa-sign-out-alt"></i>Sign Out</a></li>
        </ul>         
    </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
