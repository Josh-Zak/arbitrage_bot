<template>
  <header>
    <div class="headerWrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/calculator">Arbitrage Calculator</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="footerWrapper">
    <!-- maybe back to top button -->
      <nav>
        <RouterLink to="/calculator">Arbitrage Calculator</RouterLink>
      </nav>
      <h2>"The journey of a thousand miles begins with one step." - Lao Tzu</h2>
    </div>
  </footer>
  
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


.footerWrapper{
  background-color: #101720;
  text-align: center;
}


.footerWrapper nav{
  height: 60px;
  text-align: center;
  padding: 10px 0;
}

.footerWrapper nav a{
  line-height: 35px;
}

.footerWrapper h2{
  padding: 20px;
  color: var(--colour5);
}
</style>
