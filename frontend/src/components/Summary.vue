<template>
    <div class="summaryWrapper">
        <div class="summaryContainer">
            <SummaryBox id="box1" :header="'header 1'" :body="'body 1'" />
            <SummaryBox id="box2" :header="'header 2'" :body="'body 2'" />
            <SummaryBox id="box3" :header="'header 3'" :body="'body 3'" />
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