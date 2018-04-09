<template>
  <div class="content">
    <div class="table">
      <el-table
        :data="tableData"
        height="100%"
        border>
        <el-table-column
          prop="url"
          align="center"
          label="轮播图"
          width="250">
          <template slot-scope="scope">
            <img class="imgW" :src="scope.row.path" />
          </template>
        </el-table-column>
        <el-table-column
          prop="content"
          align="center"
          label="内容">
        </el-table-column>
        <el-table-column
          prop="companyName"
          align="center"
          label="链接">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.id)" type="text">修改</el-button>
            <el-button :type="scope.row.status==0?'success':'warning'" @click="onOff(scope.row)">{{scope.row.status==0?'启用':'禁用'}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default require('./scrollCtr.js');
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
  .imgW {
    width:200px;
    height:100px;
  }
</style>
