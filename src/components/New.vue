<template>
  <div class="block">
    <div class="body">
      <div class="list cl">
        <p class="left fl">Previous block</p>
        <p class="right fl color">
          {{ thepreviousblocknumber }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Next block</p>
        <p class="right fl color">
          {{ nextblocknumber }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Block height</p>
        <p class="right fl">
          {{ blocknumber }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Trading address</p>
        <p class="right fl">
          {{ from }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Hash value</p>
        <p class="rem right fl">
          {{ ha }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Generation time</p>
        <p class="right fl">
          {{ time }}
        </p>
      </div>
      <div class="list cl">
        <p class="left fl">Number of transactions</p>
        <p class="right fl">
          {{ o_number }}
        </p>
      </div>
    </div>
    <div class="body2">
      <h3 class="Wcolor">Block record</h3>
      <div class="biaoti">
        <p>Transaction number</p>
        <p>Address</p>
        <p>Transaction amount</p>
        <p>Absenteeism fee</p>
      </div>
      <div class="biao2" v-for="(val, index) in transaction" :key="index">
        <p class="Hash van-ellipsis">{{ val.orderid }}</p>
        <p class="address van-ellipsis color">{{ val.to }}</p>
        <p class="Number van-ellipsis">{{ val.m_number }}DDT</p>
        <p class="times van-ellipsis">{{ val.servicecharge }}</p>
      </div>
    </div>
    <!-- 从到 -->
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    "app-header": Header,
  },
  name: "New",
  data() {
    return {
      list: [],
      o_number: "",
      ha: "",
      thepreviousblocknumber: "",
      nextblocknumber: "",
      blocknumber: "",
      from: "",
      ha: "",
      time: "",
      transaction: "",
      placeholders: "Block / address / hash",
    };
  },
  methods: {
    blocks: function () {
      //   console.log(this.$route.params.block);
      this.$api.post(
        "browser/browser_blocks_details_new",
        {},
        { blocks: this.$route.params.block },
        (ret) => {
          if (ret.code == "200") {
            // console.log(ret);
            this.blocknumber = ret.data.blocknumber;
            this.o_number = ret.data.o_number;
            this.ha = ret.data.ha;
            this.thepreviousblocknumber = ret.data.thepreviousblocknumber;
            this.blocknumber = ret.data.blocknumber;
            this.from = ret.data.from;
            this.time = ret.data.time;
            if (ret.data.nextblocknumber) {
              this.nextblocknumber = ret.data.nextblocknumber;
            } else {
              this.nextblocknumber = "No next fast";
            }
            this.transaction = ret.data.transaction;
          }
        }
      );
    },
  },
  created() {
    this.blocks();
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
  text-align: left;
  font-size: 18px;
}
.body p:nth-child(1) {
  width: 30%;
  padding-left: 5%;
}
.body p:nth-child(2) {
  width: 65%;
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
.left {
  text-align: left;
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
  margin-right: 80px;
}
.kong {
  margin-top: 80px;
}
.body2 {
  background: url("../../static/image/block.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;
  margin: 80px auto 40px;
  padding-bottom: 74px;
  box-sizing: border-box;
  height: 500px;
}
.Wcolor {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
}
.biaoti {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 60px;
  width: 90%;
  margin: 0 auto;
  background: url("../../static/image/block2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.biaoti p:nth-child(2) {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.biaoti p:nth-child(1) {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.biaoti p:nth-child(3) {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.biaoti p:nth-child(4) {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.times {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.cong1 {
  line-height: 30px;
}
.address {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.Number {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.Hash {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.cong {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.biao2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 60px;
  width: 90%;
  margin: 0 auto;
  font-size: 14px;
}
.color {
  color: #00eeff;
}
.list p {
  cursor: pointer;
}
.biao2 p {
  cursor: pointer;
}
@media (min-width: 0px) {
  .body p {
    font-size: 80%;
  }
}
@media (min-width: 320px) {
  .body p {
    font-size: 80%;
  }
}
@media (min-width: 340px) {
  .body p {
    font-size: 80%;
  }
}
@media (min-width: 360px) {
  .body p {
    font-size: 80%;
  }
}
</style>
