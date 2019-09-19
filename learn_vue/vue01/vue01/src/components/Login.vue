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
        <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" >
                <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-position="top">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <p>输入的账号：{{ruleForm.username}}</p>
        <p>输入的密码：{{ruleForm.password}}</p>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                username: "admin",
                password: "admin",
                ruleForm:{
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
    .el-form{
        width: 30%;
    }
    .demo-ruleForm{
        margin: 20px auto;
    }

</style>