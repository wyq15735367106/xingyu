<template>
  <div class="herder">
    <div class="box">
      <!-- logo -->
      <div class="logo">
        <router-link :to="{ name: 'home' }"
          ><img src="../../static/image/logo.png" alt=""
        /></router-link>
      </div>
      <!-- 导航 -->
      <ul class="nav">
        <li :class="{ active: '/' === $route.path }" @click="switchTo('/')">
          Home
        </li>
        <li
          :class="{ active: '/block' === $route.path }"
          @click="switchTo('/block')"
        >
          Block
        </li>
        <li
          :class="{ active: '/Transaction' === $route.path }"
          @click="switchTo('/Transaction')"
        >
          Transaction
        </li>
        <li
          :class="{ active: '/Token' === $route.path }"
          @click="switchTo('/Token')"
        >
          Token
        </li>
        <li
          :class="{ active: '/BlackHole' === $route.path }"
          @click="switchTo('/BlackHole')"
        >
          Black Hole
        </li>
        <!-- <li>
          <a class="tiao" @click="linkDownload('https://www.baidu.com')"
            >Main chain</a
          >
        </li> -->
      </ul>
      <!-- 搜索 -->
      <!-- chunshuzi  gaodu -->
      <!-- weishu  === 44   dizhi   666 ==haxi  zhanwu -->

      <div class="right-search">
        <img
          src="../../static/image/sousuo@2x.png"
          alt=""
          class="centerAll"
          @click.stop="sou"
        />
        <input
          type="text"
          placeholder="Block / address / hash"
          class="Wcolor search-ipt"
          v-model="placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      placeholder: "",
    };
  },
  props: ["placeholders"],
  methods: {
    sou: function name() {
      var abc = isNaN(this.placeholder);
      if (!abc) {
        this.New();
        // alert(1);
      } else if (this.placeholder.length == 42) {
        this.address();
      } else if (this.placeholder.length == 66) {
        this.haxi();
      } else {
        // this.$router.push("/zhanwu");
        this.wu();
      }
    },
    wu: function () {
      this.$router.push("/zhanwu");
    },
    switchTo(path) {
      localStorage.setItem("key", "");
      this.$router.push(path);
    },
    linkDownload(url) {
      //   window.open(url, "_blank"); // 新窗口打开外链接
      this.$router.push("/");
    },
    // 地址
    address: function () {
      this.$api.post(
        "browser/browser_address_details_one",
        {},
        { address: this.placeholder },
        (ret) => {
          if (ret.code == "200") {
            // console.log(ret);

            this.$router.push({
              path: "/AddressDetails",
              name: "AddressDetails",
              //params传参 需要使用 name 否则取不到；对应路由配置的 name
              params: {
                address: this.placeholder,
                placeholders: this.placeholder,
              },
            });
          } else if (ret.code == "400") {
            this.$router.push("/zhanwu");
          }
        }
      );
    },
    haxi: function () {
      this.$api.post(
        "browser/browser_transaction_details",
        {},
        { ha: this.placeholder },
        (ret) => {
          if (ret.code == "200") {
            console.log(ret);
            this.$router.push({
              path: "/records",
              name: "records",
              //params传参 需要使用 name 否则取不到；对应路由配置的 name
              params: {
                ha: this.placeholder,
                placeholders: this.placeholder,
              },
            });
          } else if (ret.code == "400") {
            this.$router.push("/zhanwu");
          }
        }
      );
    },
    New: function () {
      this.$api.post(
        "browser/browser_blocks_details",
        {},
        { blocks: this.placeholder },
        (ret) => {
          if (ret.code == "200") {
            console.log(ret);
            this.$router.push({
              path: "/New",
              name: "New",
              //params传参 需要使用 name 否则取不到；对应路由配置的 name
              params: {
                block: this.placeholder,
                placeholders: this.placeholder,
              },
            });
          } else if (ret.code == "400") {
            // console.log(ret);
            this.$router.push("/zhanwu");
          }
        }
      );
    },
  },
  created() {
    var _this = this;
    document.onkeydown = function (e) {
      //按下回车提交
      let key = window.event.keyCode;
      //事件中keycode=13为回车事件
      if (key == 13) {
        _this.sou();
      }
    };
  },
};
</script>

<style>
.herder {
  width: 100%;
}
.box {
  width: 80%;
  margin: 0 auto;
  height: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.logo {
  height: 60px;
  margin-top: 10px;
}
.logo img {
  height: 100%;
  width: auto;
}
.nav .active {
  color: #00eeff;
}
.tiao {
  color: #fff;
}
.nav li {
  padding: 25px 10px;
  margin: auto 12px auto 0;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  border-radius: 3px;
}
.right-search {
  position: relative;
  max-width: 400px;
  color: #fff;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  padding: 0 20px;
  margin: auto 0;
  background: url(../../static/image/ju.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
input {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #aeb1c6;
  line-height: 36px;
  background: none;
  padding-left: 25px;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #f2f2f2;
}
.centerAll {
  position: absolute;
  top: 35%;
  height: 15px;
  width: auto;
  left: 8%;
}
.search-ipt {
  padding-left: 20px;
  font-size: 13px;
}
.Wcolor {
  color: #fff;
}
</style>
