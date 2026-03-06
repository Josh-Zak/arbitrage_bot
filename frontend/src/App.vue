<template>
    <div>
        <header>
            <div class="headerWrapper">
                <div class="logo">Cryptotrage</div>
				<nav class="webNav">
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/calculator">Calculator</RouterLink>
				</nav>
                <div class="hamburger" @click="mobileNavOpen = !mobileNavOpen">☰</div>
            </div>
			<nav class="mobileNav" v-show="mobileNavOpen">
				<RouterLink to="/" @click="mobileNavOpen = !mobileNavOpen">Home</RouterLink>
				<RouterLink to="/calculator" @click="mobileNavOpen = !mobileNavOpen">Calculator</RouterLink>
			</nav>
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


<script>
export default{
	data(){
		return {
			mobileNavOpen: false
		}
	},
	methods: {
		handleResize(){
			if(window.innerWidth > 700){
				this.mobileNavOpen = false;
			}
		}
	},
	mounted(){
		window.addEventListener('resize', this.handleResize);
	},
	beforeUnmount(){
		window.removeEventListener('resize', this.handleResize);
	}
}
</script>


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
	visibility: hidden;
}

.webNav a, .mobileNav a{
  line-height: 35px;
  color: var(--colour4);
  font-size: x-large;
  width: 100px;
  background-color: var(--colour1);
}


.headerWrapper a:nth-child(1){
	margin-right: 4rem;
}

.headerWrapper .webNav a:hover{
    color: var(--colour5);
}

.headerWrapper .webNav {
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
    .headerWrapper .webNav{
        display: none;
    }

	.mobileNav{
		display: flex;
		flex-direction: column;
	}

	.mobileNav a{
		flex: 1;
		width: 100%;
		padding: 1rem 0 1rem 2rem;
	}

    .hamburger{
		text-align: right;
		visibility: visible;
    }
}

</style>
