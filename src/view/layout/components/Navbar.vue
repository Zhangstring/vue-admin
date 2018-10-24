<template>
  <div class="navbar">
    <div class="user-info">
      <span>欢迎您！管理员：{{name}}</span>
      <span class="btn"
            @click="quit">退出登陆</span>
      <span class="btn">修改密码</span>
      <span class="btn"
            @click="goHome">返回首页</span>
    </div>
    <div class="time">{{nowtime}}</div>
  </div>
</template>
<script>
import {formatDate} from '@/utils'
import {getToken,removeToken} from '@/utils/auth.js'
export default {
  name: 'Navbar',
  data() {
    return {
      name: '',
      nowtime: ''
    }
  },
  created() {
    this.getName();
    this.getNowTime();
  },
  mounted() {
  },
  methods: {
    //获取用户信息
    getName() {
      const token = getToken()
      if(token === 'admin') {
        this.name = 'admin'
      }
    },
    //退出登陆清除token
    quit() {
      removeToken()
      this.$router.push({path:'/login'})
    },
    //返回首页
    goHome() {
      this.$router.push({path: '/home'})
    },
    //获取当前时间
    getNowTime () {
      this.nowtime = formatDate(new Date(),"yyyy.MM.dd hh:mm:ss")
      setInterval(() => {
        this.nowtime = formatDate(new Date(),"yyyy.MM.dd hh:mm:ss")
      },1000)
    }
  }
}
</script>
<style lang="scss" scoped>
  .navbar {
    box-sizing: border-box;
    font-size: 14px;
    .user-info {
      line-height: 30px;
      padding-right: 20px;
      text-align: right;
      span {
        margin-right: 15px;
      }
      .btn {
        margin-right: 10px;
        color: #409EFF;
        cursor: pointer;
      }
      .btn:hover {
        color: #FF6600;
      }
    }
    .time {
      padding-right: 30px;
      line-height: 30px;
      text-align: right;
    }

  }
</style>

