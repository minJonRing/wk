<template>
  <div class="page1" ref="page1">
    <div class="box" :style="{'width':hh+'px','height':ww+'px'}">
      <img
        :class="{'active':direction}"
        src="http://attachments.gfan.com/forum/201604/15/075219vrdccht25dont5kc.jpg"
        alt
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "page1",
  data() {
    return {};
  },
  props: ["active", "direction", "ww", "hh"],
  mounted() {}
};
</script>
<style lang="scss" scoped>
.page1 {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: 50% 50%;
    transform: matrix(0, 1, -1, 0, 0, 0);
    img {
      height: 100%;
      &.active {
        transform-origin: 50% 50%;
        transform: matrix(0, -1, 1, 0, 0, 0);
      }
    }
  }
}
</style>