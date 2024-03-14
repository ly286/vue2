<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="昵称：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="password2">
        <el-input v-model="ruleForm.password2" show-password></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col>
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="性别" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="个人介绍" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>


<script>
export default {
  name: "Test",
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
        password2: '',
        email: '',
        date1: '',
        resource: '',
        desc: ''
      },
      rules: {
        name: [
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>