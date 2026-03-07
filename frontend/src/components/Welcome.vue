<template>
    <div id="welcomeWrapper">
        <div class="welcomeText">
            <h1>Exchange Your <span id="bitcoinText">Bitcoin</span> with Confidence</h1>
            <h3>Find the best prices across different crypto exchanges</h3>
        </div>
        <Summary />
        <div id="scrollWrapper" :class="['scrollWrapper', { hidden: !showScroll }]">
            <img id="scroll-icon" src="../assets/scroll.svg">
            <h3>Scroll Down For More</h3>
        </div>
    </div>
</template>


<script>
import Summary from './Summary.vue';

export default {
    name: 'Welcome',
    components: {
        Summary
    },
    data() {
        return {
            showScroll: true
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.showScroll = window.scrollY === 0;
        }
    }
}
</script>


<style scoped>
#welcomeWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}


.welcomeText{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10rem 2rem 3rem 2rem;
}

.welcomeText h1{
    font-size: 3rem;
    color: var(--colour5);
    text-align: center;
}
.welcomeText h3{
    font-size: 1.5rem;
    color: var(--colour5);
    text-align: center;
}

#bitcoinText{
    color: var(--colour-bitcoin);
}

#scroll-icon{
    width: 30px;
    filter: invert(0.8);
}

#scrollWrapper{
    margin: 16rem 0 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: opacity 0.5s ease;
    opacity: 1;
}

#scrollWrapper h3{
    color: var(--colour5);
}

#scrollWrapper.hidden {
  opacity: 0;
}


@media screen and (max-width: 1000px) {
    .welcomeText{
        margin-top: 12%;
    }
    
    
    #scrollWrapper{
        margin: 3rem 0;
    }
}

</style>