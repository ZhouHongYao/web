<template>
    <!-- 插值表达式 -->
    <h3>{{msg}}</h3>
</template>

<script>
    export default {
        name: "greeting",
        // props: {
        //     msg: String
        // },
        data(){
            return{
                msg: "greeting component`s msg"
            }
        }
    }
</script>

<style scoped>

</style>