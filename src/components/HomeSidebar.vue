<template>
  <div class="sidebar">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router @select="handleSelect">
      <el-submenu index="1" class="submenu">
        <template slot="title"><i class="el-icon-s-order"/>学生成绩管理</template>
        <el-menu-item index="/home/grade">查看成绩</el-menu-item>
      </el-submenu>
      <el-submenu index="2" class="submenu">
        <template slot="title"><i class="el-icon-user-solid"></i>学生信息管理</template>
        <el-menu-item index="/home/info">查看基本信息</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  };
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    width: 220px;
    left: 0;
    top: 70px;
    bottom: 0;
  }
  .el-menu-vertical-demo {
    background: #d3dce6;
    background: white;
    filter:alpha(Opacity=85);
    -moz-opacity:0.75;
    opacity: 0.75;
  }
  .sidebar>ul {
    height: 100%;
  }
  .submenu {}
</style>
