<template>
    <div class="calculator-component-wrapper">
        <h1 class="heading">Arbitrage Calculator</h1>
        <h3 class="subheading">Calculate profit and loss based on your buy price, sell price, and amount of Bitcoin.</h3>
        
        <div class="box">
            <div class="input-Field">
                <Label for="buyPrice">Buy Price</Label>
                <div class="input-wrapper">
                    <span class="dollar-sign">$</span>
                    <input type="number" placeholder="0.00" v-model="buyPrice">
                </div>
            </div>
            
            <div class="input-Field">
                <Label for="sellPrice">Sell Price</Label>
                <div class="input-wrapper">
                    <span class="dollar-sign">$</span>
                    <input type="number" placeholder="0.00" v-model="sellPrice">
                </div>
            </div>

            <div class="input-Field">
                <Label for="amount">Bitcoin Amount</Label>
                <div class="input-wrapper">
                    <span class="dollar-sign">₿</span>
                    <input type="number" placeholder="0" v-model="amount">
                </div>
            </div>

            <div class="profit">    
                <Label>Profit/Loss:</Label>
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
    background-color: var(--colour2);
    border-radius: 20px;
    margin: 20px;
}

label{
    display: block;
}

.dollar-sign{
    margin: 0px 10px;
}

.input-wrapper{
    border-radius: 5px;
    background-color: var(--colour1);
    display: flex;
    align-items: baseline;
}

input {
    flex: 1;
    border: none;
    min-height: 50px;
    background-color: transparent;
    font-size: 90%;
    outline: none;
    caret-color: var(--colour5);
    color: var(--colour5);
}

/* Remove arrows on input */
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}

.input-Field{
    flex-direction: column;
}

.input-Field, .profit{
    display: flex;
    gap: 10px;
    margin: 30px;
    color: var(--colour5);
    font-size: x-large;
}

.profit {
    justify-content: space-between;
    padding-top: 20px;
    border-top: 1px solid var(--colour3);
}

</style>