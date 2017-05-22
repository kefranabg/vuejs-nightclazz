<template>
  <div class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand">
          <router-link to="/">My first vuejs App !</router-link>
        </a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/favorites">Favorites</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
ul {
  margin: 0;
}
</style>