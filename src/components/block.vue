<template>
  <div class="block">
    <div class="body">
      <h3 class="Wcolor">Block record</h3>
      <div class="biaoti">
        <p>Current block height</p>
        <p>Number of transactions</p>
        <p>Generation time</p>
      </div>
      <div class="biao2" v-for="(val, index) in list" :key="index">
        <p @click="block(val.block)">{{ val.block }}</p>
        <p @click="block(val.block)">{{ val.number }}</p>
        <p @click="block(val.block)">{{ val.time }}</p>
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
  name: "App",
  methods: {
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //   console.log(val);
      localStorage.setItem("key", val);
      this.blocks(val);
    },
    xia(val) {
      console.log(val);
      localStorage.setItem("key", val);
      this.blocks(val);
    },
    shang(val) {
      //   console.log(val);
      localStorage.setItem("key", val);
      this.blocks(val);
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
    blocks: function (val) {
      if (val) {
        var page = val;
      } else if (localStorage.getItem("key")) {
        var page = localStorage.getItem("key");
      } else {
        var page = 1;
      }
      this.$api.post(
        "browser/browser_blocks_new",
        {},
        { page: page },
        (ret) => {
          if (ret.code == "200") {
            // console.log(ret);
            this.pages = ret.data.page;
            this.list = ret.data.order;
            document.getElementsByClassName(
              "el-pagination__total"
            )[0].innerHTML = `共  ${this.pages}  页`;
          }
        }
      );
      //   console.log(this.$api)
    },
    current_page: function () {
      if (localStorage.getItem("key")) {
        var pages = localStorage.getItem("key");
        this.currentPage1 = Number(pages);
      }
    },
  },
  data() {
    return {
      list: [],
      currentPage1: 1,
      pages: 1,
    };
  },
  created() {
    this.blocks();
    // console.log(localStorage.getItem("key"));
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
  padding: 0 10px;
  margin: 0 auto;
  background: url("../../static/image/block2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.biaoti p:nth-child(2) {
  width: 33.33%;
  text-align: center;
  line-height: 60px;
}
.biaoti p:nth-child(1) {
  width: 33.33%;
  text-align: left;
  line-height: 60px;
}
.biaoti p:nth-child(3) {
  width: 33.33%;
  text-align: right;
  line-height: 60px;
}
.biao2 {
  cursor: pointer;
}
.biao2 p:nth-child(2) {
  width: 33.33%;
  text-align: center;
  line-height: 60px;
}
.biao2 p:nth-child(1) {
  width: 33.33%;
  text-align: left;
  line-height: 60px;
  color: #00eeff;
}
.biao2 p:nth-child(3) {
  width: 33.33%;
  text-align: right;
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
}
</style>
