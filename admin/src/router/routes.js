const Login = () =>
  import(/* webpackChunkName: "account"*/ "../views/Login.vue");
const User = () => 
  import(/* webpackChunkName: "users"*/ "../views/User.vue");
const Aritcle = () =>
  import(/* webpackChunkName: "artcle"*/ "../views/Aritcle.vue");
const AritcleCreate = () =>
  import(/* webpackChunkName: "artcle"*/ "../views/AritcleCreate.vue");
const AritcleEdit = () =>
  import(/* webpackChunkName: "artcle"*/ "../views/AritcleEdit.vue");
const AritcleDetails = () =>
  import(/* webpackChunkName: "show"*/ "../views/AritcleDetails.vue");
const Classify = () =>
  import(/* webpackChunkName:"artcle"*/ "../views/Classify.vue");
const Aritleclist = () =>
  import(/* webpackChunkName:"show"*/ "../views/Aritleclist.vue");

import Layout from "../components/Layou.vue";
import showLayou from "../components/showLayou.vue";

export default [
  {
    path: "/",
    component: Login,
    name: "Login"
  },
  {
    path:'/show',
    component:showLayou,
    name:'showLayou',
    children:[
      {
        path:"/show/:id",
        component:Aritleclist,
        name:'Aritleclist'
      },
      {
        path: "/show/Details/:id",
        component: AritcleDetails,
        name: "AritcleDetails"
      },
    ]
  },
  {
    path: "/",
    name: "Root",
    component: Layout,
    redirect: { name: "Aritcle" },
    children: [
      {
        path: "/admin/User",
        component: User,
        name: "User"
      },
      {
        path: "/admin/Aritcle",
        component: Aritcle,
        name: "Aritcle"
      },
      {
        path: "/admin/Aritcle/Classify",
        component: Classify,
        name: "Classify"
      },
      {
        path: "/admin/Aritcle/Create",
        component: AritcleCreate,
        name: "AritcleCreate"
      },
      {
        path: "/admin/Aritcle/Edit/:id",
        component: AritcleEdit,
        name: "AritcleEdit"
      },
    ]
  }
];
