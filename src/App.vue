<template>
  <header>
    <div class="headerWrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />

  <div class="footerWrapper">

  </div>

</template>


<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>
.headerWrapper nav{
  height: 60px;
  background-color: var(--colour1);
  text-align: center;
  padding: 10px 0;
}

.headerWrapper nav a{
  line-height: 35px;
}

.headerWrapper{
  border-bottom: solid var(--colour3) 1px;
}
</style>
