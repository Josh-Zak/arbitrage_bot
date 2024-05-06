<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>
nav{
  height: 60px;
  background-color: var(--colour1);
  text-align: center;
  padding: 10px 0;
}

nav a{
  line-height: 35px;
}
</style>
