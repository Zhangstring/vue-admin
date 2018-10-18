<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar class="navbar-container"></navbar>
      <app-main class="app-main-container"></app-main>
    </div>
  </div>
</template>
<script>
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  min-height: 100vh;
  .sidebar-container {
    position: fixed;
    left: 0;
    top: 9;
    width: 200px;
    height: 100vh;
    background: #001529;
  }
  .main-container {
    margin-left: 200px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .navbar-container {
      height: 65px;
      width: 100%;
    }
    .app-main-container {
      flex: auto;
      font-size: 14px;
      padding: 10px;
      background: #f0f2f5;
    }
  }

}

</style>
