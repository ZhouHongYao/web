<template>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
    export default {
        name: "messageBox",
        props: ['tab'],
        watch: {
            tab: function (val) {
                // eslint-disable-next-line no-console
                console.log(val);
                if (val) {
                    this.open();
                }
            }
        },
        methods: {
            // open() {
            //     const h = this.$createElement;
            //
            //     this.$notify({
            //         title: '标题名称',
            //         message: h('i', {style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
            //     });
            //     this.$emit('cb-cx', 44)
            // },
            open() {
                this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                        this.$emit('cb-cx', false);
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>