<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink :to="{ name: 'about-view' }">About</RouterLink> |
  </div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
@media (max-width: 359px) {
  #nav {
    display: grid;
  }
}
@media (min-width: 360px) {
  #nav {
    padding-left: 80px;
    padding-right: 80px;
  }
}
@media (min-width: 411px) {
  #nav {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
