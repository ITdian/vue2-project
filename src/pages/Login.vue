<template>
  <div class="login">
    <div class="login-dialog">
      <h3>vue2学习之B端</h3>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-form">
        <el-form-item label="账  号" prop="account">
          <el-input type="text" v-model="ruleForm.account" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="密  码" prop="password">
          <el-input type="password" v-model="ruleForm.password" show-password autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  class="btn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      const validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.ruleForm.account !== '') {
            this.$refs.ruleForm.validateField('password');
          }
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          account: '',
          password: ''
        },
        rules: {
          account: [
            { validator: validateAccount, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  .login-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 400px;
    border: 3px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      height: 80px;
      line-height: 80px;
    }
    .demo-form {
      margin-top: 20px;
    }
    .btn {
      width: 120px;
      margin-top: 20px;
    }
  }
}
</style>