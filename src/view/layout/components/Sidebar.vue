<template>
  <div>
    <div class="logo">运营后台</div>
    <el-menu class="sidebar-menu"
             default-active="1"
             background-color="#001529"
             text-color="#fff"
             active-text-color="#ffd04b">
      <router-link tag="div"
                   to="/home">>
        <el-menu-item index='1'>
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <router-link tag="div"
                       to="/user">
            <el-menu-item index="2-1">user</el-menu-item>
          </router-link>
          <router-link tag="div"
                       to="/manager">
            <el-menu-item index="2-2">manager</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index='3'>
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>
<script>
export default {
   name: 'Sidebar'
}
</script>
<style lang="scss" scoped>
  .logo{
    width: 160px;
    height: 50px;
    margin: 20px auto;
    font-size: 24px;
    text-align: center;
    color: #fff;
  }
  .sidebar-menu {
    width: 200px;
  }
</style>

