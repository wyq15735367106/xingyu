<template>
  <div class="block">
    <!-- logo -->
    <div class="body">
      <div class="adress cl">
        <p class="addresss fl van-ellipsis" data-clipboard-text="address">
          Trading address:{{ address }}
        </p>
        <div class="img fl">
          <img
            src="../../static/image/fuzhi.png"
            alt=""
            v-clipboard:copy="address"
            v-clipboard:success="onCopy"
          />
        </div>
      </div>
      <div class="boxs cl">
        <div class="left fl cl">
          <div class="images fl">
            <img src="../../static/image/le1.png" alt="" />
          </div>
          <div class="ri fl">
            <p class="top1">{{ est }}DDT</p>
            <p class="top2">≈{{ estusdt }}USDT</p>
          </div>
        </div>
        <div class="left fr cl">
          <div class="images fl">
            <img src="../../static/image/le1.png" alt="" />
          </div>
          <div class="ri fl">
            <p class="top1">{{ esc }}DDC</p>
            <p class="top2">≈{{ escusdt }}USDT</p>
          </div>
        </div>
      </div>
    </div>
    <div class="body1">
      <div class="jilu">
        <p class="fl lu">Transaction records</p>
        <div class="fr">
          <el-dropdown @command="handleCommand">
            <el-button type="primary">
              {{ command }}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="DDT">DDT</el-dropdown-item>
              <el-dropdown-item command="DDC">DDC</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="biaoti">
        <p>Hash</p>
        <p>Time</p>
        <p>Sender</p>
        <p>Recipient</p>
        <p>Number</p>
        <p class="van-ellipsis">Transaction type</p>
      </div>
      <div class="lists cl" v-for="(val, index) in order" :key="index">
        <div class="adress ad fl cl">
          <p class="addressss fl van-ellipsis colors" @click="ha(val.ha)">
            {{ val.ha }}
          </p>
          <div class="img fl">
            <img
              src="../../static/image/fuzhi.png"
              alt=""
              @click="onCopy3(val.ha)"
            />
          </div>
        </div>
        <p class="time fl van-ellipsis">{{ val.time }}</p>
        <div class="adress ad fl cl">
          <p class="addressss fl van-ellipsis colors">
            {{ val.from }}
          </p>
          <div class="img fl">
            <img
              src="../../static/image/fuzhi.png"
              alt=""
              @click="onCopy1(val.from)"
            />
          </div>
        </div>
        <div class="adress ad fl cl">
          <p class="addressss fl van-ellipsis colors">
            {{ val.to }}
          </p>
          <div class="img fl">
            <img
              src="../../static/image/fuzhi.png"
              alt=""
              @click="onCopy2(val.to)"
            />
          </div>
        </div>
        <p class="num fl">{{ val.number }}</p>
        <p class="type fl" v-if="val.state == 1" style="color: #0fe838">
          entry
        </p>
        <p class="type fl" v-else-if="val.state == 5" style="color: #0fe838">
          entry
        </p>
        <p class="type fl" v-else-if="val.state == 4" style="color: #ff2549">
          output
        </p>
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
import Clipboard from "clipboard";
export default {
  components: {
    "app-header": Header,
  },
  name: "Address",
  data() {
    return {
      address: "",
      est: "",
      estusdt: "",
      esc: "",
      command: "DDT",
      escusdt: "",
      order: [],
      currentPage1: 1,
      pages: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //   console.log(val);
      localStorage.setItem("key", val);
      this.julu(val);
    },
    xia(val) {
      //   console.log(val);
      localStorage.setItem("key", val);
      this.julu(val);
    },
    shang(val) {
      //   console.log(val);
      localStorage.setItem("key", val);
      this.julu(val);
    },
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
    adresss() {
      this.$api.post(
        "browser/browser_address_details_one",
        {},
        { address: this.$route.params.address },
        (ret) => {
          if (ret.code == "200") {
            // console.log(ret);
            this.address = ret.data.address;
            this.est = ret.data.est;
            this.estusdt = ret.data.estusdt;
            this.esc = ret.data.esc;
            this.escusdt = ret.data.escusdt;
          }
        }
      );
    },
    handleCommand(command) {
      this.command = command;
      var val = 1;
      this.julu(val, command);
      localStorage.setItem("key", "");
    },
    onCopy() {
      this.$message({
        message: "复制成功",
        type: "success",
      });
    },
    julu: function (val, command) {
      if (val) {
        var page = val;
      } else if (localStorage.getItem("key")) {
        var page = localStorage.getItem("key");
      } else {
        var page = 1;
      }
      if (command) {
        var glod = command;
      } else {
        var glod = this.command;
      }
      this.$api.post(
        "browser/browser_address_details_two",
        {},
        { page: page, address: this.$route.params.address, glod: glod },
        (ret) => {
          if (ret.code == "200") {
            // console.log(ret);
            this.pages = ret.data.page;
            document.getElementsByClassName(
              "el-pagination__total"
            )[0].innerHTML = "共" + "" + this.pages + "" + "页";
            //   this.list = ret.data.order;
            this.order = ret.data.order;
          }
        }
      );
    },
    onCopy1(value) {
      var oInput = document.createElement("input");
      oInput.value = value;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      this.$message({
        message: "复制成功",
        type: "success",
      });
    },
    onCopy2(value) {
      var oInput = document.createElement("input");
      oInput.value = value;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      this.$message({
        message: "复制成功",
        type: "success",
      });
    },
    onCopy3(value) {
      var oInput = document.createElement("input");
      oInput.value = value;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      this.$message({
        message: "复制成功",
        type: "success",
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
    this.adresss();
    this.julu();
    this.current_page();
  },
};
</script>

<style  scoped>
.el-button--primary {
  background: url("../../static/image/ju4.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #fff;
  border-color: #ffffff;
}
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
  box-sizing: border-box;
  padding: 30px;
}
.body1 {
  background: url("../../static/image/block.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 8px;
  margin: 80px auto 40px;
  box-sizing: border-box;
  padding: 30px;
  padding-top: 20px;
}
.Wcolor {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
}
.left {
  width: 50%;
}
.adress {
  height: 30px;
}
.addresss {
  font-size: 16px;
  line-height: 30px;
  cursor: pointer;
}
.adress img {
  height: 16px;
  width: auto;
  margin-top: 7px;
  margin-left: 10px;
  cursor: pointer;
}
.boxs {
  margin-top: 60px;
}
.boxs img {
  height: 90px;
  width: auto;
}
.ri {
  margin-top: 15px;
  margin-left: 10px;
}
.top1 {
  font-size: 16px;
  line-height: 30px;
  cursor: pointer;
}
.top2 {
  font-size: 16px;
  line-height: 30px;
  cursor: pointer;
}
.lu {
  padding: 12px 0;
}
.biaoti {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 60px;
  width: 100%;
  margin: 0 auto;
  /* background: url("../../static/image/block2.png"); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.biaoti p:nth-child(2) {
  width: 18%;
  text-align: center;
  line-height: 60px;
}
.biaoti p:nth-child(1) {
  width: 18%;
  text-align: left;
  line-height: 60px;
}
.biaoti p:nth-child(3) {
  width: 18%;
  text-align: center;
  line-height: 60px;
}
.biaoti p:nth-child(4) {
  width: 18%;
  text-align: center;
  line-height: 60px;
}
.biaoti p:nth-child(5) {
  width: 14%;
  text-align: center;
  line-height: 60px;
}
.biaoti p:nth-child(6) {
  width: 14%;
  text-align: right;
  line-height: 60px;
}
.ad,
.time {
  width: 18%;
  height: 40px;
  line-height: 40px;
}
.addressss {
  width: 80%;
}
.ad {
  height: 40px;
  line-height: 40px;
}
.ad img {
  margin-top: 13px;
}
.num {
  text-align: center;
  line-height: 40px;
  width: 14%;
}
.type {
  text-align: center;
  line-height: 40px;
  width: 14%;
}
.colors {
  color: #00eeff;
  cursor: pointer;
}
</style>
