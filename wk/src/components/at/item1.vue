<template>
  <div class="info">
    <div :class="['box',{'none':!direction}]" :style="{'width':hh+'px','height':ww+'px'}">
      <div class="info-left">
        <div class="info-top">
          <div class="info-return">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="info-title">
            <p class="info-en">VANKE</p>
            <em></em>
            <p class="info-cn">杭州</p>
          </div>
        </div>
        <div class="info-text">奥体万科中心</div>
      </div>
      <div class="info-right">
        <div class="info-cont">
          <div class="info-item">
            <div class="info-item-before">交通区位</div>
            <div class="info-item-cont">
              <p>
                <span class="block">亚奥门户，占位钱江世纪城核心商务区</span>
                <span class="block">地铁2号线、6号线(在建中)丰北占约300米；已开通的庆春隧道、</span>
                <span class="block">在建的博奥隧道(预计19年底通车)和望江路隧道(预计19年通车)</span>
              </p>
              <em class="bar1"></em>
              <em class="bar2"></em>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item-before">企业入驻</div>
            <div class="info-item-cont">
              <p>
                <span class="block none">跨</span>
                <span class="block none">跨</span>
                <span class="block">跨国企业 区域总部</span>
              </p>
              <em class="bar1"></em>
              <em class="bar2"></em>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item-before">政策利好</div>
            <div class="info-item-cont">
              <p>
                <span class="block none">跨</span>
                <span class="block">钱江世纪城3+3政策 以"金融、总部、科技"为主导和以"体育、</span>
                <span class="block">会展、音乐"为特色的产业集群发展格局</span>
              </p>
              <em class="bar1"></em>
              <em class="bar2"></em>
            </div>
          </div>
          <div class="info-item">
            <div class="info-item-before">产品信息</div>
            <div class="info-item-cont">
              <p>
                <span class="block none">跨</span>
                <span class="block">总规模9.5万方,含办公6.1万方,单陈层建面2100方</span>
                <span class="block">交付时间2021年3月</span>
              </p>
              <em class="bar1"></em>
              <em class="bar2"></em>
            </div>
          </div>
        </div>
        <phone />
      </div>
      <div
        class="info-bottom"
      >本宣传资料为邀约邀请,相关内容不排除因政府相关规划,规定及开发商未能控制的原因而发生变化。文中部分建筑楼体图片为效果图,与实际存在一定的差异。本公司保留对宣传资料修改的权利,敬请留意最新资料。</div>
    </div>
  </div>
</template>
<script>
import Phone from "../phone";
export default {
  name: "info",
  data() {
    return {};
  },
  props: ["direction", "ww", "hh"],
  mounted() {},
  components: {
    Phone
  }
};
</script>
<style lang="scss" scoped>
.block {
  display: block;
}
.none {
  opacity: 0;
}
.info {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .box {
    position: absolute;
    &.none {
      transform-origin: 50% 50%;
      transform: matrix(0, 1, -1, 0, 0, 0);
    }
    .info-left {
      position: relative;
      width: 29.75%;
      height: 100%;
      background-color: #333;
      .info-top {
        position: absolute;
        top: 0.355733rem;
        left: 0;
        padding-left: 0.4rem;
        display: flex;
        align-items: center;
        .info-return {
          display: flex;
          align-items: center;
          line-height: 1;
          span {
            display: block;
            width: 0.311266rem;
            height: 0.311266rem;
            border: 0.02668rem solid;
            transform-origin: 50% 50%;
            transform: rotate(45deg);
            border-color: transparent transparent rgba(255, 255, 255, 0.8)
              rgba(255, 255, 255, 0.8);
          }
        }
        .info-title {
          display: flex;
          align-items: center;
          color: #fff;
          line-height: 1;
          padding-left: 0.1rem;
          vertical-align: bottom;
          .info-en {
            font-weight: 600;
            font-size: 0.56rem;
          }
          .info-cn {
            font-size: 0.48rem;
          }
          em {
            height: 0.44rem;
            width: 2px;
            background-color: #fff;
            margin: 0 0.14rem;
          }
        }
      }
      .info-text {
        position: absolute;
        top: 1.822222rem;
        // top: 1.522222rem;
        left: 50%;
        margin-left: -0.5rem;
        // font-size: 0.96rem;
        font-size: 0.64rem;
        font-weight: bold;
        color: #fff;
        width: 0.64rem;
        // line-height: 1.333333rem;
        line-height: 1.03rem;
      }
    }
    .info-right {
      position: absolute;
      width: 12.666667rem;
      top: 50%;
      left: 4.444444rem;
      transform: translateY(-50%);
      background-color: #fff;
      box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.7);
      .info-cont {
        padding: 0.177778rem 0 0.755556rem;
        .info-item {
          display: flex;
          align-items: center;
          padding: 0 0.444444rem;
          .info-item-before {
            width: 2.133333rem;
            // font-size: 0.533333rem;
            font-size: 0.433333rem;
            letter-spacing: 0.1rem;
            color: #585858;
            line-height: 1;
            flex-shrink: 0;
            margin-top: 0.4rem;
          }
          .info-item-cont {
            position: relative;
            // font-size: 0.373333rem;
            font-size: 0.283333rem;
            color: #585858;
            width: 9.511111rem;
            // height: 1.44rem;
            padding: 0.1rem 0.888888rem 0.1rem 0.533333rem;
            line-height: 1.3;
            .bar1 {
              position: absolute;
              //   width: 0.8rem;
              width: 0.6rem;
              height: 0.04rem;
              background-color: #ccb897;
              left: 0;
              bottom: 0.4rem;
              transform-origin: 0 0;
              transform: rotate(45deg);
            }
            .bar2 {
              position: absolute;
              //   width: 8.9rem;
              width: 8.6rem;
              height: 0.04rem;
              background-color: #ccb897;
              left: 0.39rem;
              bottom: 0;
            }
          }
        }
      }
    }
    .info-bottom {
      position: absolute;
      bottom: 0.3555552rem;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 0.173333rem;
      color: #898989;
      line-height: 1;
    }
  }
}
</style>