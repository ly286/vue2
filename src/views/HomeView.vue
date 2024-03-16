<template>
  <div>
    <!--  顶部-->
    <div class="header">
      <div class="logo">logo</div>
      <el-menu
          router
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="/crops">
          <template slot="title">农作物分类</template>
          <el-menu-item index="2-1">粮食作物</el-menu-item>
          <el-menu-item index="2-2">经济作物</el-menu-item>
          <el-menu-item index="2-3">蔬菜作物</el-menu-item>
          <el-menu-item index="2-3">果类</el-menu-item>
          <el-menu-item index="2-3">野生果类</el-menu-item>
          <el-menu-item index="2-3">药用作物</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu>
          <template slot="title">病虫害分类</template>
          <el-menu-item index="3-1">虫害类</el-menu-item>
          <el-menu-item index="3-2">病害类</el-menu-item>
        </el-submenu>

        <el-menu-item index="/"><a href="https://earth.nullschool.net/zh-cn/" target="_blank"
                                   style="text-decoration: none;">气象</a></el-menu-item>
        <el-menu-item index="/"><a href="https://www.ele.me" target="_blank" style="text-decoration: none;">联系我们</a>
        </el-menu-item>
      </el-menu>
      <el-input prefix-icon="el-icon-search" v-model="input" style="width: 200px; margin-left: 20px; padding-top: 10px"
                placeholder="搜索"></el-input>
      <div class="header-right">
        登录
      </div>
    </div>


    <!--  内容-->
    <div>
      <!-- 轮播图-->
      <div class="carousel">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item>
            <img src="@/assets/img/img_1.png">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/img_2.png">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/img_3.png">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/img_4.png">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/img_5.png">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/picture3.jpg">
          </el-carousel-item>
          <el-carousel-item>
            <img src="@/assets/img/picture2.jpg">
          </el-carousel-item>
        </el-carousel>
      </div>

      <!--      详细内容-->
      <div class="section">
        <div class="weapper">

          <div class="title-th">今日推荐</div>
          <div class="content">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="item">
                  <img src="@/assets/img/huluobu.jpg" alt="">
                  <div class="info">
                    <div class="subtitle">文字介绍</div>
                    <div class="bottom">
                      <span class="fr">201赞</span>
                      <span class="f14">玉玉</span>
                    </div>
                  </div>
                </div>
                <div class="grid-content bg-purple"></div>
              </el-col>

              



            </el-row>
          </div>
        </div>
      </div>

    </div>
    <!--  底部  -->
    <div>

    </div>
  </div>
</template>

<script>


export default {
  name: "HomeView",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>

.header {
  display: flex;
  background: #545c64;
  color: white;

  .el-menu-demo {
    flex: 1;
    font-size: 16px;
    font-weight: 700;
  }

  .logo, .header-right {
    padding: 0 30px;
    line-height: 60px;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
}

.carousel {
  width: 100%;
  max-height: 640px;

  img {
    width: 100%;
    height: 100%;
  }
}

.section {
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  padding: 20px 0;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.wrapper {
  margin: 0 auto;
  position: relative;

}

//今日推荐
.title-th {
  text-align: center;
  margin: 10px;
  height: 74px;
  color: #636363;
  font: 36px/74px "Hiragino Sans GB", 'Microsoft YaHei';
}

.content {
  background-color: #545c64;

  .item {
    width: 300px;
    height: 275px;

    img {
      width: 100%;
      height: 100%;
    }

    .info {
      padding: 0 18px;
      border: 1px solid #ececec;
      border-top: 0;
      height: 114px;
      line-height: 24px;
      overflow: hidden;

      .subtitle {
        margin-top: 14px;
        height: 48px;
        font-size: 16px;
        overflow: hidden;
      }

      .bottom {
        margin-top: 16px;
        height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #636363;
      }

      .fr {
        color: #959595;
        float: right;
      }

      .f14 {
        display: inline-block;
        max-width: 70%;
        min-width: 55%;
        color: #636363;
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}

.grid-content {
  border-radius: 4px;
  min-height: 200px;
}



</style>
