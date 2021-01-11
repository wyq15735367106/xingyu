<template>
  <div id="app">
    <div class="backgrounds">
      <div class="container">
        <app-header></app-header>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    "app-header": Header,
  },
  methods: {
    setBodyWidth: function () {
      var barWidthHelper = document.createElement("div");
      barWidthHelper.style.cssText =
        "overflow:scroll; width:100px; height:100px;";
      document.body.appendChild(barWidthHelper);
      var barWidth = barWidthHelper.offsetWidth - barWidthHelper.clientWidth;
      document.body.removeChild(barWidthHelper);
      var bodyWidth = window.screen.availWidth - barWidth;
      return bodyWidth;
    },
  },
  created() {
    //   var bodyWidth=this.setBodyWidth()+"px";
    // 	//document.body.style.width=bodyWidth;
    // 	("width",bodyWidth);
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.02);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
}
.backgrounds {
  box-sizing: border-box;
  background: url("../static/image/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
  background-color: #000;
  position: relative;
  color: #fff;
  min-width: 100%;
  box-sizing: border-box;
}
[v-cloak] {
  display: none !important;
}
html,
body {
  font-size: 16px;
  background: #f2f2f2;
  width: 100%;
}

body {
  min-height: 100%;
}

/*重置*/
* {
  margin: 0;
  padding: 0;
}

ul li,
ol li {
  list-style: none;
}

a {
  text-decoration: none;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.cl:after {
  content: "";
  height: 0;
  display: block;
  overflow: hidden;
  clear: both;
}
input {
  border: none;
  outline: none;
}
img {
  display: block;
  width: 100%;
}
.ce {
  width: 100%;
}
</style>
