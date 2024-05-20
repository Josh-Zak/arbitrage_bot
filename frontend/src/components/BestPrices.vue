<template>
    <div class="bestPricesWrapper">
        <div class="bestBuy">
            <h2>Cheapest exchange to buy from</h2>
            <h3>{{ buyName }} - <span id="buyPrice">{{ buyPrice }}</span></h3>
        </div>
        <div class="arbitrage">
            <div v-if="arbitrage > 0.0">
                <h3>There is an arbitrage</h3>
                <h2 id="arbitrageValue">{{ arbitrage }}%</h2>
            </div>
            <h3 v-else>There is currently no arbitrage</h3>
        </div>
        <div class="bestSell">
            <h2>Best exchange to sell on</h2>
            <h3>{{ sellName }} - <span id="sellPrice">{{ sellPrice }}</span></h3>
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
            arbitrage: 0,
        }
    }
}
</script>


<style scoped>
.bestPricesWrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.bestBuy, .bestSell, .arbitrage{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bestBuy, .bestSell{
    width: 450px;
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

#buyPrice{
    color: green;
}

#sellPrice{
    color: red;
}

#arbitrageValue{
    text-align: center
}

</style>