<template>
  <!-- 文章页 -->
  <div class="aritcle-scetion">
    <div class="main-header">
      <el-button
        type="primary"
        @click="() => this.$router.push({ name: 'AritcleCreate' })"
        >新建文章</el-button
      >
    </div>
    <div class="main-body">
      <el-table :data="tableData" size="small" style="width: 100%">
        <el-table-column label="序号">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="classify_id" label="分类" >
        </el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-s-order" @click="handleShow(scope.row.id)" >详情</el-button>
            <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.row.id)" >编辑</el-button>
            <el-button type="text" icon="el-icon-delete" @click="handleDelete(scope.row, scope.$index)">删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import aritcleModel from "./../models/article";


export default {
  data() {
    return {
      tableData: [],
      classify:{
        classify_id:''
      }
    };
  },
  created() {
    aritcleModel.list().then(res => {
      this.tableData = res.data;
    });
  },
  methods: {
    handleEdit(id) {
      this.$router.push({ name: "AritcleEdit", params: { id } });
    },
    handleShow(id) {
      this.$router.push({ name: "AritcleDetails", params: { id } });
    },
    handleDelete(data,index) {
      this.$confirm("是否确认删除文章", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          aritcleModel.delete(data.id);
        })
        .then(() => {
          this.tableData.splice(index,1)
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="less" scoped></style>
