<template>
  <div class="phone" :style="{'background':color}">
    <p>咨询热线：{{phone}}</p>
    <a :href="'tel:'+phone">打</a>
  </div>
</template>
<script>
export default {
  name: "phone",
  props: ["color", "phone"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.phone {
  height: 0.733333rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.466667rem 0 1.244444rem;
  //   font-size: 0.466666rem;
  font-size: 0.344444rem;
  color: #fff;
  background-color: #000;
  letter-spacing: 0.2rem;
}
</style>