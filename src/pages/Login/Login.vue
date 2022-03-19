<template>
  <div class="login clearfix">
    <div class="back" @click="goBack">&lt;</div>
    <h2 class="title">饿了么外卖</h2>
    <div class="login-msg-container">
      <div class="login-btn-container">
        <button
          class="msg-btn"
          :class="{ 'btn-active': isMsg }"
          @click="isMsg = !isMsg"
        >
          短信登录
        </button>
        <button
          class="psd-btn"
          :class="{ 'btn-active': !isMsg }"
          @click="isMsg = !isMsg"
        >
          密码登录
        </button>
      </div>
      <div class="login-msg">
        <div class="msg" v-show="isMsg">
          <div class="phone-box">
            <input type="text" placeholder="手机号" />
            <button>获取验证码</button>
          </div>
          <div class="validation">
            <input type="text" placeholder="获取验证码" />
          </div>
          <h4 class="prompt-container">
            温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意<a
              href=""
            >
              《用户协议》
            </a>
          </h4>
        </div>
        <div class="psd" v-show="!isMsg">
          <div class="user-account">
            <input type="text" placeholder="手机/邮箱/用户名" />
          </div>
          <div class="user-pwd">
            <input type="password" placeholder="密码" />
          </div>
          <div class="validation">
            <input type="password" placeholder="验证码" />
          </div>
        </div>
      </div>
    </div>
    <button class="login-submit" @click="loginClick">登录</button>
    <h3 class="about-us">关于我们</h3>
  </div>
</template>

<script>
export default {
  name: "user-login",
  data() {
    return {
      isMsg: true,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    loginClick() {
      console.log("app login");
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  overflow: hidden;
  background-color: #ffffff;
  position: relative;
  padding: 0 10%;
  .back {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
  }
  .title {
    margin-top: 55px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    color: #02a774;
  }
  .login-msg-container {
    margin-top: 30px;
    .login-btn-container {
      display: flex;
      justify-content: center;
      > button {
        border: none;
        font-size: 14px;
        margin: 0 15px;
        background-color: #fff;
      }

      .btn-active {
        color: #02a774;
        border-bottom: #02a774 3px solid;
      }
    }

    .login-msg {
      .msg {
        margin-top: 10px;
        .phone-box {
          border: 1px solid #e4e4e4;

          display: flex;
          border-radius: 4px;

          > input {
            flex: 1;
            padding-left: 10px;
            width: 100%;
            height: 48px;
            font-size: 14px;
          }
          > button {
            width: 90px;
            height: 48px;
            border: none;
            background-color: #ffffff;
            color: #999999;
          }
        }
        .validation {
          margin-top: 15px;
          border: 1px solid #e4e4e4;
          border-radius: 4px;
          width: 100%;
          height: 48px;
          font-size: 14px;
          overflow: hidden;
          > input {
            padding-left: 10px;
            width: 100%;
            height: 48px;
          }
        }
      }
      .psd {
        margin-top: 10px;
        input {
          font-size: 14px;
        }
        .user-account {
          margin-top: 15px;
          overflow: hidden;
          border: 1px solid #e4e4e4;
          border-radius: 4px;
          width: 100%;
          height: 48px;
          > input {
            padding-left: 10px;

            width: 100%;
            height: 48px;
          }
        }
        .user-pwd {
          margin-top: 15px;
          overflow: hidden;
          border: 1px solid #e4e4e4;
          border-radius: 4px;
          width: 100%;
          height: 48px;
          > input {
            padding-left: 10px;

            width: 100%;
            height: 48px;
          }
        }
        .validation {
          margin-top: 15px;
          overflow: hidden;
          border: 1px solid #e4e4e4;
          border-radius: 4px;
          width: 100%;
          height: 48px;
          > input {
            padding-left: 10px;

            width: 100%;
            height: 48px;
          }
        }
      }
    }
  }
  .prompt-container {
    margin-top: 15px;
    font-size: 14px;
    line-height: 20px;
    color: #999999;
    > a {
      color: #02a774;
    }
  }
  .login-submit {
    margin-top: 20px;
    width: 100%;
    height: 42px;
    color: #ffffff;
    font-size: 16px;
    background-color: #4cd96f;
    border: none;
    border-radius: 5px;
  }
  .about-us {
    margin-top: 15px;
    width: 100%;
    font-size: 14px;
    color: #999999;
    text-align: center;
  }
}
</style>