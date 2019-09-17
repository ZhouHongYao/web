<template>
    <div>
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 30%"
                class="new"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="项目名称"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="owner"
                    label="项目负责人"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="app_type"
                    label="应用类型"
                    width="120">
            </el-table-column>

        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "projectsNew",
        data(){
            return {
                  tableData: [
                    {name: "项目1", owner: "tom", app_type: "web"},
                    {name: "项目2", owner: "rose", app_type: "app"},
                    {name: "项目3", owner: "admin", app_type: "miniProgramme"},
                ],
                multipleTable: [],
            }
        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style scoped>
    .new{
        margin: 50px auto;
    }
</style>