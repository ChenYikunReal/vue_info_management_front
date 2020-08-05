# 简单学生信息管理前端

基于Vue.js实现
前后端数据交互使用Axios

## 提交日志
- 根据模板搭建项目结构 + 编写code
- 修复查询后加载不正确的Bug
- 修复时间加载为undefined的Bug

## 项目的加载与运行
- 使用npm/cnpm命令<code>cnpm install</code>下载依赖库
- WebStorm配置<code>Run Configuration</code>的Scripts为dev即可运行
- 运行成功后使用<code>localhost:8080</code>即可访问登录主页

## 设计表格所参照的数据库表
- 学生个人信息表<code>stu_info</code><br/>
![在这里插入图片描述](https://github.com/ChenYikunReal/vue_info_management_front/blob/master/static/stu_info.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)
- 学生个人成绩表<code>stu_grade</code><br/>
![在这里插入图片描述](https://github.com/ChenYikunReal/vue_info_management_front/blob/master/static/stu_grade.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzg5NjMxOA==,size_16,color_FFFFFF,t_70)

## Vue组件对应的界面
- Grade.vue : 学生成绩显示页面 [<code>需要前后端连接</code>]
- Header.vue : 系统主页的边栏
- Home.vue : 登录系统后的系统主页面
- HomeSidebar.vue : 系统主页的菜单条
- Info.vue : 学生信息显示页面
- Initial.vue : 登录系统后显示的初始化页面
- Login.vue : 登录页面 [<code>需要前后端连接</code>]

## 项目后端Github地址
[后端源码](https://github.com/ChenYikunReal/ssm_info_management_backend)

## 遇到的困难与解决方案
- [Vue之Axios跨域问题解决方案](https://blog.csdn.net/wh_xmy/article/details/87705840)
- 后台直接返回的JSON数据中时间是数值表示的(毫秒数)，前端显示出来的效果不是我们期待的"yyyy-mm-dd"，这里采用暴力解决方案：直接截取子串：<code>this.studentList.forEach(t=>t["birthday"]=t["birthday"].substr(0, 10));</code>
