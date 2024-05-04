<template>
    <div class="box">
        <div class="top">
            <h2>{{ name }}</h2>
        </div>
        <div class="bottom">
            <div class="buy">
                <h3>Buy price</h3>
                <h4>$$$</h4>
            </div>
            <div class="sell">
                <h3>Sell price</h3>
                <h4>$$$</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Exchange',
    props: [
        'name'
    ]
}
</script>


<style scoped>

.box{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    border: solid 1px black;
    border-radius: 15px;
    overflow: hidden;
    margin: 20px;
}

.top{
    flex: 2;
}

.bottom{
    flex: 3;
}


.top, .bottom{
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom{
    border-top: solid 1px black;
}

.buy, .sell{
    flex: 1;
    height: 100%;
    text-align: center;
    padding: 30px 0;
}

.buy{
    background-color: rgba(0, 255, 0, 0.5);
    border-right: solid 1px black;
}

.sell{
    background-color: rgba(255, 0, 0, 0.5);
}


</style>