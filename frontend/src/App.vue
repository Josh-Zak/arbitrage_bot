<template>
    <div>
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
                <h1 class="statement">Buy/Sell. Bitcoin. Confidently.</h1>
                <h3 class="disclaimer">This site is 100% for entertainment purposes only and does not involve real money betting.
                        If you or someone you know has a gambling problem and wants help, call 1-800 GAMBLER.
                        This service is intended for adult users only.
                </h3>
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/calculator">Arbitrage Calculator</RouterLink>
                </nav>
                <div class="from">
                    Developed by Josh Zak | Software Engineer
                </div>














            <!-- maybe back to top button -->
                <!-- <div class="column">
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
                </div> -->
            </div>
        </footer>
    </div>
</template>


<!-- <script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script> -->


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
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  position: relative;
}


.footerWrapper nav{
  height: 60px;
  text-align: center;
  padding: 10px 0;
}

.footerWrapper nav a{
  line-height: 35px;
}

.quote, .disclaimer, .statement{
  padding: 10px;
  color: var(--colour5);
  text-align: center;
}

.from{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: var(--colour5);
}


.column{
	flex: 1;
}

nav a{
    margin: 30px;
}

nav{
    margin-top: 40px;
}







</style>
