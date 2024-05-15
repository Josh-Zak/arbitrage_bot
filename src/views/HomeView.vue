<template>
    <div class="welcomeContainer">
        <Welcome />
    </div>
    <div class="exchangeContainer">
        <!-- <Exchange name="Binance"/>
        <Exchange name="Kraken"/>
        <Exchange name="Coinbase"/> -->
        <!-- <Exchange name="Exchange 4"/>
        <Exchange name="Exchange 5"/> -->
    </div>
    <div class="tableContainer">
        <CryptoTable />
    </div>

</template>

<script>
import Exchange from "../components/Exchange.vue"
import Welcome from "../components/Welcome.vue"
import CryptoTable from "../components/CryptoTable.vue"

export default {
    components: {
        Exchange,
        Welcome,
        CryptoTable,
    },
}
</script>


<style scoped>
.exchangeContainer{
    display: flex;
    justify-content: space-evenly;
}

.tableContainer{
    display: flex;
    justify-content: center;
    background-color: var(--colour1);
}

.welcomeContainer, .tableContainer{
    border-bottom: solid var(--colour3) 1px;
}

</style>
