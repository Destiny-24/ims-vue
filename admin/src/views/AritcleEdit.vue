<template>
  <!-- 文章编辑页 -->
  <div class="edit-scetion">
    <div class="main-header">
      <el-button type="primary" @click="() => this.$router.back()"
        >返回列表</el-button
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
import articleModel from '../models/article'
import classifyModel from '../models/classify';
export default {
  data() {
    return {
      article: {
        title: "",
        classify_id: null,
        content: ""
      },
      classify:[]
    };
  },
  created() {
    let id = this.$route.params.id;
    articleModel.show(id).then(res =>{
      this.article = res.data;
    })
    classifyModel.list().then(res => {
      this.classify = res.data;
    });
  },
  methods:{
    handleAdd(){
     let id = this.$route.params.id
     let title = this.article.title;
     let classify_id = this.article.classify_id;
     let content = this.article.content;
     console.log(title,classify_id,content,123)
     if(!title || !classify_id || !content){
       this.$message('请输入完整内容！');
       return
     }
     articleModel.update(id,{title,classify_id,content}).then(() =>{
       this.$router.replace({name:'Aritcle'});
       this.$message.success('保存成功')
     }).catch(()=>{
       this.$message('保存失败')
     })
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
