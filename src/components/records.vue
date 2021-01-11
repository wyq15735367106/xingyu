<template>
  <div class="block">
    <div class="body">
      <div class="list cl">
        <p class="left fl">Transaction number</p>
        <p class="right fl">
          {{ orderid }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Transaction hash</p>
        <p class="right fl">
          {{ ha }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Block height</p>
        <p class="right fl">
          {{ blocknumber }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">from</p>
        <p class="right fl color1">
          {{ from }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">to</p>
        <p class="right fl color1">
          {{ to }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Miner's fee</p>
        <p class="right fl">
          {{ servicecharge }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Input quantity</p>
        <p class="right fl">
          {{ m_number }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Output quantity</p>
        <p class="right fl color2">
          {{ number }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Trading hours</p>
        <p class="right fl">
          {{ time }}
        </p>
      </div>
    </div>
    <!-- 从到 -->
    <div class="boxs cl">
      <div class="fl le">
        <h4>from</h4>
        <div class="cl jia">
          <p class="fl" style="color: #00eeff">
            {{ from }}
          </p>
          <p class="fl" style="color: #ff2549">-{{ m_number }}DDT</p>
        </div>
      </div>
      <div class="cen fl">
        <img src="../../static/image/cen.png" alt="" />
      </div>
      <div class="fr ri">
        <h4>to</h4>
        <div class="cl jia">
          <p class="fl" style="color: #00eeff; margin-left: 10%">
            {{ to }}
          </p>
          <p class="fl" style="color: #0fe838">+{{ number }}DDT</p>
        </div>
        <div class="kong">
          <p class="fl" style="color: #00eeff; margin-left: 10%">Miner's fee</p>
          <p class="fl" style="margin-left: 30%; color: #ff2549">
            {{ servicecharge }}DDT
          </p>
        </div>
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
  methods: {
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      orderid: "",
      ha: "",
      blocknumber: "",
      from: "",
      to: "",
      number: "",
      m_number: "",
      servicecharge: "",
      time: "",
    };
  },
  methods: {
    has: function () {
      this.$api.post(
        "browser/browser_transaction_details",
        {},
        { ha: this.$route.params.ha },
        (ret) => {
          if (ret.code == "200") {
            // console.log(ret);
            this.orderid = ret.data.orderid;
            this.ha = ret.data.ha;
            this.blocknumber = ret.data.blocknumber;
            this.from = ret.data.from;
            this.to = ret.data.to;
            this.number = ret.data.number;
            this.m_number = ret.data.m_number;
            this.servicecharge = ret.data.servicecharge;
            this.time = ret.data.time;
          }
        }
      );
    },
  },
  created() {
    // console.log(this.$route.params.ha);
    this.has();
  },
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
  cursor: pointer;
  /* text-align: center; */
  font-size: 13px;
}
.body p:nth-child(1) {
  width: 30%;
}
.body p:nth-child(2) {
  width: 68%;
  text-align: left;
}
.le {
  background: url("../../static/image/li.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 45%;
  height: 240px;
  box-sizing: border-box;
  padding: 20px;
}
.cen {
  width: 10%;
}
.cen img {
  margin-top: 60px;
}
.ri {
  background: url("../../static/image/li2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 45%;
  height: 240px;
  box-sizing: border-box;
  padding: 20px;
}
h4 {
  text-align: center;
}
.jia {
  font-size: 14px;
  margin-top: 50px;
}
.jia p:nth-child(1) {
  width: 40%;
  margin-right: 10%;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.kong {
  margin-top: 80px;
}
.left {
  box-sizing: border-box;
  padding-left: 10%;
}
.color1 {
  color: #00eeff;
}
.color2 {
  color: #0fe838;
}
</style>
