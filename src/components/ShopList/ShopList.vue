<template>
  <div class="shop_container clearfix">
    <ul class="shop-list">
      <li>
        <div class="shop-icon"><img src="./images/shop/1.jpg" alt="" /></div>
        <div class="shop-msg">
          <div class="shop-brand">
            <span class="icon">品牌</span>
            <h4>锄禾日当午,汗滴...</h4>
            <div class="service-icon">
              <span>保</span><span>准</span><span>票</span>
            </div>
          </div>
          <div class="shop-sales">
            <span class="star">
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
            </span>
            <span class="score">5.0</span>
            <span class="sales">月售106单</span>
            <span class="special">蜂鸟专送</span>
          </div>
          <div class="shop-distribution">
            <span>20元起送/配送费约￥3元</span>
          </div>
        </div>
      </li>
      <li>
        <div class="shop-icon"><img src="./images/shop/1.jpg" alt="" /></div>
        <div class="shop-msg">
          <div class="shop-brand">
            <span class="icon">品牌</span>
            <h4>锄禾日当午,汗滴...</h4>
            <div class="service-icon">
              <span>保</span><span>准</span><span>票</span>
            </div>
          </div>
          <div class="shop-sales">
            <span class="star">
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
            </span>
            <span class="score">5.0</span>
            <span class="sales">月售106单</span>
            <span class="special">蜂鸟专送</span>
          </div>
          <div class="shop-distribution">
            <span>20元起送/配送费约￥3元</span>
          </div>
        </div>
      </li>
      <li>
        <div class="shop-icon"><img src="./images/shop/1.jpg" alt="" /></div>
        <div class="shop-msg">
          <div class="shop-brand">
            <span class="icon">品牌</span>
            <h4>锄禾日当午,汗滴...</h4>
            <div class="service-icon">
              <span>保</span><span>准</span><span>票</span>
            </div>
          </div>
          <div class="shop-sales">
            <span class="star">
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
            </span>
            <span class="score">5.0</span>
            <span class="sales">月售106单</span>
            <span class="special">蜂鸟专送</span>
          </div>
          <div class="shop-distribution">
            <span>20元起送/配送费约￥3元</span>
          </div>
        </div>
      </li>
      <li>
        <div class="shop-icon"><img src="./images/shop/1.jpg" alt="" /></div>
        <div class="shop-msg">
          <div class="shop-brand">
            <span class="icon">品牌</span>
            <h4>锄禾日当午,汗滴...</h4>
            <div class="service-icon">
              <span>保</span><span>准</span><span>票</span>
            </div>
          </div>
          <div class="shop-sales">
            <span class="star">
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
            </span>
            <span class="score">5.0</span>
            <span class="sales">月售106单</span>
            <span class="special">蜂鸟专送</span>
          </div>
          <div class="shop-distribution">
            <span>20元起送/配送费约￥3元</span>
          </div>
        </div>
      </li>
      <li>
        <div class="shop-icon"><img src="./images/shop/1.jpg" alt="" /></div>
        <div class="shop-msg">
          <div class="shop-brand">
            <span class="icon">品牌</span>
            <h4>锄禾日当午,汗滴...</h4>
            <div class="service-icon">
              <span>保</span><span>准</span><span>票</span>
            </div>
          </div>
          <div class="shop-sales">
            <span class="star">
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
              <i class="star-item"></i>
            </span>
            <span class="score">5.0</span>
            <span class="sales">月售106单</span>
            <span class="special">蜂鸟专送</span>
          </div>
          <div class="shop-distribution">
            <span>20元起送/配送费约￥3元</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "shop-list",
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/mixmins.less");
.shop_container {
  width: 100%;
  .shop-list {
    width: 100%;
    margin-bottom: 50px;
    li {
      .top-border-1px(#e4e4e4);
      height: 105px;
      box-sizing: border-box;
      background-color: #ffffff;
      .shop-icon {
        width: 23%;
        height: 105px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 75px;
          height: 75px;
        }
      }
      .shop-msg {
        float: right;
        width: 77%;
        height: 105px;
        // background-color: antiquewhite;
        display: flex;
        flex-direction: column;

        .shop-brand {
          margin-top: 15px;
          margin-left: 5px;
          margin-right: 10px;

          .icon {
            float: left;
            display: block;
            width: 28px;
            height: 15px;
            padding: 0 2px;
            border-radius: 2px;
            background-color: #ffd930;
            font-size: 13px;
          }
          h4 {
            margin-left: 5px;
            float: left;
            font-weight: 700;
          }
          .service-icon {
            float: right;
            height: 15px;
            color: #333333;
            display: flex;
            > span {
              display: block;
              width: 18px;
              height: 15px;
              border: 1px solid #f5f5f5;
              font-size: 11px;
              color: #999999;
              text-align: center;
            }
          }
        }
        .shop-sales {
          margin-top: 15px;

          .star {
            .star-item {
              display: inline-block;
              width: 10px;
              height: 10px;
              background: url("./images/stars/star24_on@2x.png");
              background-size: 10px;
            }
          }
          .score {
            margin-left: 4px;
            display: inline-block;
            font-size: 12px;
            color: #ff6000;
          }
          .sales {
            display: inline-block;
            margin-left: 5px;
            font-size: 12px;
            color: #666666;
          }
          .special {
            float: right;
            display: block;
            margin-right: 12px;
            font-size: 12px;
            color: #02a774;
            border: 1px solid #02a774;
          }
        }
        .shop-distribution {
          margin-top: 12px;
          > span {
            color: #666666;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>