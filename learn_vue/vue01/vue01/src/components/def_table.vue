<template>
    <div class="el_table">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    label="日期"
                    width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="姓名"
                    width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <messageBox class="mb" :tab="tab" :msg="msg" @cb-cx="CB_CX"/>
        <messageBox class="mb" :tab="tab2" :msg="msg2" @cb-cx="CB_CX2"/>
    </div>
</template>

<script>
    import messageBox from "./messageBox";
    export default {
        name: "def_table.vue",
        data() {
            return {
                tableData: [
                    {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄'},
                    {date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄'},
                    {date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄'}
                ],
                tab:false,
                tab2:false,
                msg:'修改项目信息',
                msg2:'删除项目信息',
            }
        },
        components:{
            messageBox,
        },
        methods: {
            handleEdit(index, row) {
                // eslint-disable-next-line no-console
                console.log(index, row);
                this.tab=true;
                // alert("修改项目信息");
                // console.log(row.date);
            },
            handleDelete(index, row) {
                // eslint-disable-next-line no-console
                console.log(index, row);
                this.tab2 = true;
                // alert("删除项目信息");
            },
            CB_CX(val){
                // eslint-disable-next-line no-console
                // console.log(val);
                this.tab = val;
            },
            CB_CX2(val){
                this.tab2 = val;
            }
        }
    }
</script>

<style scoped>
    .el_table {
        margin: 50px 30%;
    }
    .mb {
        display: none;
    }
</style>