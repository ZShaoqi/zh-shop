<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.footerShow" />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide.vue";
export default {
  name: "App",
  components: {
    FooterGuide,
  },
};
</script>

<style lang="less" scoped>
@import url("./assets/css/base.css");
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>