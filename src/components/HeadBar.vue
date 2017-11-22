<template>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="4" style="background:#f9fafc;font-size:2em"><i class="el-icon-menu"></i>宠物空间</el-col>
    <el-col :span="1" style="background:#f9fafc">
      <el-input placeholder="请输入关键词" icon="search"></el-input>
    </el-col>
    <el-col :span="6" style="background:#f9fafc">
      <el-button type="success">登录/注册</el-button>
    </el-col>
    <el-col :span="2"></el-col>
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
<style scoped>
</style>
