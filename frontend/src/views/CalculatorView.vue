<template>
    <div class="calculatorContainer">
        <Calculator />
    </div>
</template>

<script>

import Calculator from "../components/Calculator.vue"

export default {
    components: {
        Calculator,
    },
}

</script>



<style scoped>

.calculatorContainer{
    display: flex;
    justify-content: center;
    background-color: var(--colour1);
}


</style>
