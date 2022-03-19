<template>
  <div class="header-top">
    <slot name="left"></slot>
    <span class="header-title">{{ title }}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "header-top",
  props: ["title"],
};
</script>

<style lang="less" scoped>
.header-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 45px;
  background-color: #02a774;
  text-align: center;
  z-index: 200;
  > .header-title {
    line-height: 45px;
    color: #ffffff;
    font-size: 20px;
  }
}
</style>