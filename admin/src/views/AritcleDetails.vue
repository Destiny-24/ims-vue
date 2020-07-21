<template>
  <div class="detail-section">
    <div class="main-header">
      <div class="main-header">
        <el-button type="primary" @click="() => this.$router.back()">返回</el-button>
      </div>
    </div>
    <div class="main-body">
      <div class="article-list">
        <div class="article-item">
          <div class="article-title">{{ article.title }}</div>
          <div class="article-desc">{{ article.content }}</div>
          <div class="article-info">
            <div class="created-time">{{ article.created_time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import articleModel from "../models/article";

export default {
  data() { 
    return {
      article: {},
    };
  },
  created() {
    let id = this.$route.params.id;
    articleModel.show(id).then(res => {
      this.article = res.data;
    });
  }
};
</script>
<style lang="less" scoped>
.article-list {
  .article-item {
    padding: 20px;
    margin: 0 60px 60px 0;
    .article-title {
      font-size: 25px;
      font-weight: 500;
      text-align:center;
      margin: 20px 0;
    }
    .article-desc {
      text-align: justify;
      color: #716c6c;
      font-size: 14px;
      text-indent: 2rem;
      line-height: 27px;
    }
    .article-info {
      .created-time{
        margin-top: 4%;
        text-align: right;
      }
    }
  }
}
</style>