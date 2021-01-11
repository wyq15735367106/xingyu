<template>
  <div class="block">
    <div class="body">
      <h3 class="Wcolor">Block record</h3>
      <div class="biaoti">
        <p class="center">Hash value</p>
        <p class="van-ellipsis">address</p>
        <p class="van-ellipsis">Number of transactions</p>
        <p class="van-ellipsis">Trading hours</p>
      </div>
      <div class="biao2" v-for="(val, index) in list" :key="index">
        <p class="Hash van-ellipsis color" @click="haxi(val.ha)">
          {{ val.ha }}
        </p>
        <div class="cong">
          <p class="cong1 van-ellipsis" @click="address(val.from)">
            from：<span class="color">{{ val.from }}</span>
          </p>
          <p class="cong1 van-ellipsis" @click="address(val.to)">
            to：<span class="color">{{ val.to }}</span>
          </p>
        </div>
        <p class="Number">{{ val.number }}DDT</p>
        <p class="times">{{ val.time }}</p>
      </div>
    </div>
    <div class="blok">
      <el-pagination
        @prev-click="shang"
        @next-click="xia"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="1"
        :total="pages"
        layout="total, prev, pager, next"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    "app-header": Header,
  },
  name: "Transaction",
  data() {
    return {
      list: [],
      currentPage1: 1,
      pages: 1,
      placeholders: "Block / address / hash",
    };
  },
  methods: {
    haxi: function (ha) {
      this.$router.push({
        path: "/records",
        name: "records",
        //params传参 需要使用 name 否则取不到；对应路由配置的 name
        params: {
          ha: ha,
        },
      });
    },
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //   console.log(val);
      localStorage.setItem("key", val);
      this.blocks(val);
    },
    xia(val) {
      //   console.log(val);
      localStorage.setItem("key", val);
      this.blocks(val);
    },
    shang(val) {
      //   console.log(val);
      localStorage.setItem("key", val);
      this.blocks(val);
    },
    blocks: function (val) {
      if (val) {
        var page = val;
      } else if (localStorage.getItem("key")) {
        var page = localStorage.getItem("key");
      } else {
        var page = 1;
      }
      this.$api.post(
        "browser/browser_transaction",
        {},
        { page: page },
        (ret) => {
          if (ret.code == "200") {
            // console.log(ret);
            this.pages = ret.data.page;
            document.getElementsByClassName(
              "el-pagination__total"
            )[0].innerHTML = "共" + "" + this.pages + "" + "页";
            this.list = ret.data.order;
          }
        }
      );
      //   console.log(this.$api)
    },
    // 地址
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
    current_page: function () {
      if (localStorage.getItem("key")) {
        var pages = localStorage.getItem("key");
        this.currentPage1 = Number(pages);
      }
    },
  },
  created() {
    this.blocks();
    this.current_page();
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
.body {
  background: url("../../static/image/block.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;
  margin: 80px auto 40px;
  padding-bottom: 74px;
  box-sizing: border-box;
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
  padding: 0 10px;
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
  text-align: left;
  line-height: 60px;
}
.biaoti p:nth-child(3) {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.biaoti p:nth-child(4) {
  width: 25%;
  text-align: right;
  line-height: 60px;
}
.times {
  width: 25%;
  text-align: right;
  line-height: 60px;
}
.cong1 {
  line-height: 30px;
}
.Number {
  width: 25%;
  text-align: center;
  line-height: 60px;
}
.Hash {
  width: 20%;
  margin-right: 5%;
  text-align: left;
  line-height: 60px;
  color: #00eeff;
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
  cursor: pointer;
}
</style>
