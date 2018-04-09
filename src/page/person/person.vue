<template>
    <div class="content">
      <div class="contentH">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="手机号">
            <el-input v-model="formInline.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="formInline.company" placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <el-form-item label="用户名称">
            <el-input v-model="formInline.username" placeholder="请输入用户名称"></el-input>
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="formInline.role" placeholder="选择角色">
              <el-option label="游客" value="0"></el-option>
              <el-option label="普通用户" value="1"></el-option>
              <el-option label="管理员" value="2"></el-option>
              <el-option label="超级管理员" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          height="100%"
          border>
          <el-table-column
            type="index"
            align="center"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="phone"
            align="center"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="username"
            align="center"
            label="用户名">
          </el-table-column>
          <el-table-column
            prop="role"
            align="center"
            label="角色">
          </el-table-column>
          <el-table-column
            prop="company"
            align="center"
            label="公司名称">
          </el-table-column>
          <el-table-column
            prop="cpDes"
            align="center"
            label="公司简介">
          </el-table-column>
          <el-table-column
            prop="playTour"
            align="center"
            label="被打赏次数">
          </el-table-column>
          <el-table-column
          prop="finishNum"
          align="center"
          label="完结单数">
          </el-table-column>
          <el-table-column
          prop="lastLoginTime"
          align="center"
          label="最近登录时间">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            align="center"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="contentF">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
</template>
<script>
    export default require('./personCtr.js');
</script>
<style scoped>
  .content {
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding:20px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: auto;
  }
  .contentH {
    width:100%;
  }
  .contentH .el-input {
    width:150px;
  }
  .contentH .el-select {
    width:150px;
  }
  .table {
    width:100%;
    flex: 1;
    height:1px;
  }
  .contentF {
    text-align: center;
    margin-top:20px;
  }
</style>
