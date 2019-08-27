<template>
  <div class="home" ref="home">
    <!-- loading -->
    <div :class="['loading',{'active':imgOver}]" @click.stop="handleStart">
      <div class="progress">
        <span class="bar" :style="{'width':bar+'%'}"></span>
      </div>
    </div>
    <!-- video -->
    <div class="video" @click.stop="closeVideo = true" v-if="!closeVideo">
      <div :class="['box',{'active':trans}]" :style="{'width':hh+'px','height':ww+'px'}">
        <canvas class="can"></canvas>
        <video
          src="/static/img/init.mp4"
          ref="video"
          muted
          x-webkit-airplay="true"
          webkit-playsinline="true"
          playsinline="true"
          preload="auto"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          autoplay
        ></video>
      </div>
    </div>
    <!-- mp3 -->
    <div class="mp3">
      <audio src="/static/img/bg.mp3" loop ref="audio"></audio>
    </div>
    <!-- swiper -->
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide :class="{'active':swiperNow == 0}">
        <div class="box" :style="{'width':hh+'px','height':ww+'px'}">
          <img
            :class="{'active':trans && swiperNow == 0}"
            :src="loadImg[0].bg"
            v-if="handleShowImg(0)"
            alt
          />
          <div class="controller">
            <a href="javascript:" class="a1" @click.stop="handleToChild(0)">11</a>
            <a href="javascript:" class="a2" @click.stop="handleToChild(1)">2</a>
            <a href="javascript:" class="a3" @click.stop="handleToChild(2)">3</a>
            <a href="javascript:" class="a4" @click.stop="handleToChild(3)">4</a>
            <a href="javascript:" class="a5" @click.stop="handleToChild(4)">5</a>
            <a href="javascript:" class="a6" @click.stop="handleToChild(5)">6</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide :class="{'active':swiperNow == 1}">
        <swiper class="swiper" :options="swiperChildOption" ref="childSwiper">
          <!-- slides -->
          <swiper-slide :class="{'active':swiperNow == 1}">
            <div
              :class="['box',{'active':trans && swiperNow == 1}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <a href="javascript:" @click.stop="handleGrand(0)">1</a>
              <a href="javascript:" @click.stop="handleGrand(1)">2</a>
              <a href="javascript:" @click.stop="handleGrand(2)">3</a>
              <a href="javascript:" @click.stop="handleGrand(3)">4</a>
            </div>
          </swiper-slide>
          <swiper-slide :class="{'active':swiperNow == 4}">
            <div
              :class="['box',{'active':trans && swiperNow == 4}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <a href="javascript:" @click.stop="handleGrand(0)">1</a>
              <a href="javascript:" @click.stop="handleGrand(1)">2</a>
              <a href="javascript:" @click.stop="handleGrand(2)">3</a>
              <a href="javascript:" @click.stop="handleGrand(3)">4</a>
            </div>
          </swiper-slide>
          <swiper-slide :class="{'active':swiperNow == 4}">
            <div
              :class="['box',{'active':trans && swiperNow == 4}]"
              :style="{'width':hh+'px','height':ww+'px'}"
            >
              <a href="javascript:" @click.stop="handleGrand(0)">1</a>
              <a href="javascript:" @click.stop="handleGrand(1)">2</a>
              <a href="javascript:" @click.stop="handleGrand(2)">3</a>
              <a href="javascript:" @click.stop="handleGrand(3)">4</a>
            </div>
          </swiper-slide>
          <swiper-slide :class="{'active':swiperNow == 4}">1</swiper-slide>
          <swiper-slide :class="{'active':swiperNow == 4}">1</swiper-slide>
          <swiper-slide :class="{'active':swiperNow == 4}">1</swiper-slide>
          <div class="swiper-child-pagination" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      <swiper-slide :class="{'active':swiperNow == 2}">
        <swiper class="swiper" :options="swiperGrandOption" ref="grandSwiper">
          <!-- slides -->
          <swiper-slide
            :class="{'active':1}"
            v-for="(item,index) in grandImg[childIndex]"
            :key="index"
          >
            <div class="box" :style="{'width':hh+'px','height':ww+'px'}">
              <img :class="{'active':trans && swiperNow == 5}" :src="item" alt />
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
export default {
  name: "home",
  data() {
    return {
      bar: 0,
      imgOver: false,
      closeVideo: false,
      startVideo: false,
      ww: 0,
      hh: 0,
      swiperNow: 0,
      trans: false,
      swiperTo: false,
      swiperTo1: false,
      swiperOption: {},
      swiperChildOption: {},
      swiperGrandOption: {},
      awaitImg: [
        {
          index: 0,
          name: "bg",
          url: "/static/img/p4.png"
        },
        {
          index: 1,
          name: "bg",
          url:
            "http://img2.ph.126.net/KJUpspbXpH1i1tspv7qm1A==/6598082416866994649.jpg"
        },
        {
          index: 2,
          name: "bg",
          url:
            "http://img1.imgtn.bdimg.com/it/u=1182845185,1102036488&fm=26&gp=0.jpg"
        },
        {
          index: 3,
          name: "bg",
          url: "http://pic11.nipic.com/20101121/1295091_153622414944_2.jpg"
        }
      ],
      loadImg: [],
      childIndex: 0,
      grandImg: [
        [
          "http://img4.imgtn.bdimg.com/it/u=1862338439,4167832155&fm=26&gp=0.jpg",
          "http://5b0988e595225.cdn.sohucs.com/images/20171102/e1088076befd4e5ea4a6457f015ea3f3.jpeg",
          "http://img3.333cn.com/img333cn/2017/09/29/1506678765453.jpg"
        ],
        [
          "http://img4.imgtn.bdimg.com/it/u=1862338439,4167832155&fm=26&gp=0.jpg",
          "http://img3.333cn.com/img333cn/2017/09/29/1506678765453.jpg",
          "http://5b0988e595225.cdn.sohucs.com/images/20171102/e1088076befd4e5ea4a6457f015ea3f3.jpeg"
        ],
        [
          "http://img3.333cn.com/img333cn/2017/09/29/1506678765453.jpg",
          "http://img4.imgtn.bdimg.com/it/u=1862338439,4167832155&fm=26&gp=0.jpg",
          "http://5b0988e595225.cdn.sohucs.com/images/20171102/e1088076befd4e5ea4a6457f015ea3f3.jpeg"
        ]
      ]
    };
  },
  created() {
    setRem(); //设置rem
    this.handleInitSwiper(0); //设置swiper配置
    this.handleInitImg(); //设置img
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
    this.handleInitVideo();
  },
  methods: {
    handleStart() {
      this.imgOver = true;
      if (this.videoEl.paused && this.startVideo) {
        this.videoEl.play();
        // this.handleCan();
      }
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
      }
    },
    handleInitSwiper(i = 5) {
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
        pagination: { el: ".swiper-grand-pagination" }
      };
    },
    handleInitImg() {
      //JS 加载图片
      let arr = [...this.awaitImg];
      let len = arr.length,
        num = 0;
      for (let i in arr) {
        let img = new Image();
        img.onload = e => {
          try {
            if (!this.loadImg[arr[i]]) {
              this.loadImg[arr[i].index] = {};
            }
            this.loadImg[arr[i].index][arr[i].name] = arr[i].url;
            num += 1;
            this.bar = Math.round((num / len) * 100);
            if (num == len) {
              //   this.imgOver = true;
            }
          } catch (error) {}
        };
        img.src = arr[i].url;
      }
    },
    handleCan() {
      let can = document.querySelector(".can");
      let ctx = can.getContext("2d");
      let video = document.querySelector("video");
      can.width = this.ww;
      can.height = this.hh;
      let time = setInterval(() => {
        ctx.drawImage(video, 0, 0, can.width, can.height);
        console.log(1);
        if (this.closeVideo) {
          clearInterval(time);
        }
      }, 30);
    },
    handleInitVideo() {
      //控制视频播放，暂停
      this.videoEl.oncanplay = () => {
        this.startVideo = true;
      };
      this.videoEl.onended = () => {
        this.closeVideo = true;
      };
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
    },
    handleGrand(i) {
      this.swiperTo1 = true;
      this.swiper.slideTo(2);
      this.swiperGrand.slideTo(i, 0);
    }
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
    background-color: #222;
    z-index: 9;
    opacity: 1;
    transition-duration: 600ms;
    .progress {
      position: absolute;
      width: 80%;
      height: 6px;
      border-radius: 3px;
      left: 10%;
      bottom: 10%;
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
        // display: none;
      }
      .can {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
      }
      &.active {
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
    }
  }
  .mp3 {
    position: fixed;
    z-index: -9;
  }
  .swiper {
    width: 100%;
    height: 100%;
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
          height: 100%;
          // transition-duration: 600ms;
          &.active {
            transform-origin: 50% 50%;
            transform: matrix(0, -1, 1, 0, 0, 0);
          }
        }
        &.active {
          transform: matrix(1, 0, 0, 1, 0, 0);
        }
        .controller {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          a {
            position: absolute;
            width: 3rem;
            height: 3rem;
            &.a1 {
              top: 1.5rem;
              left: 10rem;
            }
            &.a2 {
              top: 1.5rem;
              left: 13.9rem;
            }
            &.a3 {
              top: 1.5rem;
              left: 2.6rem;
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
