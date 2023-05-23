<template>
  <div>
    <div>{{title}}</div>
    <el-button @click="onBtn">默认按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        title: '首页'
      }
    },
    methods: {
      onBtn () {
        this.$message('6666')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>