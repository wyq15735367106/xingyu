<template>
  <div class="block">
    <div class="body">
      <h3 class="font-Six Bold Wcolor">Token List</h3>
      <div class="list cl">
        <p class="fl num" style="width: 4%">#</p>
        <p class="fl Token" style="width: 20%">Token</p>
        <p class="fl Token" style="width: 12%">price</p>
        <p class="fl Token van-ellipsis">Total circulation</p>
        <p class="fl Token van-ellipsis">Wormhole maximum</p>
        <p class="fl Token van-ellipsis">Wormhole coefficient</p>
        <p class="fl Token van-ellipsis">holder addresses</p>
      </div>
      <div class="lists cl center">
        <p class="fl num" style="width: 4%">1</p>
        <!-- <p class="fl Token" style="width: 20%">EvolutionStellarCoin (ESC)</p> -->
        <div class="fl Token cl" style="width: 20%">
          <div class="images fl" style="width: 20%">
            <img src="../../static/image/esd.png" alt="" />
          </div>
          <p class="fl van-ellipsis" style="width: 80%">
            Deep Domain Coin (DDC)
          </p>
        </div>
        <p class="fl Token" style="width: 12%">$</p>
        <p class="fl Token">31415926</p>
        <p class="fl Token">DDT</p>
        <p class="fl Token">---</p>
        <p class="fl Token">---</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    "app-header": Header,
  },
  name: "App",
  methods: {},
  data() {
    return {};
  },
  created() {},
};
</script>

<style  scoped>
.block {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 80px 0;
  box-sizing: border-box;
}
.herder {
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.02);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
}
.boxs {
  margin: 80px auto 40px;
  padding-bottom: 74px;
}
.body {
  background: url("../../static/image/block.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;
  margin: 80px auto 40px;
  padding-bottom: 74px;
  box-sizing: border-box;
}
.body p {
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.body h3 {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
}
.font-Six {
  font-size: 16px;
}
.Wcolor {
  color: #fff;
}
.Bold {
  font-weight: 700;
}
.list {
  background: url("../../static/image/block2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.num {
  width: 4%;
}
.Token {
  width: 16%;
  font-size: 14px;
}
.center {
  text-align: center;
}
.lists {
  padding: 0 20px;
  box-sizing: border-box;
}
.images img {
  height: 30px;
  width: auto;
  margin-top: 15px;
  margin-right: 5px;
}
</style>
