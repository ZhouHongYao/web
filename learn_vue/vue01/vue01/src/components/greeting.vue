<template>
    <div>
        <!-- 插值表达式 -->
        <h3>{{msg}}</h3>
        <span v-bind:title="title">v-bind:title，数据绑定</span>
        <p v-if="flag">v-if演示：每次都会重新删除或者创建元素</p>
        <p v-show="flag">v-show演示：只是改变display属性</p>
        <p>v-if, v-else-if, v-else演示：</p>
        <p v-if="age>=70">age &gt;= 70</p>
        <p v-else-if="age>=18">age &gt;= 18</p>
        <p v-else-if="age<18">age &lt; 18</p>
        <p @click="age=age+1">@click点击，age加1，age：{{age}}</p>
        <p v-on:click="deage">v-on:click，增加事件监听，age减1，age：{{age}}</p>
    </div>
</template>

<script>
    export default {
        name: "greeting",
        props: {
            // msg: String,
            // title2: String
        },
        data(){
            return{
                msg: "插值表达式演示",
                title: '数据绑定',
                flag: true,
                age: 20,
            }
        },
        methods:{
            deage(){
                this.age = this.age - 1;
            }
        }
    }
</script>

<style scoped>

</style>