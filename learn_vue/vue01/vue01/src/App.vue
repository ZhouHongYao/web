<!-- template用户展示给用户, 相当与MVVM模式中的V -->
<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- 在父组件中给子组件传值 -->
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <!--    <greeting msg="greeting component"/>-->
<!--        <greeting id="1"/>-->
<!--        <greeting id="2"/>-->
<!--        <greeting :title2="title"/>-->
        <greeting></greeting>
        <projects></projects>
        <projectsNew></projectsNew>
        <def_table></def_table>
    </div>
</template>

<script>
    // 导入子组件
    import HelloWorld from './components/HelloWorld.vue'
    import greeting from "./components/greeting";
    import projects from "./components/projects";
    import projectsNew from "./components/projectsNew";
    import def_table from "./components/def_table";

    export default {
        // 定义组件名称
        name: 'app',
        components: {    // 声明子组件
            HelloWorld,
            greeting,
            projects,
            projectsNew,
            def_table,
        },
        data(){
            return{
                msg: "greeting component`s msg",
                // title: 'title属性'
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
