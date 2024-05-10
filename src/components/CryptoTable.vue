<template>
    <table class="cryptoTable">
        <thead>
            <tr>
                <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Bitcoin</td>
                <td>$$$$$</td>
                <td>$$$$$</td>
            </tr>
        </tbody>
    </table>
</template>


<script>
export default{
    name: 'CryptoTable',
    data() {
        return {
            headers: ['name', 'buy price', 'sell price']
        }
    }
}
</script>


<style scoped>

td{
    padding: 20px;
}

</style>