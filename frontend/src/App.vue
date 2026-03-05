<template>
    <div>
        <header>
            <div class="headerWrapper">
                <div class="logo">Cryptotrage</div>
                <div class="navLinks">
                    <nav>
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/calculator">Calculator</RouterLink>
                    </nav>
                </div>
                <div class="hamburger">☰</div>
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

.headerWrapper{
	border-bottom: solid var(--colour3) 1px;
	background-color: var(--colour1);
	width: 100%;
	height: 70px;
	display: flex;
	flex-direction: row;
	align-items: center;
	/* justify-content: space-between; */
}

.headerWrapper :nth-child(1){
	margin-left: 2rem;
}
.headerWrapper :nth-last-child(1){
	margin-right: 2rem;
}

.logo{
  font-weight: bold;
  font-size: x-large;
  color: var(--colour4);
  flex: 1;
}

.hamburger{
	flex: 1;
	text-align: right;
	font-size: x-large;
	color: var(--colour4);
}

.headerWrapper nav a{
  line-height: 35px;
  color: var(--colour4);
  font-size: x-large;
  width: 100px;
}

.headerWrapper a:nth-child(1){
	margin-right: 4rem;
}

.headerWrapper nav a:hover{
    color: var(--colour5);
}

.headerWrapper .navLinks {
	display: flex;
	justify-content: center;
	width: 100%;
	flex: 1;
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
    align-self: flex-end;
    padding: 2rem 2rem 2rem 0;
    text-align: right;
}

.author a{
    color: var(--colour4);
}



@media screen and (max-width: 700px) {
    .headerWrapper .navLinks{
        display: none;
    }

    .hamburger{
		text-align: right;
		/* display: flex; */
    }
}

</style>
