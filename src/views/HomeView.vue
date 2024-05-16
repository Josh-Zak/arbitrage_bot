<template>
    <div class="welcomeContainer">
        <Welcome />
    </div>
    <div class="tableContainer">
        <CryptoTable />
    </div>

</template>

<script>
import Welcome from "../components/Welcome.vue"
import CryptoTable from "../components/CryptoTable.vue"

export default {
    components: {
        Welcome,
        CryptoTable,
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
