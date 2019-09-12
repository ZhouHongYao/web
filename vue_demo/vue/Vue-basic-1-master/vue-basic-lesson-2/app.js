// Vue.config.delimiters = ['{[', ']}']
new Vue({
    // delimiters: ['{[', ']}'],
    el: '#vue-app',
    data: {
        name: 'Shaun',
        website: "https://www.baidu.com",
        job: 'job',
        websiteTag: "<a href='https://www.baidu.com'>websiteTag</a>"
    },
    methods:{
        greet: function(string){
            return 'Good' + string + this.name + "!";
        }
    }
});
