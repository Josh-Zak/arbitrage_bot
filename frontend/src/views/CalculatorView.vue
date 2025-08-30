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
    flex-direction: column;
    align-items: center;
    background-color: var(--colour2);
}


</style>
