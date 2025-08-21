<template>
    <div class="summaryWrapper">
        <div class="summaryContainer">
            <SummaryBox
                id="box1"
                :header="'Real-Time Price Data'"
                :body="'Get live data from multiple exchanges to find the best trading opportunities.'" 
            />
            <SummaryBox
                id="box2"
                :header="'Find Arbitrage'"
                :body="'Take advange of price discrepancies between different exchanges.'"
            />
            <SummaryBox
                id="box3"
                :header="'Calculate Profit'"
                :body="'Determine profit/loss at different price levels and quantities.'"
            />
        </div>
    </div>
</template>


<script>
    import SummaryBox from './SummaryBox.vue';

    export default {
        name: 'Summary',
        components: {
            SummaryBox
        }
    }
</script>


<style scoped>

.summaryWrapper{
    display: flex;
    justify-content: center;
}


.summaryContainer{
    width: 1280px;
    display: flex;
    justify-content: space-between;
}



</style>