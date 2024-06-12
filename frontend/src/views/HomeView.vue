<template>
    <div class="welcomeContainer">
        <Welcome />
    </div>
    <div class="tableContainer">
        <CryptoTable :apiData="apiData" />
    </div>
</template>

<script>
import axios from "axios";
import Welcome from "../components/Welcome.vue"
import CryptoTable from "../components/CryptoTable.vue"

export default {
    components: {
        Welcome,
        CryptoTable,
    },
    data() {
        return {
            apiData: null
        };
    },
    mounted() {
        this.fetchPrices();
        this.fetchInterval = setInterval(this.fetchPrices, 15000);
    },
    methods: {
        fetchPrices() {
            axios.get('http://localhost:3000/tableData')
                .then(res => {
                    this.apiData = res.data;
                })
                .catch(err => {
                    console.error('Error fetching prices:', err);
                });
        }
    },
}
</script>


<style scoped>

.tableContainer{
    display: flex;
    justify-content: center;
    background-color: var(--colour1);
}


</style>
