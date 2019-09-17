<template>
    <table class="tab">
        <tr>
            <th  v-for="(ph, key) in project_headers" :key="key">{{ph}}</th>
        </tr>
        <tr v-for="(project, key) in projects" :key="key">
            <td >{{project.name}}</td>
            <td>{{project.owner}}</td>
            <td>{{project.app_type}}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: "projects.vue",

        data() {
            return {
                project_headers: ["项目名称", "项目负责人", "应用类型"],
                projects: [
                    {name: "项目1", owner: "tom", app_type: "web"},
                    {name: "项目2", owner: "rose", app_type: "app"},
                    {name: "项目3", owner: "admin", app_type: "mini_programme"},
                ]
            }
        }
    }
</script>

<style scoped>
    .tab {
        margin: 20px auto;
        border-collapse: collapse;
        width: 30%;
    }
    td, th{
        border: 1px solid gray;
    }
</style>