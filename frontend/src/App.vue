<template>
    <div>
        <header>
            <div class="headerWrapper">
                <nav>
                    <div>Cryptotrage</div>
                    <div class="navLinks">
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/calculator">Calculator</RouterLink>
                    </div>
                </nav>
            </div>
        </header>

        <RouterView />

        <footer>
            <div class="footerWrapper">
                <nav class="navWrapper">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/calculator">Calculator</RouterLink>
                </nav>
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

        </footer>
    </div>
</template>


<style scoped>

.headerWrapper nav{
  height: 70px;
  background-color: var(--colour1);
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.headerWrapper nav > div:first-child {
  position: absolute;
  left: 20px;
  font-weight: bold;
  font-size: x-large;
  color: var(--colour4);
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

.headerWrapper nav .navLinks {
  display: flex;
  justify-content: center;
  width: 100%;
}

.headerWrapper{
  border-bottom: solid var(--colour3) 1px;
  width: 100%;
}



footer{
    background-color: var(--colour2);
    display: flex;
    justify-content: center;
}

.footerWrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.disclaimer{
    font-size: medium;
    padding: 2rem;
    color: var(--colour4);
    text-align: center;
}


.navWrapper{
    display: flex;
    justify-content: center;
    width: 100%;
}

.navWrapper a {
    text-align: center;
    color: var(--colour4);
    margin: 1rem 1rem;
}
.navWrapper a:hover{
    color: var(--colour5);
}

hr{
    border-color: var(--colour4);
    width: calc(100% - 4rem);
}

.author{
    margin: 20px 20px 20px 0;
    text-align: right;
}

.author a{
    color: var(--colour4);
}

</style>
