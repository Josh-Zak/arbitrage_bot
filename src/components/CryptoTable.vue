<template>
    <table class="cryptoTable">
        <thead>
            <tr>
                <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name" rowspan="2">Bitcoin</td>
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
                <td class="name" rowspan="2">Bitcoin</td>
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

td, th{
    border-left: solid var(--colour4) 2px;
    border-right: solid var(--colour4) 2px;
    color: var(--colour5);
}

thead th{
    border: solid var(--colour4) 2px;
}

td:first-of-type {
    vertical-align: top;
}

.name, th{
    background-color: var(--colour1);
}

tr:nth-child(2n){
    border-bottom: solid var(--colour4) 2px;
    background-color: var(--colour3);
}

tr:nth-child(2n+1){
    background-color: var(--colour2);
}

table{
    border-collapse: collapse;
    margin: 30px;
    width: 1280px;
}
</style>