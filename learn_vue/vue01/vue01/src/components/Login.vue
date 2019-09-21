<template>
    <div>
        <!--        <form action="post">-->
        <!--        <label for="username">账号:</label>-->
        <!--        <input type="text" placeholder="请输入账号" id="username" v-model="username"><br>-->
        <!--        <label for="password">密码:</label>-->
        <!--        <input type="password" placeholder="请输入密码" id="password" v-model="password">-->
        <!--        </form>-->
        <!--        <p>输入的账号：{{username}}</p>-->
        <!--        <p>输入的密码：{{password}}</p>-->
        <h3>登录框</h3>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号">
                <el-input type="text" v-model="ruleForm.username" auto-complete="off">
                    <i class="el-icon-user-solid" slot="prefix"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" label-position="top">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off">
                    <i class="el-icon-user" slot="prefix"></i>
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <p>输入的账号：{{ruleForm.username}}</p>
        <p>输入的密码：{{ruleForm.password}}</p>
        <h1>greeting插槽使用</h1>
        <greeting>
            <!-- <p>greeting插槽使用</p>-->
            <h3>greeting子组件内容， 默认情况下会被忽略</h3>
            <!-- vue2.6前-->
            <p slot="part1">part1</p>
            <!-- vue2.6后-->
            <template v-slot:part2>
                <p>part2</p>
            </template>
            <template #part3>
                <p>part3</p>
            </template>
<!--            vue2.6前-->
<!--            <p slot="part4" slot-scope="scope">part4:{{scope.user_name}}</p>-->
            <template slot="part4" slot-scope="scope">
                part4:{{scope.user_name}}
            </template>
<!--            vue2.6后-->
            <template #part5="scope">
                <p>part5:{{scope.user_name}}</p>
            </template>
            <template #part6="{user_name}">
                <p>part6:{{user_name}}</p>
            </template>
        </greeting>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: "admin",
                password: "admin",
                ruleForm: {
                    username: "admin",
                    password: "admin",
                }
            }
        },
        created() {
            // eslint-disable-next-line no-console
            console.log('created');
        },
        mounted() {
            // eslint-disable-next-line no-console
            console.log('mounted');
        }
    }
</script>

<style scoped>
    .el-form {
        width: 30%;
    }

    .demo-ruleForm {
        margin: auto;
        /*border: 1px solid rgba(230, 230, 230, 0.27);*/
    }

</style>

