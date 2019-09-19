import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

// 2. Define route components 导入组件
import greeting from "../components/greeting";
import Login from "../components/Login";
import HelloWorld from "../components/HelloWorld";
import messageBox from "../components/messageBox";
import projects from "../components/projects";
import projectsNew from "../components/projectsNew";
import def_table from "../components/def_table";

// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/greeting', component: greeting, name: 'greeting' },
        { path: '/Login', component: Login, name: 'Login' },
        { path: '/HelloWorld/:message', component: HelloWorld, name: 'HelloWorld' },
        { path: '/messageBox', component: messageBox, name: 'messageBox' },
        { path: '/projects', component: projects, name: 'projects' },
        { path: '/projectsNew', component: projectsNew , name: 'projectsNew' },
        { path: '/def_table', component: def_table, name: 'def_table' }
    ]
});
//组件中可以通过this.$router.query来获取查询字符串参数（？后的参数）
//组件中可以通过this.$router.params来获取查询字符串参数（路径参数/）

//4.导出路由
export  default  router;