<template>
  <div class="content">
    <div class="contentH">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="formInline.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="发布人">
          <el-input v-model="formInline.username" placeholder="请输入发布人"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.isStatus" placeholder="选择状态">
            <el-option label="未审核" value="0"></el-option>
            <el-option label="审核通过" value="1"></el-option>
            <el-option label="未通过" value="2"></el-option>
            <el-option label="已完成" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <a :href="downList" class="el-button el-button--primary">导出本页商机</a>
          <a :href="allDownList" class="el-button el-button--primary">导出全部商机</a>
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
          prop="title"
          align="center"
          label="商机标题">
        </el-table-column>
        <el-table-column
          prop="des"
          align="center"
          label="内容"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="username"
          align="center"
          label="发布者">
        </el-table-column>
        <el-table-column
          prop="cDate"
          align="center"
          label="发布时间">
        </el-table-column>
        <el-table-column
          prop="signUp"
          align="center"
          label="报名数">
        </el-table-column>
        <el-table-column
          prop="attention"
          align="center"
          label="关注数">
        </el-table-column>
        <el-table-column
          prop="isStatus"
          align="center"
          label="状态">
          <template slot-scope="scope">
            <el-tag :type="(scope.row.isStatus == 0)?'primary':(scope.row.isStatus == 1)?'success':(scope.row.isStatus == 2)?'danger':'info'">{{scope.row.isStatusName}}</el-tag>
          </template>
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
  export default require('./bSMCtr.js');
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
  .colorA {

  }

</style>
