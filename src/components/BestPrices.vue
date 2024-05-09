<template>
    <div class="bestPricesWrapper">
        <div class="bestBuy">
            <h2>Cheapest exchange to buy from</h2>
            <h3>{{ buyName }} - {{ buyPrice }}</h3>
        </div>
        <div class="arbitrage">
            <h3 v-if="arbitrage">There is an arbitrage</h3>
            <h3 v-else>There is currently no arbitrage</h3>
            <h2>{{ percentArbitrage }}</h2>
        </div>
        <div class="bestSell">
            <h2>Best exchange to sell on</h2>
            <h3>{{ sellName }} - {{ sellPrice }}</h3>
        </div>
    </div>
</template>


<script>
export default{
    name: 'BestPrices',
    data() {
        return {
            buyName: 'buyname',
            buyPrice: 'buyprice',
            sellName: 'sellname',
            sellPrice: 'sellprice',
            arbitrage: false,
            percentArbitrage: null
        }
    }
}
</script>


<style scoped>
.bestPricesWrapper{
    display: flex;
    flex-direction: row;
}

.bestBuy, .bestSell, .arbitrage{
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
}

h2, h3{
    color: var(--colour5);
}

h2{
    font-size: 32px;
}
h3{
    font-size: 24px;
}

</style>