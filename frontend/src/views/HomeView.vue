<template>
    <div id="homeContainer">
        <div id="welcomeContainer">
            <Welcome :apiData="apiData"/>
        </div>
        <div class="section2">
            <div id="bestPricesContainer">
                <BestPrices :apiData="apiData"/>
            </div>
            <div id="tableContainer">
                <CryptoTable :apiData="apiData" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Welcome from "../components/Welcome.vue"
import CryptoTable from "../components/CryptoTable.vue"
import BestPrices from "../components/BestPrices.vue";

export default {
    components: {
        Welcome,
        CryptoTable,
        BestPrices
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

#welcomeContainer{
    height: 100vh;
}


#tableContainer{
    display: flex;
    justify-content: center;
}

.section2{
    background-color: var(--colour1);
}


</style>
