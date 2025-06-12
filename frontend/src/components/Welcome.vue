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
    background: var(--colour1);
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.welcomeText h1{
    font-size: 48px;
    color: var(--colour5);
}
.welcomeText h3{
    font-size: 24px;
    color: var(--colour5);
}

#bitcoinText{
    color: var(--colour-bitcoin);
}

#scroll-icon{
    width: 30px;
    filter: invert(0.8);
}

#scrollWrapper{
    margin-top: auto;
    margin-bottom: 10vh;
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

</style>