<template>
  <div style="height: 100vh; display: flex; align-items: center; justify-content: center; background-color: darkgrey">
    <div style="background-color: white; width: 50%; border-radius: 10px; overflow: hidden;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="padding: 20px;">
        <div style="font-size: 20px; font-weight: bold; text-align: center;margin-bottom: 25px;">欢迎登陆</div>
        <!-- 昵称 -->
        <el-form-item label="昵称：" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码：" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item label="确认密码：" prop="password2">
          <el-input v-model="ruleForm.password2" show-password></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <!-- 出生日期 -->
        <el-form-item label="出生日期" prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <!-- 性别 -->
        <el-form-item label="性别" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            <el-radio label="其他"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 个人介绍 -->
        <el-form-item label="个人介绍" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>

      <!-- 按钮行 -->
      <div style="padding-top: 20px; text-align: center; margin-bottom: 20px">
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="$router.push('/login')">返回登陆</el-button>
      </div>
    </div>
  </div>
</template>


<script>


import ValidCode from "@/components/ValidCode.vue";

export default {
  name: "Register",
  components: {ValidCode},
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        password2: '',
        email: '',
        date1: '',
        resource: '',
        desc: ''
      },
      rules: {
        username: [
          {required: true, message: '输入用户名', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在3-15个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '输入密码', trigger: 'blur'},
        ],
        password2: [
          {required: true, message: '请再次输入密码', trigger: 'blur'},
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
        ],
      }
    };
  },
  methods: {
    //注册
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.password !== this.ruleForm.password2) {
            this.$message.error("两次密码不一致");
          }
          else {
            this.$request.post("/register", this.ruleForm).then(res => {
              if (res.code === 200) {
                this.$message.success("注册成功");
                this.$router.push("/");
              }else {
                this.$message.error(res.msg);
              }
            })
          }
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>

<style scoped>
</style>