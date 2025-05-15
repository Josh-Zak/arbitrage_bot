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
            amount: null
        }
    },
    computed: {
        getProfit(){
            return  (this.sellPrice - this.buyPrice) * this.amount;
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

</style>