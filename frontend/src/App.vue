<template>
    <div>
        <header>
            <div class="headerWrapper">
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/calculator">Calculator</RouterLink>
                    <!-- <RouterLink to="/about">About</RouterLink> -->
                </nav>
            </div>
        </header>

        <RouterView />

        <footer>
            <div class="footerWrapper">
                <div class="navWrapper">
                    <nav>
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/calculator">Arbitrage Calculator</RouterLink>
                    </nav>
                </div>
                <p class="disclaimer">This site is 100% for entertainment purposes only and does not involve real money betting.
                        If you or someone you know has a gambling problem and wants help, call 1-800 GAMBLER.
                        This service is intended for adult users only.
                </p>
                <hr>
                <div class="author">
                    <a href="https://www.linkedin.com/in/joshzak19/" target="_blank" rel="noopener noreferrer">
                        Developed by Josh Zak | Software Engineer
                    </a>
                </div>
            </div>

            <!-- maybe back to top button -->
            <!-- <h2 class="quote">"The journey of a thousand miles begins with one step." - Lao Tzu</h2> -->
        </footer>
    </div>
</template>


<!-- <script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script> -->


<style scoped>

.headerWrapper nav{
  height: 70px;
  background-color: var(--colour1);
  text-align: center;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.headerWrapper nav a{
  line-height: 35px;
  color: var(--colour4);
  font-size: x-large;
  margin: 0px 15px;
  width: 100px;
}

.headerWrapper nav a:hover{
    color: var(--colour5);
}

.headerWrapper{
  border-bottom: solid var(--colour3) 1px;
}



footer{
    background-color: var(--colour2);
    display: flex;
    justify-content: center;
}

.footerWrapper{
    width: 1280px;
}


.disclaimer{
    font-size: medium;
    margin: 0 100px 20px 150px;
    color: var(--colour4);
    text-align: center;
}

.navWrapper nav{
    display: flex;
    justify-content: center;
}

.navWrapper nav a {
    text-align: center;
    color: var(--colour4);
    margin: 20px 40px;
    width: 150px;
}
.navWrapper nav a:hover{
    color: var(--colour5);
}

hr{
    border-color: var(--colour4);
}

.author{
    margin: 20px 20px 20px 0;
    text-align: right;
}

.author a{
    color: var(--colour4);
}

</style>
