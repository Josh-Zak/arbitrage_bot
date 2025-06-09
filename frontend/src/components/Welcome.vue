<template>
    <div class="welcomeWrapper">
        <div class="welcomeText">
            <h1>Exchange Your <span id="bitcoinText">Bitcoin</span> with Confidence</h1>
            <h3>Find the best prices across different crypto exchanges</h3>
        </div>
        <Summary />
        <BestPrices :apiData="apiData"/>
    </div>
</template>


<script>
import BestPrices from './BestPrices.vue';
import Summary from './Summary.vue';

export default {
    name: 'Welcome',
    components: {
        BestPrices,
        Summary
    },
    props: {
        apiData: {
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
.welcomeText{
    background: var(--colour1);
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1, h3{
    color: var(--colour5);
}

h1{
    font-size: 48px;
}
h3{
    font-size: 24px;
}

#bitcoinText{
    color: var(--colour-bitcoin);
}
</style>