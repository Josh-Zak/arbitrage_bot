<template>
    <div class="calculator-component-wrapper">
        <h1 class="heading">Arbitrage Calculator</h1>
        <h3 class="subheading">Calculate profit and loss based on your buy price, sell price, and amount of Bitcoin.</h3>
        
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
        }
    },
    computed: {
        getProfit(){
            if(this.buyPrice && this.sellPrice && this.amount){
                return  ((this.sellPrice - this.buyPrice) * this.amount).toFixed(2);
            }
            return "0.00";
        }
    },
}

</script>


<style>

/* Component wrapper */
.calculator-component-wrapper{
    margin-top: 60px;
    margin-bottom: 60px;
}


/* Heading and subheading */
.heading{
    text-align: center;
    color: var(--colour5);
}

.subheading{
    text-align: center;
    color: var(--colour5);
    
}


/* Calculator box */
.box {
    border: 2px solid var(--colour3);
    border-radius: 20px;
    margin: 20px;
}


input {
    border-radius: 5px;
    border: none;
    min-height: 100%;
}

.input, .profit{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 10px 20px;
    color: var(--colour5);
    font-size:x-large;
}

.profit {
    margin-top: 20px;
    border-top: 1px solid var(--colour3);
}

</style>