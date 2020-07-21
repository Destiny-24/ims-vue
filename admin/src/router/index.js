import Vue from "vue";
import Router from "vue-router";
import routes from "./routes.js";
import NProgress from "nprogress"; //加载条
import "nprogress/nprogress.css"; //加载条样式

Vue.use(Router);
/**
 * 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const appRouter = new Router({
  mode: "history",
  routes: routes
});

// eslint-disable-next-line
appRouter.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

// eslint-disable-next-line
appRouter.afterEach((to, from) => {
  NProgress.done();
});

export default appRouter;
