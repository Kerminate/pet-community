<template>
  <el-row>
    <el-col :span="4" :offset="2" class="icon"><i class="el-icon-menu"></i>宠物空间</el-col>
    <el-col :span="10" class="input">
      <el-input placeholder="请输入关键词" suffix-icon="el-icon-search"></el-input>
    </el-col>
    <el-col :span="6" class="register">
      <el-button type="success">登录/注册</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .el-row
    margin-top: 20px
    .icon
      background: #f9fafc
      font-size: 2em
    .input
      background: #f9fafc
    .register
      background: #f9fafc
      text-align: center
</style>
