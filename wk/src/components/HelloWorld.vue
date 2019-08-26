<template>
  <div class="home" ref="home">
    <swiper class="swiper" :options="option" ref="mySwiper" @someSwiperEvent="handleSomeSwiper">
      <!-- slides -->
      <swiper-slide>
        <page1 :active="now" :direction="direction" :ww="ww" :hh="hh" />
      </swiper-slide>
      <swiper-slide>
        <page2 :active="now" :direction="direction" :ww="ww" :hh="hh" />
      </swiper-slide>
      <swiper-slide>
        <page3 :active="now" :direction="direction" :ww="ww" :hh="hh" />
      </swiper-slide>
      <swiper-slide>
        <menu :active="now" :direction="direction" :ww="ww" :hh="hh" />
      </swiper-slide>
      <swiper-slide>
        <at-item1 :direction="direction" :ww="ww" :hh="hh" />
      </swiper-slide>
      <swiper-slide></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Menu from "./menu";
import atItem1 from "./at/item1";
export default {
  name: "home",
  data() {
    return {
      option: {
        // scrollbar: {
        //   el: ".swiper-scrollbar"
        // }
      },
      now: 0,
      direction: false,
      ww: 0,
      hh: 0
    };
  },
  created() {
    let _this = this;
    this.option = {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        slideChangeTransitionStart: function() {
          var num = this.activeIndex;
          if (num == 4 && _this.now == 3) {
            // _this.swiper.slideTo(3);
          } else {
            _this.now = num;
          }
        }
      }
    };
  },
  mounted() {
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    var _this = this;
    window.addEventListener(evt, resize, false);
    function resize(fals) {
      if (window.orientation == 0 || window.orientation == 180) {
        // alert("竖屏");
        _this.direction = false;
      } else {
        // alert("横屏");
        _this.direction = true;
      }
    }
    this.$nextTick(() => {
      setTimeout(() => {
        this.ww = this.$refs.home.clientWidth;
        this.hh = this.$refs.home.clientHeight;
      }, 100);
    });
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    handleSomeSwiper(e) {
      console.log(e);
    }
  },
  components: {
    Page1,
    Page2,
    Page3,
    Menu,
    atItem1
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.home {
  height: 100%;
  .swiper {
    height: 100%;
    .swiper-slide {
      transition-property: all;
    }
  }
}
</style>
