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
        <h2>下面是greeting的子路由组件projectsNew：路由后面加/pn</h2>
        <router-view></router-view>
        <slot></slot>
        <slot name="part1"></slot>
        <slot name="part2"></slot>
        <slot name="part3"></slot>
<!--        插槽作用域-->
        <slot name="part4" :username="user_name"></slot>
        <slot name="part5" :username="user_name"></slot>
        <slot name="part6" :username="user_name"></slot>
    </div>
</template>

<script>
    export default {
        name: "greeting",
        props: {
            msg: String,
        },

        data(){
            return{
                // msg: "插值表达式演示",
                title: '数据绑定',
                flag: true,
                age: 20,
                user_name:"part的username"
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