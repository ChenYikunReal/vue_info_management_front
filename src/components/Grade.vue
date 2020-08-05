<template>
  <section>
    <!--工具条-->
     <el-col style="font-size:22px; font-weight: bold; padding-bottom: 40px">学生成绩信息</el-col>
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item label="学号：">
          <el-input v-model="filters.input_id" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" v-on:click="getGrade()">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <template>
      <el-table ref="multipleTable" :data="gradeList" highlight-current-row v-loading="loading" tooltip-effect="dark" style="width: 100%;" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"/>
        <el-table-column prop="id" label="学号" width="200" sortable/>
        <el-table-column prop="name" label="姓名" width="200"/>
        <el-table-column prop="chinese" label="语文成绩" width="200" sortable/>
        <el-table-column prop="math" label="数学成绩" width="200" sortable/>
        <el-table-column prop="english" label="英语成绩" width="200" sortable/>
        <el-table-column prop="grade" label="总成绩" width="200" sortable/>
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
        student_chinese: 0,
        student_math: 0,
        student_english: 0,
        student_grade: 0
      },
      loading: false,
      gradeList: [],
      multipleSelection: null,
      formLabelWidth: "100px",
    };
  },
  methods: {
    //获取学生成绩信息
    getGrade() {
      this.loading = true;
      setTimeout(() => {
        this.getGradeList();
        this.$message({
          message: "已获取学生成绩信息！",
          type: "success"
        });
      }, 1500);
    },
    getGradeList() {
      axios.get('/getGrade', {
        params: {
          id: this.filters.input_id
        }
      }).then(res => {
        this.gradeList = res.data;
      }).catch(function (error) {
        console.log(error);
      });
      this.loading = false;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
