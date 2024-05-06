<template>
    <div class="welcomeContainer">
        <Welcome />
    </div>
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
import Welcome from "../components/Welcome.vue"

export default {
    components: {
        Exchange,
        Welcome
    },
}
</script>


<style scoped>
.exchangeContainer{
    display: flex;
    justify-content: space-evenly;
}


</style>
