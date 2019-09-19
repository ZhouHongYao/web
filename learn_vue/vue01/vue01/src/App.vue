<!-- template用户展示给用户, 相当与MVVM模式中的V -->
<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- 在父组件中给子组件传值 -->
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!--    <greeting msg="greeting component"/>-->
<!--        <greeting id="1"/>-->
<!--        <greeting id="2"/>-->
<!--        <greeting :title2="title"/>-->
<!--        <greeting></greeting>-->
<!--        <projects></projects>-->
<!--        <projectsNew></projectsNew>-->
<!--        <def_table></def_table>-->
<!--        <messageBox></messageBox>-->
<!--        <Login></Login>-->
        <ul>
            <li><router-link :to="{name:'greeting'}">greeting</router-link></li>
            <li><router-link :to="{name:'Login'}">Login</router-link></li>
            <li><router-link :to="{name:'HelloWorld'}">HelloWorld</router-link></li>
            <li><router-link :to="{name:'messageBox'}">messageBox</router-link></li>
            <li><router-link :to="{name:'projects'}">projects</router-link></li>
            <li><router-link :to="{name:'projectsNew'}">projectsNew</router-link></li>
            <li><router-link :to="{name:'def_table'}">def_table</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    // 导入子组件
    // import HelloWorld from './components/HelloWorld.vue'
    // import greeting from "./components/greeting";
    // import projects from "./components/projects";
    // import projectsNew from "./components/projectsNew";
    // import def_table from "./components/def_table";
    // import messageBox from "./components/messageBox";
    // import Login from "./components/Login";

    export default {
        // 定义组件名称
        name: 'app',
        components: {    // 声明子组件
            // HelloWorld,
            // greeting,
            // projects,
            // projectsNew,
            // def_table,
            // messageBox,
            // Login
        },
        data(){
            return{
                msg: "greeting component`s msg",
                // title: 'title属性'
            }
        },
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
