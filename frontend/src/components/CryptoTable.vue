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
                    <td class="name" rowspan="2">Bitcoin<br>24h change</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                </tr>
                <tr>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                </tr>
                <tr>
                    <td class="name" rowspan="2">Ethereum<br>24h change</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                    <td>buy price</td>
                </tr>
                <tr>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
                    <td>sell price</td>
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
            headers: ['name', 'best price', 'book1', 'book2', 'book3', 'book4', 'book5', 'book6', 'book7', 'book8']
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
}
</style>