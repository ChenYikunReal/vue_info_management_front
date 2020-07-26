<template>
  <section>
    <!--工具条-->
    <el-col style="font-size:22px; font-weight: bold; padding-bottom: 40px">学生基本信息</el-col>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item label="学号：">
          <el-input v-model="filters.input_id" placeholder="请输入学号"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" v-on:click="getInfo()">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <template>
      <el-table ref="multipleTable" :data="studentList" highlight-current-row v-loading="loading" tooltip-effect="dark" style="width: 100%;" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"/>
        <el-table-column prop="id" label="学号" width="200" sortable/>
        <el-table-column prop="name" label="姓名" width="200"/>
        <el-table-column prop="age" label="年龄" width="150" sortable/>
        <el-table-column prop="birthday" label="生日" width="200" sortable/>
        <el-table-column prop="email" label="电子邮箱" width="250"/>
        <el-table-column prop="country" label="国籍" width="200"/>
      </el-table>
    </template>
  </section>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      filters: {
        input_id: "",
      },
      student: {
        student_id: 0,
        student_name: "",
        student_age: 0,
        student_birthday: new Date().toLocaleDateString(),
        student_email: "",
        student_country: ""
      },
      loading: false,
      studentList: [],
      multipleSelection: null,
      formLabelWidth: "100px",
    };
  },
  methods: {
    //获取学生基本信息
    getInfo() {
      this.loading = true;
      setTimeout(() => {
        this.getStudentInfo();
        this.$message({
          message: "已获取学生基本信息！",
          type: "success"
        });
      }, 1500);
    },
    getStudentInfo() {
      this.studentList = [
        {
          id: 1,
          name: "Sam",
          age: 21,
          birthday: new Date('1999-05-04').toLocaleDateString(),
          email: "123456789@qq.com",
          country: "China"
        },
        {
          id: 2,
          name: "Bob",
          age: 35,
          birthday: new Date('1985-12-03').toLocaleDateString(),
          email: "bobbob@gmail.com",
          country: "USA"
        }
      ];
      this.loading = false;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
