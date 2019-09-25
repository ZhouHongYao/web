<template>
    <div class="navbar">
        <div class="line"></div>
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1"><a href="/" class="sy">首页</a></el-menu-item>
            <el-submenu index="2">
                <template slot="title">相关链接</template>
                <el-menu-item index="2-1"><a href="/Login" class="sy item">登录</a></el-menu-item>
                <el-menu-item index="2-2"><a href="/greeting" class="sy item">问候</a></el-menu-item>
                <el-submenu index="2-3">
                    <template slot="title"><a href="/projects" class="sy item">项目</a></template>
                    <el-menu-item index="2-3-1"><a href="/projectsNew" class="sy item">projectsNew</a></el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>about</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .navbar{
        background-color: rgb(84, 92, 100);
        position: fixed;
        top: 0;
        width: 100%;
        z-index:999;
        left: 0;
    }
    .sy{
        text-decoration: none;
    }
    .item{
        color: aquamarine;
    }
</style>