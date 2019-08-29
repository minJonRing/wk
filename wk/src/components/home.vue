<template>
  <div class="home" ref="home">
    <!-- loading -->
    <div :class="['loading',{'active':start}]" @click.stop="handleStart">
      <div class="loading-text">
        <p>{{loadingText}}</p>
        <p>建议手机横屏观看</p>
      </div>
      <div class="progress">
        <span class="bar" :style="{'width':bar+'%'}"></span>
      </div>
    </div>
    <!-- video -->
    <div class="video" @click.stop="handleCloseVideo" v-if="!closeVideo">
      <div :class="['box',{'active':trans}]" :style="{'width':hh+'px','height':ww+'px'}">
        <canvas class="can"></canvas>
        <video
          src="http://www.hzsinq.com/static/img/init.mp4"
          ref="video"
          x-webkit-airplay="true"
          webkit-playsinline="true"
          playsinline="true"
          preload="auto"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
        ></video>
      </div>
    </div>
    <!-- mp3 -->
    <div class="mp3">
      <audio src="http://www.hzsinq.com/static/img/bg.mp3" loop ref="audio"></audio>
    </div>
    <!-- swiper -->
    <swiper
      :class="['swiper swiper-one',{'active':closeVideo}]"
      :options="swiperOption"
      ref="mySwiper"
    >
      <!-- slides -->
      <swiper-slide :class="{'active':swiperNow == 0}">
        <div class="box" :style="{'width':hh+'px','height':ww+'px'}">
          <img :class="{'active':trans && swiperNow == 0}" :src="p4Img" v-if="p4Img" alt />
          <div :class="['controller',{'active':trans && swiperNow == 0}]">
            <a href="javascript:" class="a1" @click.stop="handleToChild(3)"></a>
            <a href="javascript:" class="a2" @click.stop="handleToChild(5)"></a>
            <a href="javascript:" class="a3" @click.stop="handleToChild(0)"></a>
            <a href="javascript:" class="a4" @click.stop="handleToChild(4)"></a>
            <a href="javascript:" class="a5" @click.stop="handleToChild(2)"></a>
            <a href="javascript:" class="a6" @click.stop="handleToChild(1)"></a>
          </div>
        </div>
      </swiper-slide>
      <!-- slides -->
      <swiper-slide :class="{'active':swiperNow == 1}">
        <swiper class="swiper active" :options="swiperChildOption" ref="childSwiper">
          <!-- slides -->
          <swiper-slide :class="{'active':swiperNow == 1}">
            <div
              :class="['box p5-box',{'active':trans && swiperNow == 1}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <img
                :class="['bg p5-box-bg',{'active':trans && swiperNow == 2}]"
                src="http://www.hzsinq.com/static/img/p5/1.png"
                alt
              />
              <a href="javascript:" class="p5-1" @click.stop="handleGetGrand(0)">
                <img src="/static/img/p5/at/2.png" alt />
              </a>
              <a href="javascript:" class="p5-2">
                <img src="/static/img/p5/at/3.png" alt />
              </a>
              <a href="javascript:" class="p5-3" target="_blank">
                <img src="/static/img/p5/at/4.png" alt />
              </a>
              <a href="javascript:" class="p5-4" @click.stop="handleGetGrand(1)">
                <img src="/static/img/p5/at/1.png" alt />
              </a>
              <a class="call" href="tel:15657162923"></a>
            </div>
          </swiper-slide>
          <!-- <swiper-slide :class="{'active':swiperNow == 1}">
            <p5
              :direction="trans"
              :ww="ww"
              :hh="hh"
              :config="config.p2"
              @handleGrand="handleGetGrand"
            />
          </swiper-slide>-->
          <swiper-slide :class="{'active':swiperNow == 1}">
            <div
              :class="['box p5-box',{'active':trans && swiperNow == 1}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <img
                :class="['bg p5-box-bg',{'active':trans && swiperNow == 2}]"
                src="http://www.hzsinq.com/static/img/p5/2.png"
                alt
              />
              <a href="javascript:" class="p5-1" @click.stop="handleGetGrand(0)">
                <img src="/static/img/p5/jn/2.png" alt />
              </a>
              <a href="javascript:" class="p5-2">
                <img src="/static/img/p5/jn/3.png" alt />
              </a>
              <a href="javascript:" class="p5-3" target="_blank">
                <img src="/static/img/p5/jn/4.png" alt />
              </a>
              <a href="javascript:" class="p5-4" @click.stop="handleGetGrand(1)">
                <img src="/static/img/p5/jn/1.png" alt />
              </a>
              <a class="call" href="tel:15088716743"></a>
            </div>
          </swiper-slide>
          <swiper-slide :class="{'active':swiperNow == 1}">
            <div
              :class="['box p5-box',{'active':trans && swiperNow == 1}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <img
                :class="['bg p5-box-bg',{'active':trans && swiperNow == 2}]"
                src="http://www.hzsinq.com/static/img/p5/3.png"
                alt
              />
              <a href="javascript:" class="p5-1" @click.stop="handleGetGrand(0)">
                <img src="/static/img/p5/kh/1.png" alt />
              </a>
              <a href="javascript:" class="p5-2">
                <img src="/static/img/p5/kh/3.png" alt />
              </a>
              <a class="p5-3" href="javascript:" target="_blank">
                <img src="/static/img/p5/kh/4.png" alt />
              </a>
              <a href="javascript:" class="p5-4" @click.stop="handleGetGrand(1)">
                <img src="/static/img/p5/kh/2.png" alt />
              </a>
              <a class="call" href="tel:0571-28822255"></a>
            </div>
          </swiper-slide>
          <swiper-slide :class="{'active':swiperNow == 1}">
            <div
              :class="['box p5-box',{'active':trans && swiperNow == 1}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <img
                :class="['bg p5-box-bg',{'active':trans && swiperNow == 2}]"
                src="http://www.hzsinq.com/static/img/p5/4.png"
                alt
              />
              <a href="javascript:" class="p5-1" @click.stop="handleGetGrand(0)">
                <img src="/static/img/p5/lc/1.png" alt />
              </a>
              <a href="javascript:" class="p5-2">
                <img src="/static/img/p5/lc/3.png" alt />
              </a>
              <a class="p5-3" href="javascript:" target="_blank">
                <img src="/static/img/p5/lc/4.png" alt />
              </a>
              <a href="javascript:" class="p5-4" @click.stop="handleGetGrand(1)">
                <img src="/static/img/p5/lc/2.png" alt />
              </a>
              <a class="call" href="tel:15990174232"></a>
            </div>
          </swiper-slide>
          <swiper-slide :class="{'active':swiperNow == 1}">
            <div
              :class="['box p5-box',{'active':trans && swiperNow == 1}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <img
                :class="['bg p5-box-bg',{'active':trans && swiperNow == 2}]"
                src="http://www.hzsinq.com/static/img/p5/5.png"
                alt
              />
              <a href="javascript:" class="p5-1" @click.stop="handleGetGrand(0)">
                <img src="/static/img/p5/wl/1.png" alt />
              </a>
              <a href="javascript:" class="p5-2">
                <img src="/static/img/p5/wl/4.png" alt />
              </a>
              <a href="javascript:" target="_blank" class="p5-3">
                <img src="/static/img/p5/wl/3.png" alt />
              </a>
              <a href="javascript:" class="p5-4" @click.stop="handleGetGrand(1)">
                <img src="/static/img/p5/wl/2.png" alt />
              </a>
              <a class="call" href="tel:15055308370"></a>
            </div>
          </swiper-slide>
          <swiper-slide :class="{'active':swiperNow == 1}">
            <div
              :class="['box p5-box',{'active':trans && swiperNow == 1}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <img
                :class="['bg p5-box-bg',{'active':trans && swiperNow == 2}]"
                src="http://www.hzsinq.com/static/img/p5/6.png"
                alt
              />
              <a href="javascript:" class="p5-1" @click.stop="handleGetGrand(0)">
                <img src="/static/img/p5/yh/1.png" alt />
              </a>
              <a href="javascript:" class="p5-2" @click.stop="handleGetGrand(1)">
                <img src="/static/img/p5/yh/4.png" alt />
              </a>
              <a
                href="/static/img/1.pdf"
                download="拱墅汽车互联网小镇政策扶持汇编和举措——特色小镇申报.pdf"
                target="_blank"
                class="p5-3"
              >
                <img src="/static/img/p5/yh/3.png" alt />
              </a>
              <a href="javascript:" class="p5-4" @click.stop="handleGetGrand(2)">
                <img src="/static/img/p5/yh/2.png" alt />
              </a>
              <a class="call" href="tel:0571-88998899"></a>
            </div>
          </swiper-slide>
          <div class="swiper-child-pagination" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      <!-- slides -->
      <swiper-slide :class="{'active':swiperNow == 2}">
        <swiper class="swiper active" :options="swiperGrandOption" ref="grandSwiper">
          <!-- slides -->
          <swiper-slide
            :class="{'active':1}"
            v-for="(item,index) in config[childIndex]"
            :key="index"
          >
            <div
              :class="['box p6-box',{'active':trans && swiperNow == 2}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <img class="p6-box-bg" :src="item.add" alt />
              <a class="p6-call" :href="item.tel"></a>
              <div class="p6-cont" if="item.isText">
                <swiper class="swiper active" :options="swiperScrollOption" ref="scrollSwiper">
                  <!-- slides -->
                  <swiper-slide class="active scroll-swiper">
                    <div class="p6-cont-box" v-for="(i,j) in item.text" :key="j">
                      <div class="p6-cont-title">{{i.name}}</div>
                      <div class="p6-cont-text" v-if="i.cont" v-html="i.cont"></div>
                      <div class="p6-cont-text" v-if="i.child">
                        <p v-for="(x,y) in i.child" :key="y">{{x}}</p>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-grand-pagination" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import P5 from "./p5";
import config from "../../static/js/config";
export default {
  name: "home",
  data() {
    return {
      host: "http://www.hzsinq.com",
      config: config.p6,
      // 进度条
      bar: 0,
      loadingText: "六大万科中心，即将开启",
      imgOver: false,
      start: false,
      // 视频
      closeVideo: false,
      startVideo: false,
      // 预加载
      awaitOne: 0,
      awaitTow: 0,
      // 长宽
      ww: 0,
      hh: 0,
      // swiper
      swiperNow: 0,
      trans: false,
      swiperTo: false,
      swiperTo1: false,
      swiperOption: {},
      swiperChildOption: {},
      swiperGrandOption: {},
      swiperScrollOption: {},
      // 待加载图片
      p4Img: "",
      awaitImg: [],
      loadImg: [],
      childIndex: 0
    };
  },
  created() {
    setRem(); //设置rem
    this.handleInitSwiper(0); //设置swiper配置
    // this.handleInitImg(); //设置img
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    swiperChild() {
      return this.$refs.childSwiper.swiper;
    },
    swiperGrand() {
      return this.$refs.grandSwiper.swiper;
    },
    videoEl() {
      return this.$refs.video;
    },
    audioEl() {
      return this.$refs.audio;
    }
  },
  watch: {
    awaitOne(db) {
      this.bar = Math.round((db / 9) * 100);
      if (db == 9) {
        this.loadingText = "点击进入";
        this.handleStart();
      }
    },
    closeVideo(db) {
      if (db) {
        if (this.$refs.audio.paused) {
          //   this.$refs.audio.play();
          document.querySelector("audio").play();
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.ww = this.$refs.home.clientWidth;
      this.hh = this.$refs.home.clientHeight;
    });
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    var _this = this;
    window.addEventListener(evt, resize, false);
    function resize(fals) {
      if (window.orientation == 0 || window.orientation == 180) {
        _this.trans = false; // alert("竖屏");
      } else {
        _this.trans = true; // alert("横屏");
      }
    }
    resize(true);
    this.handleAwaitOne();
  },
  methods: {
    handleStart() {
      if (this.bar < 99) {
        return;
      }
      this.imgOver = true;
      this.start = true;
      try {
        document.addEventListener(
          "WeixinJSBridgeReady",
          function() {
            document.querySelector("video").play();
            document.querySelector("audio").play();
          },
          false
        );
      } catch (error) {}
      setInterval(() => {
        try {
          let a = document.querySelector("video");
          let b = document.querySelector("audio");
          if (a.paused) {
            a.play();
          }
          if (b.paused) {
            b.play();
          }
        } catch (error) {}
      }, 300);
      //   document.querySelector("video").play();
      //   if (this.$refs.audio.paused) {
      //     this.$refs.audio.play();
      //     // document.querySelector("audio").play();
      //   }
    },
    handleInitSwiper(i = 0) {
      //初始化swiper
      let _this = this;
      this.swiperOption = {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          slideChangeTransitionStart: function() {
            var num = this.activeIndex;
            if (num == i + 1 && _this.swiperNow == i && !_this.swiperTo) {
              _this.swiper.slideTo(i);
            } else if (
              num == i + 2 &&
              _this.swiperNow == i + 1 &&
              !_this.swiperTo1
            ) {
              _this.swiper.slideTo(i + 1);
            } else {
              if (num == i) {
                _this.swiperTo = false;
              }
              if (num == i + 1) {
                _this.swiperTo1 = false;
              }
              _this.swiperNow = num;
            }
          }
        }
      };
      this.swiperChildOption = {
        pagination: { el: ".swiper-child-pagination" },
        on: {
          slideChangeTransitionStart: function() {
            _this.childIndex = this.activeIndex;
          }
        }
      };
      this.swiperGrandOption = {
        mousewheel: true,
        slidesPerView: "auto",
        // freeMode: true,
        pagination: { el: ".swiper-grand-pagination" }
      };
      this.swiperScrollOption = {
        direction: "vertical",
        slidesPerView: "auto",
        mousewheelControl: true,
        freeMode: true,
        nested: true
      };
    },
    handleInitImg() {
      //JS 加载图片
      // p4 img
      let img = new Image();
      img.onload = () => {
        this.awaitOne += 1;
        this.p4Img = "http://www.hzsinq.com/static/img/p4.png";
      };
      img.src = "http://www.hzsinq.com/static/img/p4.png";
      for (let i = 1; i < 7; i++) {
        let img = new Image();
        img.onload = () => {
          this.awaitOne += 1;
        };
        img.src = "http://www.hzsinq.com/static/img/p5/" + i + ".png";
      }
    },
    handleCloseVideo() {
      this.closeVideo = true;
      if (this.$refs.audio.paused) {
        //   this.$refs.audio.play();
        document.querySelector("audio").play();
      }
    },
    handleAwaitOne() {
      //控制视频播放，暂停
      let videoPlay = false,
        audioPlay = false;
      this.videoEl.oncanplay = () => {
        this.awaitOne += 1;
        videoPlay = true;
      };
      this.videoEl.onended = () => {
        this.closeVideo = true;
        if (this.$refs.audio.paused) {
          //   this.$refs.audio.play();
          document.querySelector("audio").play();
        }
      };
      // mp3
      this.audioEl.oncanplay = () => {
        this.awaitOne += 1;
        audioPlay = true;
      };

      setTimeout(() => {
        if (!videoPlay) {
          this.awaitOne += 1;
        }
        if (!audioPlay) {
          this.awaitOne += 1;
        }
        this.handleInitImg();
      }, 5000);
    },
    handleShowImg(i) {
      //判断是否当前页
      return this.loadImg[i]
        ? this.loadImg[i].bg && this.swiperNow == i
        : false;
    },
    handleToChild(i) {
      this.swiperTo = true;
      this.swiper.slideTo(1);
      this.swiperChild.slideTo(i, 0);
      this.childIndex = i;
    },
    handleGetGrand(i) {
      this.swiperTo1 = true;
      this.swiper.slideTo(2);
      this.swiperGrand.slideTo(i, 0);
    }
  },
  components: {
    P5
  }
};
function setRem() {
  var dpr, rem, scale;
  var docEl = document.documentElement;
  var fontEl = document.createElement("style");
  var metaEl = document.querySelector('meta[name="viewport"]');
  dpr = window.devicePixelRatio || 1;
  scale = 1 / dpr;
  let _win = window.screen.width || docEl.clientWidth;
  rem = (_win * dpr) / 10;
  // 设置viewport，进行缩放，达到高清效果
  metaEl.setAttribute(
    "content",
    "width=" +
      dpr * _win +
      ", " +
      "initial-scale = " +
      scale +
      ", maximum-scale = " +
      scale +
      "," +
      "minimum-scale = " +
      scale +
      ", user-scalable = no "
  );
  // 设置data-dpr属性，留作的css hack之用
  docEl.setAttribute("data-dpr", dpr);
  // 动态写入样式
  docEl.style.fontSize = rem + "px";
  // 给js调用的，某一dpr下rem和px之间的转换函数
  window.rem2px = function(v) {
    v = parseFloat(v);
    return v * rem;
  };
  window.px2rem = function(v) {
    v = parseFloat(v);
    return v / rem;
  };
  window.dpr = dpr;
  window.rem = rem;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scroll-swiper {
  height: auto;
  display: block !important;
}
.home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    z-index: 9;
    opacity: 1;
    transition-duration: 600ms;
    .loading-text {
      position: absolute;
      width: 100%;
      text-align: center;
      color: #fff;
      bottom: 47%;
      font-size: 0.4rem;
      line-height: 1.8;
    }
    .progress {
      position: absolute;
      width: 60%;
      height: 6px;
      border-radius: 3px;
      left: 20%;
      bottom: 45%;
      background-color: #fefefe;
      overflow: hidden;
      .bar {
        display: block;
        width: 0;
        height: 100%;
        background: -webkit-linear-gradient(
          45deg,
          rgba(69, 212, 196, 1),
          rgba(104, 149, 213, 1)
        );
        transition-duration: 300ms;
      }
    }
    &.active {
      opacity: 0;
      z-index: -1;
    }
  }
  .video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: all;
    transition-duration: 600ms;
    overflow: hidden;
    z-index: 6;
    .box {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      transform-origin: 50% 50%;
      transform: matrix(0, 1, -1, 0, 0, 0);
      video {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
        object-position: 50% 50%;
      }
      .can {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      &.active {
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
    }
  }
  .mp3 {
    position: fixed;
    opacity: 0;
    z-index: -9;
  }
  .swiper-wrapper {
    flex-direction: column;
  }
  .swiper {
    width: 100%;
    height: 100%;
    opacity: 0;
    &.active {
      opacity: 1;
    }
    // &.swiper-one {
    //   color: red;
    //   .swiper-wrapper {
    //     flex-direction: column;
    //   }
    // }
    .swiper-slide {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-property: all;
      opacity: 0;
      transform: matrix(1.1, 0, 0, 1.1, 0, 0);
      transition-duration: 600ms;
      transition-delay: 200ms;
      overflow: hidden;
      &.active {
        opacity: 1;
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
      .box {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        transform-origin: 50% 50%;
        transform: matrix(0, 1, -1, 0, 0, 0);
        img {
          width: 100%;
          // height: 100%;
          // transition-duration: 600ms;
          &.active {
            transform-origin: 50% 50%;
            transform: matrix(0, -1, 1, 0, 0, 0);
          }
          &.p5-box-bg,
          &.p6-box-bg {
            height: 100%;
          }
        }
        &.active {
          transform: matrix(1, 0, 0, 1, 0, 0);
        }
        &.p5-box {
          a {
            width: 60%;
            left: 5.5rem;
          }
          .p5-1 {
            position: absolute;
            top: 2rem;
          }
          .p5-2 {
            position: absolute;
            top: 3.5rem;
          }
          .p5-3 {
            position: absolute;
            top: 5rem;
          }
          .p5-4 {
            position: absolute;
            top: 6.5rem;
          }
          .call {
            position: absolute;
            width: 1rem;
            height: 1rem;
            bottom: 0.8rem;
            left: 15rem;
          }
        }
        .controller {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          &.active {
            transform-origin: 50% 50%;
            transform: matrix(0, -1, 1, 0, 0, 0);
          }
          a {
            position: absolute;
            width: 3rem;
            height: 3rem;
            &.a1 {
              top: 1.5rem;
              left: 2.6rem;
            }
            &.a2 {
              top: 1.5rem;
              left: 10rem;
            }
            &.a3 {
              top: 1.5rem;
              left: 13.9rem;
            }
            &.a4 {
              top: 6rem;
              left: 2.1rem;
            }
            &.a5 {
              top: 6rem;
              left: 7.1rem;
            }
            &.a6 {
              top: 6rem;
              left: 11.3rem;
            }
          }
        }
        .p6-call {
          position: absolute;
          width: 1rem;
          height: 1rem;
          bottom: 0.3rem;
          right: 1rem;
        }
        .p6-cont {
          position: absolute;
          width: 9rem;
          height: 5rem;
          left: 6rem;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          .p6-cont-box {
            width: 100%;
            display: flex;
            align-items: flex-start;
            line-height: 1.4;
            padding-bottom: 0.2rem;
            .p6-cont-title {
              background-color: #b2b2b2;
              margin-right: 0.2rem;
              font-size: 0.36rem;
              padding: 0 0.1rem;
              color: #f1f1f1;
              flex-shrink: 0;
            }
            .p6-cont-text {
              font-size: 0.36rem;
              color: #767777;
            }
          }
        }
      }
    }
    .swiper-child-pagination {
      position: absolute;
      z-index: 3;
    }
    .swiper-grand-pagination {
      position: absolute;
      z-index: 3;
    }
  }
}
</style>
