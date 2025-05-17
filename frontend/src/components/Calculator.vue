<template>
    <div class="box">
        <div class="input">
            <Label for="buyPrice">Buy Price</Label>
            <input type="number" v-model="buyPrice">
        </div>
        
        <div class="input">
            <Label for="sellPrice">Sell Price</Label>
            <input type="number" v-model="sellPrice">
        </div>

        <div class="input">
            <Label for="amount">Amount</Label>
            <input type="number" v-model="amount">
        </div>

        <!-- Put a toggle on USD/BTC -->
        <div class="toggle">
            <button
                class="btc-button"
                :class="[btcSelected ? 'active' : '']"
                @click="toggleCurrency"
                >BTC</button>
            <button
                class="usd-button"
                :class="[!btcSelected ? 'active' : '']"
                @click="toggleCurrency"
            >USD</button>
        </div>

        <div class="profit">    
            <Label>Profit/Loss</Label>
            <h3 id="profit">${{ getProfit }}</h3>
        </div>
    </div>

</template>



<script>

export default{
    name: "Calculator",
    data() {
        return{
            buyPrice: null,
            sellPrice: null,
            amount: null,
            btcSelected: true
        }
    },
    computed: {
        getProfit(){
            return  (this.sellPrice - this.buyPrice) * this.amount;
        }
    },
    methods: {
        toggleCurrency(){
            this.btcSelected = !this.btcSelected;
        }
    }
}

</script>


<style>

input {
    border-radius: 5px;
    border: none;
}

.input, .profit{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 10px 20px;
    color: var(--colour5);
    font-size: large;
}

.profit {
    margin-top: 20px;
}


.box {
    border: 2px solid var(--colour3);
    border-radius: 20px;
    margin: 20px;
}

.toggle{
    margin: 20px;
    text-align: right;
}

button{
    padding: 10px 55px;
}

.toggle .active{
    background-color: green;
}

.toggle button{
    background-color: var(--colour2);
}

.btc-button{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.usd-button{
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

</style>