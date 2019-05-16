<template>
    <div class="login-box">
      <div class="content">
        <div class="login">
          <div class="login-title">
            <span class="yhmt-font-size-18">登录</span>
            <span class="yhmt-font-size-12 yhmt-color-red fright ">立即注册</span>
          </div>
          <el-form  :model="ruleForm" label-position="left" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="user">
              <el-input v-model="input" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item  class="login-label" label="密码" prop="pass">
              <el-input type="password" placeholder="密码" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" placeholder="确认密码" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <div class="xz">
              <el-checkbox  v-model="checked">自动登录</el-checkbox>
              <span class="yhmt-font-size-12 fright forget_pwd">忘记密码？</span>
            </div>
              <el-button class="login-btn" type="danger" @click="submitForm('ruleForm')">登录</el-button>
          </el-form>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入联系电话'))
      } else {
        var reg = /^1[34578]\d{9}$/
        if (reg.test(value) === false) {
          callback(new Error('请输入正确的电话号码'))
        } else {
          callback()
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      checked: true,
      input: '',
      ruleForm: {
        pass: '',
        checkPass: '',
        user: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        user: [
          { validator: validatePhone, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less">
  @import "~static/css/Global.less";
  .login-box{
    height:478px;
    background: url("../static/images/loginBg.png") no-repeat;
    .login{
      width: 348px;
      height: 360px;
      background: #fff;
      padding: 33px;
      float: right;
      margin-top:58px;
      margin-right: 150px;
      .login-title{
        margin-bottom: 20px;
      }
    }
  }
  .search-box{
    display: none;
  }
  .login-btn{
    width:100%;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: @red_1;
    border-color: @red_1;
  }
  .el-checkbox__input.is-checked+.el-checkbox__label{
    color: @red_1;
  }
  .el-form-item__label{
    width: 70px;
  }
  .xz{
    margin-bottom: 10px;
  }
  .forget_pwd{
    cursor: pointer;
  }
</style>
