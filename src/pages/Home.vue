<template>
  <div>
    <div>{{title}}</div>
    <el-button @click="onBtn">默认按钮</el-button>
    <ul>
      <li v-for="(item, index) in routers" :key="index">
          <el-button  @click="gotoPage(item)">{{item.name}}</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import $config from '@/config/index';
export default {
  name: 'home',
  data() {
    return {
      title: '首页',
      routers: $config.routes
    }
  },
  methods: {
    onBtn () {
      this.$message('6666')
    },
    gotoPage (item) {
      this.$router.push({
        name: item.name
      })
    }
  },
  mounted () {
    // console.log('mounted: ',this.$router);
  }
}
</script>

<style lang="scss" scoped>

</style>