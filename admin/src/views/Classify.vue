<template>
  <!-- 文章分类 -->
  <div class="classify-section">
    <div class="main-header">
      <el-button type="primary" @click="handleAdd">添加分类</el-button>
      <el-dialog :title="formBoxTitle" :visible="formBoxShow">
        <el-form>
          <el-form-item label="分类" label-width="60px">
            <el-input name="name" width="200" v-model="formBoxValue"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="handleSave">保存</el-button>
          <el-button @click="handleCancel">取消</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="main-body">
      <el-table :data="tableData" size="small" style="width: 100%">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="name" label="分类名称"></el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.row, scope.$index)"
            >编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              @click="handleDelete(scope.row, scope.$index)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import classifyModel from "../models/classify";

export default {
  data() {
    return {
      formBoxTitle: "",
      formBoxShow: false,
      formBoxValue: "",
      tableData: [],
      dataIndex: null,
      formBoxID: null,
    };
  },
  created() {
    classifyModel.list().then(res => {
      this.tableData = res.data;
    });
  },
  methods: {
    handleAdd() {
      this.formBoxShow = true;
      this.formBoxTitle = "添加分类";
      this.formBoxID = "";
      this.formBoxValue = "";
    },
    handleCancel() {
      this.formBoxValue = "";
      this.formBoxShow = false;
    },
    handleEdit(data, index) {
      this.formBoxShow = true;
      this.formBoxTitle = "编辑分类";
      this.formBoxValue = data.name;
      this.dataIndex = index;
      this.formBoxID = data.id;
    },
    handleDelete(data,index){
      this.$confirm('是否删除此分类','提示',{
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() =>{
        classifyModel.delete(data.id)
      })
      .then(()=>{
        this.tableData.splice(index,1);
        this.$message.success('删除成功')
      })
      .catch(() =>{
        this.$message('取消删除')
      }); 
    },
    handleSave() {
      let id = this.formBoxID;
      let name = this.formBoxValue;
      console.log(name)
      if (!name) {
        this.$message.error("请输入内容！");
        return;
      }
      if (id) {
        classifyModel.update(id,{name}).then(() => {
          this.formBoxShow = false,
          classifyModel.list().then(res => {
            this.tableData = res.data;
          });
          this.$message.success("编辑成功");
        });
      } else {
        classifyModel.add({ name }).then(res => {
          if (res.code == 200) {
            classifyModel.list().then(res => {
              this.tableData = res.data;
            });
            this.$message.success("添加成功");
            this.formBoxShow = false;
          } else {
            this.$message("添加失败");
          }
        });
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
