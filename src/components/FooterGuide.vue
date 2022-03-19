<template>
  <div class="footer-guide">
    <a
      href="javascript:;"
      :class="{ selected: '/home' == $route.path }"
      @click="goTo('/home')"
    >
      <span><i class="iconfont zh-shop-waimai-"></i></span>
      <span>外卖</span>
    </a>

    <a
      href="javascript:;"
      :class="{ selected: '/search' == $route.path }"
      @click="goTo('/search')"
    >
      <span><i class="iconfont zh-shop-sousuo"></i></span>
      <span>搜索</span>
    </a>
    <a
      href="javascript:;"
      :class="{ selected: '/order' == $route.path }"
      @click="goTo('/order')"
    >
      <span><i class="iconfont zh-shop-dingdan"></i></span>
      <span>订单</span>
    </a>
    <a
      href="javascript:;"
      :class="{ selected: '/mine' == $route.path }"
      @click="goTo('/mine')"
    >
      <span><i class="iconfont zh-shop-wode"></i></span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "footer-guide",
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/css/mixmins.less");
@import url("../assets/css/iconfont/iconfont.css");
.footer-guide {
  .top-border-1px(#e4e4e4);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 50px;
  width: 100%;
  background-color: #fff;
  padding-bottom: 4px;

  .selected {
    color: #02a774;
  }

  > a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :first-child {
      margin-bottom: 2px;
      > i {
        font-size: 25px;
      }
    }
    :last-child {
      font-size: 14px;
    }
  }
}
</style>