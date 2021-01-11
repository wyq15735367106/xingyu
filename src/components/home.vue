<template>
  <div class="home">
    <div class="logo3">
      <img src="../../static/image/logo2.png" alt="" />
    </div>
    <!-- 列表 -->
    <div class="list cl">
      <div class="fl list1 cl">
        <div class="fl left" style="width: 70%">
          <!-- DDT当前价格 -->
          <p>DDT current price</p>
          <p>${{ price }}</p>
        </div>
        <div class="fr right">
          <img src="../../static/image/1.png" alt="" />
        </div>
      </div>
      <div class="fl list1 cl" style="margin-left: 9%">
        <div class="fl left" style="width: 70%">
          <!-- 当前快高 -->
          <p>Current block height</p>
          <p>${{ blocknumber }}</p>
          <p>just recently</p>
        </div>
        <div class="fr right">
          <img src="../../static/image/2.png" alt="" />
        </div>
      </div>
      <div class="fr list1 cl">
        <div class="fl left" style="width: 70%">
          <p>Cumulative transactions</p>
          <p>{{ cumulative_transactions }}</p>
          <p>just recently</p>
        </div>
        <div class="fr right">
          <img src="../../static/image/3.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 公链状态 -->
    <div class="gong cl">
      <div class="img1 fl">
        <img src="../../static/image/le.png" alt="" />
      </div>
      <p class="fl">Public Chain State</p>
      <div class="img1 fr">
        <img src="../../static/image/ri.png" alt="" />
      </div>
    </div>
    <ul class="allFlex chain-status">
      <li class="allFlex column">
        <img src="../../static/image/4.png" alt="" class="status-pic" />
        <p class="Wcolor font-Two">DDT total circulation</p>
        <p class="Ycolor font-Six Bold">{{ total_cycle }}</p>
      </li>
      <li class="allFlex column">
        <img src="../../static/image/5.png" alt="" class="status-pic" />
        <p class="Wcolor font-Two">Number of DDT currency holding addresses</p>
        <p class="Ycolor font-Six Bold">{{ number_of_currency_address }}</p>
      </li>
      <li class="allFlex column">
        <img src="../../static/image/6.png" alt="" class="status-pic" />
        <p class="Wcolor font-Two">Average block generation speed (s)</p>
        <p class="Ycolor font-Six Bold">{{ speed }}</p>
      </li>
    </ul>
    <!-- 表格 -->
    <div class="table">
      <div class="body allFlex cen">
        <div class="block">
          <h3 class="allFlex">
            <span class="font-Four Wcolor">Block record</span
            ><router-link :to="{ name: 'block' }"
              ><span class="font-Four moreColor hand"
                >more &gt;&gt;</span
              ></router-link
            >
          </h3>
          <div class="lists cl" v-for="(val, index) in list" :key="index">
            <div class="fl">
              <p class="name" @click="block(val.block)">
                block：<span style="color: #00e0f1">{{ val.block }}</span>
              </p>
              <p class="time">{{ val.time }}</p>
            </div>
            <p class="fr num">{{ val.number }} DDT</p>
          </div>
        </div>
        <div class="deal">
          <h3 class="allFlex">
            <span class="font-Four Wcolor">Transaction records</span
            ><router-link :to="{ name: 'Transaction' }"
              ><span class="font-Four moreColor hand"
                >more &gt;&gt;</span
              ></router-link
            >
          </h3>
          <div class="lists cl" v-for="(val, index) in list2" :key="index">
            <div class="fl listss">
              <p class="name van-ellipsis" @click="ha(val.ha)">
                Hash：<span style="color: #00e0f1">{{ val.ha }}</span>
              </p>
              <p class="time van-ellipsis" style="color: #aeb1c6">
                {{ val.time }}
              </p>
            </div>
            <div class="fl listss">
              <p class="name van-ellipsis" @click="address(val.from)">
                from：<span style="color: #00e0f1">{{ val.from }}</span>
              </p>
              <p class="time van-ellipsis" @click="address(val.to)">
                to：<span style="color: #00e0f1">{{ val.to }}</span>
              </p>
            </div>
            <p class="fr num listss van-ellipsis" style="font-weight: bold">
              {{ val.number }}DDT
            </p>
          </div>
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
  data() {
    return {
      price: "",
      blocknumber: "",
      cumulative_transactions: "",
      total_cycle: "",
      number_of_currency_address: "",
      speed: "",
      list: [],
      list2: [],
    };
  },
  methods: {
    home: function () {
      this.$api.post("browser/browser_index", {}, {}, (ret) => {
        // console.log(ret);
        if (ret.code == "200") {
          this.price = ret.data.price;
          this.blocknumber = ret.data.blocknumber;
          this.cumulative_transactions = ret.data.cumulative_transactions;
          this.total_cycle = ret.data.total_cycle;
          this.number_of_currency_address = ret.data.number_of_currency_address;
          this.speed = ret.data.speed;
          this.list = ret.data.blocks;
          this.list2 = ret.data.transactions;
        }
      });
      //   console.log(this.$api)
    },
    block: function (block) {
      this.$router.push({
        path: "/New",
        name: "New",
        //params传参 需要使用 name 否则取不到；对应路由配置的 name
        params: {
          block: block,
        },
      });
    },
    // 哈希
    ha: function (ha) {
      this.$router.push({
        path: "/records",
        name: "records",
        //params传参 需要使用 name 否则取不到；对应路由配置的 name
        params: {
          ha: ha,
        },
      });
    },
    address: function (address) {
      this.$router.push({
        path: "/AddressDetails",
        name: "AddressDetails",
        //params传参 需要使用 name 否则取不到；对应路由配置的 name
        params: {
          address: address,
        },
      });
    },
  },
  created() {
    //   console.log($route.path)
    this.home();
  },
};
</script>

<style scoped>
.home {
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
.logo3 img {
  height: 200px;
  width: auto;
  margin: 0 auto;
  margin-top: 30px;
}
.list {
  /* display: flex;
  justify-content: space-around; */
  /* padding: 0 4%; */
  box-sizing: border-box;
  margin-top: 35px;
}
.list1 {
  background: url("../../static/image/ju2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 24%;
  height: 90px;
  padding: 20px 30px;
  padding-right: 1%;
}
.right {
  height: 50px;
  width: 50px;
}
.right img {
  height: 100%;
  width: 100%;
}
.left p:nth-child(1) {
  font-size: 14px;
  color: #fff;
}
.left p:nth-child(2) {
  font-size: 1px;
  color: #fff;
  margin-top: 20px;
}
.left p:nth-child(3) {
  font-size: 1px;
  color: #aeb1c6;
  margin-top: 20px;
}
.gong {
  height: 36px;
  width: 34%;
  margin: 50px auto 30px;
}
.img1 {
  width: 20%;
}
.img1 img {
  height: 20px;
  width: auto;
  margin: 0 auto;
  margin-top: 8px;
}
.gong p {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #00eeff;
  line-height: 36px;
  text-align: center;
  width: 60%;
  display: inline-block;
  text-align: center;
}
.chain-status {
  height: 140px;
  width: 75%;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.status-pic {
  height: 50px;
  width: auto;
  text-align: center;
  margin: 0 auto;
}
.font-Two {
  font-size: 12px;
  margin: 10px 0;
}

.Bold {
  font-weight: bold;
  color: #00eeff;
  line-height: 36px;
}
.column {
  width: 30%;
  text-align: center;
}
.cen {
  /* max-width: 1200px;
  min-width: 1000px; */
  margin: 0 auto 30px;
  border-radius: 10px;
  width: 100%;
}
.table .allFlex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.block,
.deal {
  max-width: 550px;
  background: url("../../static/image/ju3.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
  width: 45%;
  padding: 0 20px;
}
.block-ul {
  height: 70px;
  padding: 10px 0;
  margin: 10px 0;
}
.block h3,
.deal h3 {
  height: 60px;
  line-height: 60px;
}
.lists {
  padding: 10px 0;
  cursor: pointer;
}
.name {
  font-size: 12px;
  line-height: 20px;
}
.time {
  font-size: 12px;
}
.num {
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  line-height: 40px;
}
.listss {
  width: 30%;
}
.lists .listss:nth-child(1) {
  text-align: left;
}
.lists .listss:nth-child(2) {
  text-align: center;
  margin: 0 5%;
}
.lists .listss:nth-child(3) {
  text-align: right;
}
.moreColor {
  color: #fff;
}
</style>
