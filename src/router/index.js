import Vue from 'vue';
import Router from 'vue-router';
import Home from "../components/Home";
import Login from "../components/Login";
import Grade from "../components/Grade";
import Info from "../components/Info";
import Initial from "../components/Initial";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: Login,
      meta: {
        title: "学生信息管理系统"
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: "学生信息管理系统"
      }
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/initial',
          component: Initial,
          meta: {
            title: "学生信息管理系统"
          }
        },
        {
          path: '/home/grade',
          component: Grade,
          meta: {
            title: "学生信息管理系统"
          }
        },
        {
          path: '/home/info',
          component: Info,
          meta: {
            title: "学生信息管理系统"
          }
        }
      ]
    }
  ]
})
