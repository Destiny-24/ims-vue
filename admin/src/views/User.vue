<template>
  <!-- 用户页 -->
  <div class="user-section">
    <div class="user-header">
      <el-button type="primary" @click="newUser">新增用户</el-button>
      <el-dialog :title="formBoxTitle" :visible="dialogVisible" width="45%">
        <el-form class="body-form">
          <el-form-item label="姓名" label-width="60px">
            <el-input name="name" width="200" v-model="formBoxValue.name"></el-input>
          </el-form-item>
          <el-form-item label="手机" label-width="60px">
            <el-input name="phone" width="200" v-model="formBoxValue.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="60px">
            <el-input
              type="password"
              show-password
              name="password"
              width="200"
              v-model="formBoxValue.password"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="saveUser">保 存</el-button>
          <el-button @click="UnsaveUser">取 消</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="pg-main-body">
      <el-table :data="userData" size="small" style="width: 100%">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" @click="editUser(scope.row, scope.$index)">编辑</el-button>
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
import userModel from "./../models/user";

export default {
  data() {
    return {
      formBoxTitle: "",
      formBoxID: null,
      dialogVisible: false,
      formBoxValue: {
        name: "",
        phone: "",
        password: ""
      },
      userData: []
    };
  },
  created() {
    userModel.list().then(res => {
      this.userData = res.data;
    });
  },
  methods: {
    newUser() {
      this.formBoxTitle = "新增用户";
      this.dialogVisible = true;
      this.formBoxValue.name = "";
      this.formBoxValue.password = "";
      this.formBoxValue.phone = "";
      this.formBoxID = "";
    },
    editUser(data,) {
      this.formBoxTitle = "编辑用户";
      this.dialogVisible = true;
      this.formBoxID = data.id;
      this.formBoxValue.name = data.name;
      this.formBoxValue.password = data.password;
      this.formBoxValue.phone = data.phone;
    },
    saveUser() {
      let name = this.formBoxValue.name;
      let phone = this.formBoxValue.phone;
      let password = this.formBoxValue.password;
      let id = this.formBoxID;
      let params = { name, phone, password };
      if (!name || !phone || !password) {
        this.$message.error("缺少必要参数");
        return;
      }
      if (id) {
        userModel.update(id, params).then(() => {
          userModel.list().then(res => {
            this.userData = res.data;
          });
          this.dialogVisible = false;
          this.$message.success("编辑成功");
        });
      } else {
        userModel
          .add(params)
          .then(() => {
            userModel.list().then(res => {
              this.userData = res.data;
            });
            this.$message.success("添加成功");
            this.dialogVisible = false;
          })
          .catch(() => {
            this.dialogVisible = false;
          });
      }
    },
    UnsaveUser() {
      this.dialogVisible = false;
      this.formBoxValue.name = "";
      this.formBoxValue.password = "";
      this.formBoxValue.phone = "";
      this.formBoxID = "";
    },
    handleDelete(data, index) {
      this.$confirm("是否确认删除用户", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          userModel.delete(data.id);
        })
        .then(() => {
          this.userData.splice(index, 1);
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
<style lang="less" scoped>
.body-form {
  padding: 30px 80px;
}
</style>
