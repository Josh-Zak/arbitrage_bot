<template>
    <div class="exchangeContainer">
        <Exchange name="Binance"/>
        <Exchange name="Kraken"/>
        <Exchange name="Coinbase"/>
        <!-- <Exchange name="Exchange 4"/>
        <Exchange name="Exchange 5"/> -->
    </div>

</template>

<script>
import Exchange from "../components/Exchange.vue"

export default {
    components: {
        Exchange
    },
}
</script>


<style>
.exchangeContainer{
    display: flex;
    justify-content: space-evenly;
}
</style>
