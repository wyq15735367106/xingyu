<template>
  <div class="block">
    <div class="body">
      <h3 class="Wcolor">No information</h3>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    "app-header": Header,
  },
  name: "zhanwu",
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(val);
      this.blocks(val);
    },
    xia(val) {
      console.log(val);
      this.blocks(val);
    },
    shang(val) {
      console.log(val);
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
      } else {
        var page = 1;
      }
      this.$api.post("browser/browser_blocks", {}, { page: page }, (ret) => {
        if (ret.code == "200") {
          console.log(ret);
          this.pages = ret.data.page;
          this.list = ret.data.order;
        }
      });
      //   console.log(this.$api)
    },
    placeholder: function () {
      //   alert(this.$route.params.placeholders);
      if (this.$route.params.placeholders) {
        this.placeholders = this.$route.params.placeholders;
      }
    },
  },
  data() {
    return {
      list: [],
      currentPage1: 1,
      pages: 1,
      placeholders: "Block / address / hash",
    };
  },
  created() {
    console.log(this.$route.params.placeholders);
    this.placeholder();
  },
};
</script>

<style  scoped>
.block {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 80px 0;
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
  padding: 20px;
  text-align: center;
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
