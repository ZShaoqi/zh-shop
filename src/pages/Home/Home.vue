<template>
  <div class="home">
    <HeaderTop :title="address" class="home-header-top">
      <div slot="left" class="home-header-search">
        <span><i class="iconfont zh-shop-sousuo"></i></span>
      </div>
      <div slot="right" class="home-header-login">
        <a href="javascript:;">登录 | 注册</a>
      </div>
    </HeaderTop>
    <div class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg" />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg" />
              </div>
              <span>海鲜</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <ShopList />
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "m-home",
  data() {
    return {
      address: "广东省男凭.",
    };
  },
  components: {
    HeaderTop,
    ShopList,
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style lang="less" scoped>
.home {
  .home-header-top {
    display: flex;
    justify-content: space-between;
    .home-header-search {
      line-height: 45px;
      // float: left;
      .zh-shop-sousuo {
        padding-left: 16px;
        font-size: 26px;
        color: white;
        font-weight: 700;
      }
    }
    .home-header-login {
      line-height: 45px;
      // float: right;
      > a {
        color: white;
        font-size: 14px;
        padding-right: 16px;
      }
    }
  }
  .home_nav {
    margin-top: 45px;
    background-color: #ffffff;
    width: 100%;
    height: 200px;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        .swiper-slide {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .link_to_food {
            width: 25%;
            text-align: center;
            height: 100px;
            img {
              width: 50px;
              height: 50px;
            }
            span {
              display: inline-block;
              padding-top: 10px;
              font-size: 13px;
              color: #666666;
            }
          }
        }
      }
    }
  }
}
</style>