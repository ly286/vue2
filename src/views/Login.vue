<template>
<!--  外面大盒子背景-->
  <div
      style="height: 100vh; display: flex; align-items: center; justify-content: center; background-color: darkolivegreen">
<!--    登录盒子-->
    <div
        style="display: flex;  flex-direction: column; align-items: center; justify-content: center; background-color: white; width: 50%; height: 50%; border-radius: 10px;overflow: hidden">

      <el-form :model="user" :rules="rules" ref="loginRef">
        <div style="font-size: 20px; font-weight: bold; text-align: center;margin-bottom: 25px;">欢迎登陆</div>

        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="user.username" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="user.password" style="width: 300px" show-password></el-input>
        </el-form-item>

        <el-form-item prop="validCode">
          <div style="display: flex">
            <el-input prefix-icon="el-icon-key" placeholder="请输入验证码" v-model="user.validCode" style="flex: 1"></el-input>
            <div style="flex: 1;">
              <ValidCode @input="createValidCode" />
            </div>
          </div>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" style="width: 300px" @click="login">登录</el-button>
        </el-form-item>


        <div style="display: flex">
          <div style="flex: 1; color: blueviolet; cursor: pointer" >忘记密码</div>
          <div style="flex: 1; text-align: right; color: blueviolet; cursor: pointer" @click="$router.push('/register')">还没有账号，点击注册</div>
        </div>

      </el-form>

    </div>

  </div>
</template>

<script>


import ValidCode from "@/components/ValidCode.vue";

export default {
  name: "Login",
  components: {ValidCode},
  data() {


    const validateValidCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value !== this.validCode.toLowerCase()) {  // 直接访问 this.user.validCode
        callback(new Error('验证码错误'))
      } else {
        callback();
      }
    };



    return {
      validCode: '',// 自动生成的验证码
      user: {
        username: '',
        password: '',
        validCode: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
        ],
        validCode: [
          {validator: validateValidCode, trigger: 'blur'},
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs['loginRef'].validate((valid) => {
        if (valid) {
          const username = this.user.username;
          this.$request.post('/login', this.user).then(res => {
            // console.log(res)
            if (res.code === 200) {
              // 自定义用户名
              localStorage.setItem('username', JSON.stringify(username)); // 将用户名存储到本地浏览器
              //存储用户信息到vuex
              console.log(this.$store)
              this.$store.commit("setUser", res.data)
              // 存储用户信息到浏览器
              localStorage.setItem("user", JSON.stringify(res.data))
              this.$router.push('/')
              this.$message.success("登录成功")
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      })
    },
    createValidCode(data) {
      console.log(data)
      this.validCode = data
      // this.user.validCode = data
    },
  },
}

</script>

<style scoped>
</style>