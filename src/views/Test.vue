<template>
  <div>
<h1>123456</h1>
    <canvas id="canvas"  style="background:#0d0c0c"></canvas>
    <div class="container loginIn">

      <div :class="2 == 1 ? 'left' : 2 == 2 ? 'left center' : 'left right'">
        <el-form class="login-form" label-position="left" :label-width="1 == 3 || 1 == 2 ? '30px': '0px'">
          <div class="title-container"><h3 class="title">农作物数据共享平台登录</h3></div>
<!--          <el-form-item :style='{"padding":"0","boxShadow":"0 0 6px rgba(0,0,0,0)","margin":"0 0 12px 0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(0,0,0,0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' :label="1 == 3 ? '用户名' : ''" :class="'style'+1">-->
<!--            <span v-if="1 != 3" class="svg-container" style="-->
<!--			color:rgba(136, 154, 164, 1);-->
<!--			line-height:30px;-->
<!--			font-size:14px;-->
<!--			width:30px;-->
<!--			padding:0;-->
<!--			margin:0;-->
<!--			padding:0;-->
<!--			border-width:0;-->
<!--			border-style:solid;-->
<!--			border-color:rgba(0,0,0,0);-->
<!--			background-color:rgba(0,0,0,0);-->
<!--			box-shadow:0 0 6px rgba(0,0,0,0);-->
<!--			}"><svg-icon icon-class="user" /></span>-->
<!--            <el-input placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username" />-->
<!--          </el-form-item>-->
<!--          <el-form-item :style='{"padding":"0","boxShadow":"0 0 6px rgba(0,0,0,0)","margin":"0 0 12px 0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(0,0,0,0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' :label="1 == 3 ? '密码' : ''" :class="'style'+1">-->
<!--            <span v-if="1 != 3" class="svg-container" style="color:rgba(136, 154, 164, 1);-->
<!--			line-height:30px;-->
<!--			font-size:14px;-->
<!--			width:30px;-->
<!--			padding:0;-->
<!--			margin:0;-->
<!--			padding:0;-->
<!--			/* border-width:0; */-->
<!--			border-style:solid;-->
<!--			border-color:rgba(0,0,0,0);-->
<!--			background-color:rgba(0,0,0,0);-->
<!--			box-shadow:0 0 6px rgba(0,0,0,0);"><svg-icon icon-class="password" /></span>-->
<!--            <el-input placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password" />-->
<!--          </el-form-item>-->
<!--          <el-form-item v-if="roles.length>1" label="角色" prop="loginInRole" class="role" style="display: flex;align-items: center;">-->
<!--            <el-radio-->
<!--                v-for="item in roles"-->
<!--                v-bind:key="item.roleName"-->
<!--                v-model="rulesForm.role"-->
<!--                :label="item.roleName"-->
<!--            >{{item.roleName}}</el-radio>-->
<!--          </el-form-item>-->
<!--          <el-form-item v-if="roles.length==1" label=" " prop="loginInRole" class="role" style="display: flex;align-items: center;">-->
<!--          </el-form-item>-->
          <el-button type="primary" @click="login()" class="loginInBt">{{'1' == '1' ? '登录' : 'login'}}</el-button>
          <el-form-item class="setting">
            <div class="register" @click="register('nongyejishuyuan')">注册农业技术员</div>
            <!-- <div style="color:rgba(25, 169, 123, 1)" class="reset">修改密码</div> -->
          </el-form-item>
        </el-form>
      </div>

    </div>


  </div>
</template>


<script>
export default {
  name : "Test",
  data() {

  }
}
</script>