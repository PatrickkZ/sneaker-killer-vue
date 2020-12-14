<template>
  <el-container>
    <el-header style="padding-left: 0;padding-right: 0;z-index: 1000;height: 96px">
      <sneaker-header/>
    </el-header>
      <el-main>
        <router-view/>
      </el-main>
  </el-container>
</template>

<script>
import SneakerHeader from "@/components/content/SneakerHeader";
export default {
  name: "Layout",
  components:{
    SneakerHeader
  }
}
</script>

<style scoped>

</style>
