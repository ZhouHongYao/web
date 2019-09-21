<template>
    <div class="hello">
        <h1>hello world!</h1>
        <h1>/HelloWorld/:age</h1>
        <p>Q：查询字符串参数如何定义？如何获取？路径参数如何定义？如何获取？</p>
        <p><a href="http://49.235.177.249:7080/HelloWorld/90?age=100">点击查看http://49.235.177.249:7080/HelloWorld/90?age=100</a> </p>
        <h3>A:查询字符串参数定义及获取：this.$route.query.age：{{this.$route.query.age}}</h3>
        <h3>A:路径字符串参数定义及获取：this.$route.params.age：{{this.$route.params.age}}</h3>
        <h1>{{ msg }}</h1>
        <h2>{{message}}</h2>
      <h3>演练axios相关操作</h3>
        <el-image :src="url"
                  fit="cover">

        </el-image>

    </div>
</template>

<script>
    // import axios from 'axios';
    import {dogs} from '../api/api'

    export default {
        name: 'HelloWorld',
        // props: {
        //     msg: String
        // },

        data() {
            // eslint-disable-next-line no-console
            // console.log(this.$router);
            // eslint-disable-next-line no-console
            // console.log(this.$route);
            return {
                message: this.$route.params.message,
                url: '',
            }
        },
        mounted() {
            // axios.get('https://github.com/public-apis/public-apis')
            //     .then(function (response) {
            //         console.log(response);
            //此时的this指的是当前函数的引用
            //         this.url = response.data.message;
            //     })
            //     .catch(function (err) {
            //     });

            //定义箭头函数
            // axios.get('https://dog.ceo/api/breeds/image/random')
            //         .then(response => {
            //           console.log(response);
            //           this.url = response.data.message;
            //         })
            //         .catch(function (err) {
            //           console.log(err)
            //         });

            //调用dogs
            dogs()
                .then(response => {
                    // eslint-disable-next-line no-console
                    console.log(response);
                    this.url = response.data.message;
                })
                .catch(function (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
