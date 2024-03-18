<template>
  <div style="background-color: #f5f5f5">
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
          <div class="title-th">萝卜</div>

          <p class="carrot-text">萝卜（Daucus carota var. sativa Hoffm.），是伞形科萝卜属一年生或二年生草本植物。转基因萝卜：表面较光滑。
            萝卜根肉质，长圆锥形，呈橙红色或黄色；茎单生，全株被白色粗硬毛；叶片长圆形，先端尖锐；茎生叶近无柄，有叶鞘，末回裂片小或细长；花通常白色，有时带淡红色；花柄不等长；果实圆卵形，棱上有白色刺毛。花期5-7月。
            《本草纲目》中记载：“元时始自胡地来，气味微似萝卜，故名。”萝卜也由此得名。
            萝卜原产于亚洲西部，12世纪经伊朗传入中国，现分布于全国各地。萝卜对气候的选择不严，到处可栽培，但性喜冷凉，喜充足日光，适宜于中性土种植，在微酸性和微碱性的土中，也能生长良好，在重粘土和低湿或排水不良的土地则不宜栽种。
            萝卜的繁殖方式主要是种子繁殖。
            《岭南草药志》曾对萝卜的药效作用做过记载，萝卜具有健脾和中，滋肝明目，化痰止咳，清热解毒的功效。
            萝卜的木质素，也有提高机体抗癌免疫力和间接消灭癌细胞的功能。
            萝卜质脆味美、营养丰富，烹调时应用食用油烹制，营养价值更高。科学研究证实：每天吃3根萝卜，有助于预防心脏疾病和肿瘤。
          </p>

          <div class="grid-content bg-purple"></div>

          <div style="text-align: center; font-size: 35px">科学种植</div>
          <div class="content">


            <div class="step">
              <h2>选择根大小和形状适合于你土壤的萝卜品种。</h2>这里介绍五个主要品种，这五个品种每种还包括数个子类。
              <ul>
                <li>
                  <b>尚特奈萝卜。</b>尚特奈萝卜在土中可以长到13到15厘米长，可以栽种于大多数种类土壤中，但它们更适合于肥沃，粘重土壤。
                </li>
                <li>
                  <b>球形萝卜。</b>也称为“拇指姑娘”，球形萝卜与尚特奈萝卜极为相似，但不会长得那么长。
                </li>
                <li>
                  <b>丹弗斯萝卜。</b> 丹弗斯萝卜是长得非常大块的萝卜，它需要粘重，肥沃的土壤中存活。但土壤不需要太深。
                </li>
                <li>
                  <b>南斯萝卜。</b> 原产于法国，南斯萝卜头是圆形的整个萝卜呈圆柱形可以长到15到23厘米。和丹弗斯萝卜一样，南斯萝卜要种在肥沃的浅土中。
                </li>
                <li>
                  <b>皇帝萝卜。</b>
                  这种在超市常见的萝卜需要栽种在蓬松的深土中。皇帝萝卜的特点是长在根茎上的根须非常细长。用于栽种这种萝卜的土壤很有讲究，因此确保你的土壤是肥沃，蓬松，够深，并且在栽种这种萝卜前要注意有良好的排水。
                </li>
              </ul>
            </div>

            <div class="step">
              <h2>选择种子类型。</h2>
              萝卜种子有未加工过的，有用膨润土进行了包衣处理的，或者还有经过杀菌剂处理的。膨润土包衣的种子比没有包衣的种子在发芽时更能保持水分。如果你想提高种子的成活率让发芽过程变得更容易，那就选择包衣种子。而且，包衣种子更容易掌控，比起没有包衣的种子用包衣种子你能更好地控制栽种间隔。准确的间隔栽种免除了后期的间苗。
            </div>

            <div class="step">
              <h2>选择一个有全日照或部分日照的区域。</h2>虽然全日照最好，但有点遮阴也没关系，因为萝卜是冷气候作物。
            </div>

            <div class="step">
              <h2>翻土。</h2>在栽种萝卜时确保土壤蓬松是非常重要的因素。用铲子把种植区域的土壤彻底翻松。
              <ul>
                <li>
                  把这些地方的石头或硬的，结块的土挑出来。用耙子把所有小石头都挑出来。你想要的土壤应该是蓬松的而不是坚硬结块的。
                </li>
                <li>
                  你可能需要制作一个苗圃来种植萝卜。由于萝卜对土壤条件要求苛刻，在全新的区域栽种在现成区域好些。用雪松木做的苗圃来种植萝卜，因为它在潮湿条件下不会发霉。
                </li>
              </ul>
            </div>

            <div class="step">
              <h2>测试土壤pH。</h2>萝卜喜欢pH在5.8到6.8之间的微酸性土壤环境。当地农业推广部应该有土壤测试的方式，测试包，和指导。
            </div>

            <div class="step">
              <h2>使用粪肥，堆肥，或其他任何有机肥给土壤施肥。</h2>把有机肥混入土壤之下10cm深。这会有助于种子在土壤中发芽和生长。
            </div>

            <div class="step">
              <h2>先在最后一次晚霜的时候播种一批萝卜。</h2>之后在接下来的两三个星期，再每周播种一批。
              <ul>
                <li>萝卜喜欢冷气候。如果你在美国农业部抗寒八级区域或更暖和的地方种植，那应在秋季或冬季进行种植。</li>
                <li>在种植前再次确保土壤已经翻松。</li>
                <li>
                  也可以学着在花盆里种植萝卜。在花盆中种植萝卜的方法和在地上或种植箱里差不多。只需要确保花盆够深，这样才能容得下长出的萝卜让它的根生长。
                </li>
              </ul>
            </div>

            <div class="step">
              <h2>可以随意撒种或把种子种成排。</h2>如果种成排，种子应种于3至5cm深的坑中，坑与坑间隔差不多应为10cm。对于蓬松的土壤可以用手指扒一个坑。在每个坑中放入六颗种子。
            </div>

            <div class="step">
              <h2 class="whb" aria-hidden="true">把种子用1.3cm厚的肥土盖起来。</h2>
              可以用堆肥，种植土壤混合物，甚至混一些沙子，特别是在温暖的地区。沙子有助于支撑长出的幼苗。
            </div>

            <div class="step">
              <h2 class="whb" aria-hidden="true">把种子用1.3cm厚的肥土盖起来。</h2>
              可以用堆肥，种植土壤混合物，甚至混一些沙子，特别是在温暖的地区。沙子有助于支撑长出的幼苗。
            </div>

            <div class="step">
              <h2 class="whb" aria-hidden="true">把种子用1.3cm厚的肥土盖起来。</h2>
              可以用堆肥，种植土壤混合物，甚至混一些沙子，特别是在温暖的地区。沙子有助于支撑长出的幼苗。
            </div>

            <div class="step">
              <h2 class="whb" aria-hidden="true">耙土。</h2>
              种下萝卜大约一周后，你可以轻轻地耙土，免得长出杂草来。这样会破坏那些已经生根的杂草。耙土时动作要轻，并且要沿着与成排的萝卜垂直的方向进行。这样才不会影响到萝卜种子的生长。
            </div>

            <div class="step">
              <h2 class="whb" aria-hidden="true">始终保持土壤湿润。</h2>
              如果你在热气候地区，每天都要给萝卜浇水。只是确保不要把种子冲走了或由于水压过大把正在发芽的幼苗损坏了。
            </div>

            <div class="step">
              <h2 class="whb" aria-hidden="true">在发芽的幼苗附近放一些覆盖物。</h2>在发芽的幼苗周围放几寸叶子，树皮，或干草以保住水分不流失。
              <ul>
                <li>用手拔除从覆盖物中长出来的草。轻轻拨不要影响到萝卜的根。</li>
                <li>确保盖住从覆盖物中冒出来的萝卜。如果萝卜冠部暴露在空气中，就会变苦。</li>
              </ul>
            </div>

            <div class="step">
              <h2 class="whb" aria-hidden="true">给萝卜间苗。</h2>当萝卜上面的叶子达到5cm时，就间苗，把小的萝卜拨出来使剩下的萝卜之间间隔2.5cm。
              <ul>
                <li>这样降低拥挤程度让每个萝卜和其根部有足够的生长空间。</li>
                <li>
                  再过两个星期萝卜上面的叶子大概会长到十几厘米高，再次间苗，让其间隔8到10cm。确保完成这个步骤，否则太拥挤的话萝卜就不会直着长，还可能不能完全生长。
                </li>
              </ul>
            </div>

            <div class="step">
              <h2 class="whb" aria-hidden="true">收获萝卜。</h2>
              萝卜长得越大越长，就会越甜越多汁。在它们长得足够大时就可以把它们拨来吃了，从播种到收获大概需要两到三个月的时间。当冠部微微冒出土面，直径大概为2cm时，萝卜就成熟了。
              <ul>
                <li>用手从叶子的根部来把萝卜拨出来这样可以避免破坏根部。把叶子的根部逮住，在往外拨之前先摇动几下。</li>
                <li>在拨萝卜前先浇水会使土壤变松，就能轻而易举的拨出完整的萝卜。</li>
              </ul>
            </div>


          </div>
        </div>
      </div>

    </div>
    <!--  底部  -->
    <el-footer class="footer">
      <!-- 这里放置页面底部的内容 -->
      <div class="content2">
        版权所有 &copy; ly by 2024 &nbsp;&nbsp;&nbsp;&nbsp; 备案号xxxxxxx
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
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showMessage() {
      this.$message('邮箱：xxxxxx@xx.com');
    },
    async getAll() {
      this.$request.get('/zhuYe/all').then(res => {
        console.log(res)
        this.items = res.data
        // 数据获取完成后更新显示的数据和总条目数
        this.handleCurrentChange(this.currentPage);
      })
    },
    handleCommand(command) {
      if (command === 'logout') {
        // 执行退出登录操作，例如清除本地存储中的用户信息，重定向到登录页等
        // 清除本地存储中的用户信息
        localStorage.removeItem('username');
        // 重定向到登录页
        this.$router.push('/login');
      } else if (command === 'manage') {
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
  padding: 20px 10px;
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
  text-align: left;
  margin: 10px;
  height: 74px;
  color: #0a0202;
  font: 36px/74px "Hiragino Sans GB", 'Microsoft YaHei';
}

.content {
  //background-color: #545c64;

  .item {
    width: 80%;
    margin: auto;
    //height: 175px;

  }
}

//p标签内容样式
.carrot-text {
  font-size: 18px; /* 调整文字大小 */
  line-height: 1.5; /* 调整行距 */
  text-indent: 2em; /* 设置首行缩进为两个字符的宽度 */
}

.step {
  font-size: 18px; /* 调整文字大小 */
  line-height: 1.5; /* 调整行距 */
  margin-bottom: 50px;
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
