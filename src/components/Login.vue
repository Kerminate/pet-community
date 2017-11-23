<template lang="html">
  <div class="container">
    <el-form ref="form" :model="loginForm" :label-position="labelPosition" label-width="80px" type="flex" justify="center">
      <div class="form-item">
        <el-form-item label="email">
          <el-input v-model="loginForm.name" placeholder="请输入email"></el-input>
        </el-form-item>
      </div>
      <div class="form-item">
        <el-form-item label="密码">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
      </div>
      <div class="form-item">
        <el-form-item class="button-wrapper">
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-form ref="form" :model="registerForm" :label-position="labelPosition"  label-width="80px">
      <div class="form-item">
        <el-form-item label="email">
          <el-input v-model="registerForm.name" placeholder="请输入email"></el-input>
        </el-form-item>
      </div>
      <div class="form-item">
        <el-form-item label="密码">
          <el-input type="password" v-model="registerForm.password"></el-input>
        </el-form-item>
      </div>
      <div class="form-item">
        <el-form-item label="重复密码">
          <el-input type="password" v-model="registerForm.repwd"></el-input>
        </el-form-item>
      </div>
      <div class="form-item">
        <el-form-item label="昵称">
          <el-input v-model="registerForm.nickName"></el-input>
        </el-form-item>
      </div>
      <div class="form-item">
        <el-form-item class="button-wrapper">
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      loginForm: {
        name: '',
        password: ''
      },
      registerForm: {
        name: '',
        password: '',
        repwd: '',
        nickName: ''
      }
    }
  },
  methods: {
    register () {
      if (this.registerForm.password !== this.registerForm.repwd) {
        this.$message.error('重复密码不一致！')
      }
    }
  }
}
</script>

<style lang="stylus">
  .container
    margin-right: 50px
    .form-item
      display: flex
      justify-content: center
      .el-form-item
        width: 400px
      .button-wrapper
        display: flex
        justify-content: center
        margin-right: 80px
</style>
