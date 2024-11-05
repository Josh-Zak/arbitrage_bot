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
		<div class="column">
			<nav>
				<RouterLink to="/calculator">Arbitrage Calculator</RouterLink>
				</nav>
				<h2 class="quote">"The journey of a thousand miles begins with one step." - Lao Tzu</h2>
		</div>
		<div class="column">
			<h3 class="disclaimer">This site is 100% for entertainment purposes only and does not involve real money betting.
				If you or someone you know has a gambling problem and wants help, call 1-800 GAMBLER.
				This service is intended for adult users only.
			</h3>
		</div>
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
  display: flex;
  align-items: center;
  margin-top: 30px;
}


.footerWrapper nav{
  height: 60px;
  text-align: center;
  padding: 10px 0;
}

.footerWrapper nav a{
  line-height: 35px;
}

.quote, .disclaimer{
  padding: 20px;
  color: var(--colour5);
}

.quote{
	text-align: center;
}

.column{
	flex: 1;
}







</style>
