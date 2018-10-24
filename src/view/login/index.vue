<template>
  <div class="login-container">
    <div class="login-content">
      <el-form ref="loginForm"
               :model="loginForm"
               label-width="60px"
               class="login-form">
        <el-form-item prop="username"
                      label="用户名">
          <el-input v-model="loginForm.username"
                    placeholder="用户名"
                    type="text"
                    size="small"
                    autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item prop="password"
                      label="密码">
          <el-input v-model="loginForm.password"
                    placeholder="密码"
                    type="password"
                    size="small"
                    autocomplete="on"></el-input>
        </el-form-item>
        <el-button type="info"
                   style="width:100%;margin-bottom:30px"
                   @click="login">登陆</el-button>
      </el-form>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username:'',
        password: ''
      }
    }
  },
  methods: {
    login() {
      if(this.loginForm.username && this.loginForm.password) {
        if(this.loginForm.username === 'admin' && this.loginForm.password === 'admin') {
          this.$store.dispatch('getUserInfo').then(() => {
            this.$router.push({path:'/'})
          })
        }else {
          this.$message.error('用户名或密码错误')
        }
      }else {
        this.$message.error('用户名或密码不能为空')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: #f3f3f3;
    .login-content {
      margin-top: 200px;
      background: #fff;
      width: 320px;
      height: 250px;

    }
    .login-form {
      margin: 40px auto 0;
      width: 200px;
    }
  }
</style>


