<template>
  <div>

    <div style="margin: 200px"></div>

    <div style="margin: 0 20px;">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.miaoshu"></el-input>
      </el-form-item>
      <el-form-item label="作品分类">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="粮食作物" value="shanghai"></el-option>
          <el-option label="经济作物" value="jingji"></el-option>
          <el-option label="蔬菜作物" value="shucai"></el-option>
          <el-option label="果类" value="guo"></el-option>
          <el-option label="药用作物" value="yaoyong"></el-option>
          <el-option label="病害类" value="binghai"></el-option>
          <el-option label="虫害类" value="chonghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-upload
            class="upload-demo"
            action="/upload-url"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-upload="beforeUpload"
        >
          <el-button size="small" type="primary">上传图片</el-button>
        </el-upload>
      </el-form-item>


      <el-form-item label="内容">
        <el-input type="textarea" v-model="form.desc" style="height: auto"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
        <el-button type="success" @click="goHome">返回首页</el-button>
      </el-form-item>
    </el-form>


    <div>
      <el-table :data="[users]">
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
      </el-table>
    </div>

    </div>

  </div>
</template>

<script>
import axios from "axios";
import request from "@/utils/request";

export default {
  name: "Element",
  data() {
    return {
      users: [],
      form: {
        name: '',
        region: '',
        miaoshu: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }

    }
  },
  mounted() {
    // axios.get('http://localhost:8080/user/1').then(res => {
    //       console.log(res.data)
    //       this.users = res.data
    //     })
    request.get('/user/1').then(res => {
      console.log(res)
      this.users = res.data
    })
  },


  methods: {
    onSubmit() {
      console.log('submit!');
    },
    goHome() {
      this.$router.push('/')
    },
    handlePreview(file) {
      // 图片预览
      console.log('预览图片', file);
    },
    handleRemove(file, fileList) {
      // 图片移除
      console.log('移除图片', file, fileList);
    },
    beforeUpload(file) {
      // 上传前的处理
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt500KB = file.size / 1024 < 500;

      if (!isJPG && !isPNG) {
        this.$message.error('只能上传 JPG/PNG 格式的图片');
      }
      if (!isLt500KB) {
        this.$message.error('图片大小不能超过 500KB');
      }
      return isJPG || isPNG && isLt500KB;
    }
  }
}


</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.upload-demo {
  border: 1px dashed #409EFF;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  width: 200px;
  height: 200px;
  line-height: 200px;
}
.upload-demo .el-upload__tip {
  font-size: 12px;
  color: #909399;
}
</style>