<template>
  <div class="h100">
    <el-container class="h100">
      <el-container>
        <el-header>
          <div class="home" @click="home()">首页</div>
          <div class="link-conten">
            <el-link
              type="primary"
              v-for="item in classify"
              :key="item.id"
              @click="getAlassify(item.id)"
            >{{item.name}}</el-link>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AritcleModel from "../models/article";
import classifyModel from "../models/classify";

export default {
  data() {
    return {
      classify: []
    };
  },
  methods: {
    home() {
      AritcleModel.list().then(() => {
         this.$router.push({ name: "Aritleclist", params: { id: 0 } });
      });
    },
    getAlassify(id) {
      console.log(id)
      classifyModel.classifyArticle(id).then(() => {
        this.$router.push({ name: "Aritleclist", params: { id } });
      });
    }
  },
  created() {
    classifyModel.list().then(res => {
      this.classify = res.data;
    });
  }
};
</script>

<style scoped lang="less">
.h100 {
  height: 100vh;
}
.el-main {
  color: #333;
}

.el-header {
  display: flex;
  text-align: start;
  padding-right: 20px;
  line-height: 59px;
  font-size: 18px;
  border-bottom: 1px solid #e4d4e4;
  justify-content: left;
  .home {
    color: #409eff;
    font-weight: 500;
    margin-left: 8%;
  }
  .link-conten {
    margin-left: 30px;
    .el-link {
      font-size: 16px;
      margin-left: 30px;
    }
  }
}
.el-main {
  padding: 50px 50px 0 120px;
  .Aritcle-title {
    font-size: 16px;
    color: #409eff;
    margin-bottom: 30px;
  }
}
</style>
