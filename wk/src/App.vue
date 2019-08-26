<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import setRem from "../static/js/rem";
export default {
  name: "App",
  mounted() {
    setRem();
  }
};
</script>

<style>
@import url("../static/css/common.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: hidden;
}
</style>
