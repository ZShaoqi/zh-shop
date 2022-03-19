<template>
  <div class="mine">
    <HeaderTop title="我的" />
    <div class="user-msg">
      <div class="user-header clearfix" @click="userHeaderCLick">
        <div class="user-img">
          <i class="login-default iconfont zh-shop-wode"></i>
        </div>
        <span>登录/注册</span>
        <span>暂无绑定手机号</span>
        <span>></span>
      </div>
      <div class="user-wallet">
        <h4>
          <span class="amount"> <span class="number">0.00</span>元</span>
          <span class="header">我的余额</span>
        </h4>
        <h4>
          <span class="amount"> <span class="number">0</span>个</span>
          <span class="header">我的优惠</span>
        </h4>
        <h4>
          <span class="amount"> <span class="number">0</span>分</span>
          <span class="header">我的积分</span>
        </h4>
      </div>
    </div>
    <div class="user-service">
      <div class="order">
        <div>
          <span class="icon"></span> <span class="title">我的订单</span>
        </div>
        <span class="to">></span>
      </div>
      <div class="order">
        <div>
          <span class="icon"></span> <span class="title">积分商城</span>
        </div>
        <span class="to">></span>
      </div>
      <div class="order">
        <div>
          <span class="icon"></span> <span class="title">饿了么会员卡</span>
        </div>
        <span class="to">></span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop.vue";

export default {
  name: "m-mine",
  components: {
    HeaderTop,
  },
  methods: {
    userHeaderCLick() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/mixmins.less");
@import url("../../assets/css/iconfont/iconfont.css");

.mine {
  overflow: hidden;
  .user-msg {
    .top-border-1px(#e4e4e4);
    margin-top: 45px;
    .user-header {
      position: relative;
      width: 100%;
      height: 100px;
      background-color: #02a774;
      .user-img {
        float: left;
        margin-top: 20px;
        margin-left: 20px;
        .login-default {
          display: inline-block;
          width: 60px;
          height: 60px;
          font-size: 55px;
          line-height: 60px;
          text-align: center;
          background-color: gainsboro;
          border-radius: 50%;
        }
      }

      span:first-of-type {
        position: absolute;
        top: 27px;
        left: 90px;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
      }
      span:nth-of-type(2) {
        position: absolute;
        top: 60px;
        left: 90px;
        font-size: 14px;
        color: #ffffff;
      }

      span:nth-of-type(3) {
        position: absolute;
        top: 40px;
        right: 15px;
        font-size: 18px;
        color: #ffffff;
      }
    }
    .user-wallet {
      width: 100%;
      height: 80px;
      border: 1px solid #e4e4e4;
      display: flex;
      > h4 {
        flex: 1;
        width: 80px;
        border-right: 1px solid #e4e4e4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > .amount {
          color: #666666;

          > .number {
            font-size: 30px;
            font-weight: 700;
            color: #ff9900;
          }
        }
        > .header {
          margin-top: 10px;
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }
  .user-service {
    width: 100%;
    height: 160px;
    .bottom-border-1px(#e4e4e4);

    > .order {
      .top-border-1px(#e4e4e4);
      width: 100%;
      height: 53px;
      :first-child {
        padding-left: 20px;
        float: left;
        line-height: 53px;
      }
      :last-child {
        padding-right: 20px;
        float: right;
        line-height: 53px;
      }
    }
  }
}
</style>