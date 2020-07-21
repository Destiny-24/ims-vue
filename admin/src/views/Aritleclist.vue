<template>
  <div class="show-section">
    <el-main>
      <div class="Aritcle-scetion">
        <div class="Aritcle">
          <div
            class="Aritcle-title"
            v-for="item in Aritcle"
            :key="item.id"
            @click="show(item.id)"
          >《{{ item.title}}》</div>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :page-count="totalPage" :page-size="pageSize" :current-page="currentPage" @current-change="currentChange"	></el-pagination>
    </el-main>
  </div>
</template>
<script>
import AritcleModel from "../models/article";

export default {
  data() {
    return {
      Aritcle:[],
      totalPage:null,//总页数
      pageSize:2,//每页显示数量
      currentPage:1,//当前第几页
      totalNumber:null,//总条数
    };
  },
  created() {
    this.getData();
  },
  watch: {
    $route: "showRouter"
  },
  mounted(){

  },
  methods: {
    showRouter(){
      this.currentPage = 1,
      this.getData()
    },
    getData() {
      let id = this.$route.params.id;
      let PageSize = this.pageSize;
      let CurrentPage = this.currentPage;
      if (id == 0) {
        AritcleModel.list({CurrentPage,PageSize}).then(res => {
          this.Aritcle = res.data;
          this.totalNumber = res.tatel[0].index
          this.totalPage = Math.ceil(this.totalNumber / PageSize)
        });
      } else {
        AritcleModel.list({ id,PageSize, CurrentPage}).then(res => {
          this.Aritcle = res.data;
          this.totalNumber = res.tatel[0].index
          this.totalPage = Math.ceil(this.totalNumber / PageSize)
        });
      }
    },
    show(id) {
      this.$router.push({ name: "AritcleDetails", params: { id } });
    },
    currentChange(index){
      this.currentPage = index;
      this.getData()
    }
  }
};
</script>
<style lang="less" scoped>
.Aritcle-title {
  font-size: 16px;
  color: #409eff;
  margin-bottom: 30px;
}
</style>