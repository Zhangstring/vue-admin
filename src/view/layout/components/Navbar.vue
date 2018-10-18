<template>
  <div class="navbar">
    <span>退出</span>
    <span>{{name}}</span>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    this.name = this.$store.getters.name
  }
}
</script>
<style lang="scss" scoped>
  .navbar {
    box-sizing: border-box;
    padding-top: 20px;
    span {
      margin-right: 10px;
      float: right;
      cursor:pointer;
    }
  }
</style>

