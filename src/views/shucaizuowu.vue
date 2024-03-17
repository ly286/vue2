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
          <el-menu-item index="/liangshizuowu">粮食作物</el-menu-item>
          <el-menu-item index='/'>经济作物</el-menu-item>
          <el-menu-item index='/shucaizuowu'>蔬菜作物</el-menu-item>
          <el-menu-item index='/'>果类</el-menu-item>
          <el-menu-item index='/'>野生果类</el-menu-item>
          <el-menu-item index='/'>药用作物</el-menu-item>
          <el-submenu index='/'>
            <template slot="title">选项4</template>
            <el-menu-item index='/'>选项1</el-menu-item>
            <el-menu-item index='/'>选项2</el-menu-item>
            <el-menu-item index='/'>选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu>
          <template slot="title">病虫害分类</template>
          <el-menu-item index="3-1">虫害类</el-menu-item>
          <el-menu-item index="3-2">病害类</el-menu-item>
        </el-submenu>

        <el-menu-item index="/"><a href="https://earth.nullschool.net/zh-cn/" target="_blank"
                                   style="text-decoration: none;">气象</a></el-menu-item>
        <el-menu-item @click="showMessage">联系我们
        </el-menu-item>
      </el-menu>
      <el-input prefix-icon="el-icon-search" v-model="input" style="width: 200px; margin-left: 20px; padding-top: 10px"
                placeholder="搜索"></el-input>
      <div class="header-right">
        <!-- 根据用户登录状态显示不同内容 -->
        <span>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="user-name" style="color: orange">{{ username }}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="manage">后台管理</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
      </div>
    </div>


    <!--  内容-->
    <div>


      <!--      详细内容-->
      <div class="section">
        <div class="wrapper">

          <div class="title-th">蔬菜作物</div>
          <div class="content">
            <el-row :gutter="20">

              <el-col :span="24" v-for="(item, id) in displayedItems" :key="id">
                <div class="item">
                  <a :href="item.link"> <!-- 动态赋值超链接地址 -->
                    <img :src="item.img" alt="">
                  </a>
                  <div class="info">
                    <div class="subtitle">{{item.title}}</div>
                    <div class="bottom">
                      <span class="fr">{{item.liulan}}赞</span>
                      <span class="f14">{{item.userId}}</span>
                    </div>
                  </div>
                </div>
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <!-- 分页组件 -->
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="pageSize"
                :total="totalItems"
                layout="prev, pager, next"
            ></el-pagination>
          </div>
        </div>
      </div>

    </div>
    <!--  底部  -->
    <el-footer class="footer">
      <!-- 这里放置页面底部的内容 -->
      <div class="content2">
        版权所有 &copy; ly by 2024  &nbsp;&nbsp;&nbsp;&nbsp;  备案号xxxxxxx
      </div>
    </el-footer>
    <!--浮动返回顶端底端-->
    <div>
      <div class="float-buttons">
        <div class="top-button" @click="scrollToTop">
          <i class="el-icon-arrow-up"></i>
        </div>
        <div class="bottom-button" @click="scrollToBottom">
          <i class="el-icon-arrow-down"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: "HomeView",
  computed: {
    user() {
      return this.$store.state.user// 获取 Vuex 中的用户信息
    }
  },
  data() {
    return {
      username: 'admin',
      activeIndex: '1',
      activeIndex2: '1',
      input: '',
      items: [], // 所有数据
      displayedItems: [], // 当前显示的数据
      currentPage: 1, // 当前页码
      pageSize: 6, // 每页显示的条目数
      totalItems: 0 // 总条目数
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showMessage() {
      this.$message('邮箱：xxxxxx@xx.com');
    },
    async getAll(){
      this.$request.get('/zhuYe/all').then(res => {
        console.log(res)
        this.items = res.data
        // 数据获取完成后更新显示的数据和总条目数
        this.handleCurrentChange(this.currentPage);
      })
    },
    // 处理页码变化
    handleCurrentChange(val) {
      this.currentPage = val;
      // 计算当前页要显示的数据范围
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = this.currentPage * this.pageSize;
      // 更新显示的数据
      this.displayedItems = this.items.slice(startIndex, endIndex);
      // 更新总条目数
      this.totalItems = this.items.length;
    },
    handleCommand(command) {
      if (command === 'logout') {
        // 执行退出登录操作，例如清除本地存储中的用户信息，重定向到登录页等
        // 清除本地存储中的用户信息
        localStorage.removeItem('username');
        // 重定向到登录页
        this.$router.push('/login');
      }else if(command === 'manage'){
        this.$router.push('/manage')
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动效果
      });
    },
    scrollToBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // 平滑滚动效果
      });
    }
  },
  created() {
    //获取主页所有信息
    this.getAll();
    // // 初始化显示的数据
    // this.displayedItems = this.items.slice(0, this.pageSize);
    // // 设置总条目数
    // this.totalItems = this.items.length;
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

  img {
    width: 100%;
    height: 100%;
  }
}

.section {
  width: 70%;
  //height: 80vh;
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
  //background-color: #545c64;

  .item {
    width: 80%;
    margin: auto;
    //height: 175px;

    img {
      width: 100%;
      //height: 100%;
      aspect-ratio: 4/3;
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
        color: #0d0c0c;
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
  min-height: 50px;
}


//底部
.footer {
  background-color: #521f1f; /* 底部背景颜色 */
  height: 60px; /* 底部高度 */
  line-height: 60px; /* 垂直居中 */
  text-align: center; /* 文字水平居中 */
}

.content2 {
  color: #ffffff; /* 文字颜色 */
}


.float-buttons {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}

.top-button,
.bottom-button {
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.top-button:hover,
.bottom-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

</style>
