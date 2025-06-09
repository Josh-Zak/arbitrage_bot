<template>
    <div class="summaryBoxWrapper">
        <h1>{{ header }}</h1>
        <h3>{{ body }}</h3>
    </div>
</template>


<script>
export default{
    name: 'SummaryBox',
    props: {
        header: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    }
}
</script>


<style scoped>
.summaryBoxWrapper{
    flex: 1;
    margin: 20px;
    padding: 20px;
    border: 2px solid var(--colour3);
    border-radius: 10px;
}
</style>
