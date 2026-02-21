<template>
    <div class="tableScroll">
        <table class="cryptoTable">
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="name" rowspan="2">Bitcoin
                        <!-- <br>24h change -->
                    </td>
                    <td>Buy Price</td>
                    <td v-for="(price, index) in exchangeData" :key="index">{{ formatPrice(price.ask) }}</td>
                </tr>
                <tr>
                    <td>Sell Price</td>
                    <td v-for="(price, index) in exchangeData" :key="index">{{ formatPrice(price.bid) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default{
    name: 'CryptoTable',
    data() {
        return {
            headers: ['Name', 'Best Price'],
            exchangeData: null
        }
    },
    props: {
        apiData: {
            type: Array,
            required: true
        }
    },
    watch: {
        apiData(newData) {
            if (newData) {
                this.headers = ['Name', 'Price'];
                newData.forEach(item => {
                    if(!item || !item.name) return;
                    this.headers.push(item.name);
                });
                this.exchangeData = newData;
            }
        }
    },
    methods: {
        formatPrice(value) {
            return parseFloat(value).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>


<style scoped>

td{
    padding: 20px;
}

td:not(.name){
    text-align: center;
}

td, th{
    color: var(--colour5);
    min-width: 110px;
}

thead th, .name{
    padding: 10px;
    font-weight: bold;
}

td:first-of-type {
    vertical-align: top;
}

.name, th{
    background-color: var(--colour1);
}

tr:nth-child(2n){
    background-color: var(--colour1);
}

tr:nth-child(2n+1){
    background-color: var(--colour2);
}

table{
    border-collapse: collapse;
    margin: 0 auto;
}

.tableScroll{
    margin: 30px;
    overflow-x: auto;
    width: 1280px;
    margin-bottom: 200px;
}
</style>