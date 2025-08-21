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
                <div class="columns">
                    <div class="column left">
                        <p class="disclaimer">This site is 100% for entertainment purposes only and does not involve real money betting.
                                If you or someone you know has a gambling problem and wants help, call 1-800 GAMBLER.
                                This service is intended for adult users only.
                        </p>
                    </div>
                    <div class="column right">
                        <div class="navWrapper">
                            <nav>
                                <RouterLink to="/">Home</RouterLink>
                                <RouterLink to="/calculator">Arbitrage Calculator</RouterLink>
                            </nav>
                        </div>
                        <div class="author">
                            Developed by Josh Zak | Software Engineer
                        </div>
                    </div>
                </div>

            <!-- maybe back to top button -->
            <!-- <h2 class="quote">"The journey of a thousand miles begins with one step." - Lao Tzu</h2> -->
            </div>
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
  margin: 0px 15px
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

.columns{
    display: flex;
    justify-content: space-around;
}

.column{
    width: 50%;
}

.left .disclaimer{
    font-size: medium;
    margin: 50px 20px 50px 0px;
    color: var(--colour5);
}

.column.right{
    position: relative;
}

.navWrapper {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
}

.navWrapper nav{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.navWrapper nav a {
    text-align: center;
    color: var(--colour4);
}
.navWrapper nav a:hover{
    color: var(--colour5);
}

.author{
    position: absolute;
    bottom: 0;
    right: 0;
    color: var(--colour5);
}

</style>
