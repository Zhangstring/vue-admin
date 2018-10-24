<template>
  <div>
    <div class="logo">后台</div>
    <el-menu class="sidebar-menu"
             :default-active="$route.path"
             background-color="#001529"
             text-color="#fff"
             active-text-color="#ffd04b">
      <div v-for="(item, index) in menu"
           :key="index">
        <!-- 二级目录 -->
        <el-submenu :index="item.index"
                    v-if="item.children">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group>
            <router-link tag="div"
                         :to="item2.path"
                         v-for="(item2, index2) in item.children"
                         :key="index2">
              <el-menu-item :index="item2.path">{{item2.title}}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <!-- 一级目录 -->
        <router-link tag="div"
                     :to="item.path"
                     v-else>
          <el-menu-item :index='item.path'>
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </router-link>

      </div>

    </el-menu>

  </div>
</template>
<script>
export default {
   name: 'Sidebar',
   data() {
     return {
       menu: [
         {
           title: '首页',
           path: '/home',
         },
         {
           title: 'UI',
           path: '/ui'
         },
         {
           title: '表格',
           path: '/table'
         }
       ]
     }
   }
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

