<template>
    <div class="bestPricesWrapper">
        <div class="bestBuy">
            <h2>Cheapest exchange to buy from</h2>
            <h3>{{ buyName }} - {{ buyPrice }}</h3>
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
            sellPrice: 'sellprice'
        }
    }
}
</script>


<style scoped>
.bestPricesWrapper{
    display: flex;
    flex-direction: row;
}

.bestBuy, .bestSell{
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