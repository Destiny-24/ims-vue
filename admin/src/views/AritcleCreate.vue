<template>
  <!-- 文章创建页 -->
  <div class="edit-scetion">
     <div class="main-header">
      <el-button type="primary" @click="() => this.$router.back()"
        >返回文章</el-button
      >
    </div>
    <div class="main-body">
      <el-form class="form-container">
        <el-form-item label="标题" label-width="60px">
          <el-input name="title" v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="分类" label-width="60px">
          <el-select placeholder="请选择" v-model="article.classify_id">
            <el-option
              v-for="item in classify"
              :key="item.id"
              :value="item.id"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容" label-width="60px">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="article.content"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="60px">
          <el-button type="primary" @click="handleAdd">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import articleModel from "./../models/article";
import classifyModel from "./../models/classify";

export default {
  data() {
    return {
      article: {
        title: "",
        classify_id: null,
        content: ""
      },
      classify: []
    };
  },
  created() {
    classifyModel.list().then(res => {
      this.classify = res.data;
    });
  },
  methods: {
    handleAdd() {
      let title = this.article.title;
      let classify_id = this.article.classify_id;
      let content = this.article.content;
      if (!title || !classify_id || !content) {
        this.$message("缺少参数");
        return;
      }
      articleModel
        .insert({ title, classify_id, content })
        .then(res => {
          if (res.code == 200) {
            this.$router.replace({ name: "Aritcle" });
            this.$message.success("添加成功");
          }
        }).catch(() => {
          console.log(123);
          this.$message("添加失败");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.main-body {
  margin-top: 20px;
  padding-right: 100px;
}
</style>
