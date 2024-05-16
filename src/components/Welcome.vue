<template>
    <div>
        <h1>Exchange Your <span id="bitcoinText">Bitcoin</span> with Confidence</h1>
        <h3>Find arbitrage across different crypto exchanges</h3>
    </div>
    <BestPrices />
</template>


<script>
import BestPrices from './BestPrices.vue';

export default {
    name: 'Welcome',
    components: {
        BestPrices
    }
}
</script>


<style scoped>
div{
    background: var(--colour1);
    height: 180px;
    width: 100%;
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
    color: #f7931a;
}
</style>