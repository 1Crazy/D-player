import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//官方文档推荐的懒加载
const Recommend = () => import("components/recommend");
const Singer = () => import("components/singer");
const Rank = () => import("components/rank");


export default new Router({
  //这里是routes不是routers!!!!!!!!!!!!!!!!!!!(T＿T)
  routes: [
    {path: "/",redirect: "/recommend"},//重新定向到"/recommend"
    {path: "/recommend",component: Recommend},
    {path: "/singer",component: Singer},
    {path: "/rank",component: Rank},
  ],
});
