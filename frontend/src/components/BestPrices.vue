<template>
    <div class="bestPricesContainer">
        <div class="bestBuy">
            <h2>Best exchange to buy from</h2>
            <h3 v-if="buyPrice != null">{{ buyName }} - <span id="buyPrice">{{ formatPrice(buyPrice) }}</span></h3>
            <h3 v-else><span id="buyPrice">Loading...</span></h3>
        </div>
        <div class="arbitrage">
            <div v-if="arbitrage > 0.0">
                <h3>There is an arbitrage</h3>
                <h2 id="arbitrageValue">{{ arbitrage }}%</h2>
            </div>
            <h3 v-else>There is currently no arbitrage. Check back later</h3>
        </div>
        <div class="bestSell">
            <h2>Best exchange to sell to</h2>
            <h3 v-if="sellPrice != null">{{ sellName }} - <span id="sellPrice">{{ formatPrice(sellPrice) }}</span></h3>
            <h3 v-else><span id="sellPrice">Loading...</span></h3>
        </div>
    </div>
</template>


<script>
export default{
    name: 'BestPrices',
    data() {
        return {
            buyName: null,
            buyPrice: null,
            sellName: null,
            sellPrice: null,
            arbitrage: 0,
        }
    },
    props: {
        apiData: {
            type: Array,
            required: true
        }
    },
    methods: {
        formatPrice(value) {
            return parseFloat(value).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    watch: {
        apiData(newData) {
            if (newData) {
                let bestBid = -Infinity;
                let bestBidName;
                let bestAsk = Infinity;
                let bestAskName;
                newData.forEach(item => {
                    if(!item || item.bid == null || item.ask == null || !item.name) return;
                    if(item.bid >= bestBid){
                        bestBid = item.bid;
                        bestBidName = item.name;
                    }
                    if(item.ask <= bestAsk){
                        bestAsk = item.ask;
                        bestAskName = item.name;
                    }
                    
                });
                this.buyPrice = bestAsk;
                this.buyName = bestAskName;
                this.sellPrice = bestBid;
                this.sellName = bestBidName;

                this.arbitrage = (this.sellPrice / this.buyPrice * 100 - 100).toFixed(2);
            }
        }
    },
}
</script>


<style scoped>

.bestPricesContainer{
    background: var(--colour1);
    display: flex;
    justify-content: center;
    padding: 6rem 2rem;
    gap: 2rem;
}

.bestBuy, .bestSell, .arbitrage{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bestBuy, .bestSell{
    text-align: center;
}


h2, h3{
    color: var(--colour5);
}

h2{
    font-size: 2rem;
}
h3{
    font-size: 1.5rem;
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




@media screen and (max-width: 1000px) {
    .bestPricesContainer{
        flex-direction: column;
        align-items: center;
    }

    .arbitrage{
        order: -1;
    }
}
</style>