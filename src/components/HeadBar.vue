<template>
  <el-row style="background: #eec02a;height: 60px;padding: 10px 0px;">
    <el-col :span="4" style="font-size:2em;"><i class="el-icon-news"></i>xxhh空间</el-col>
    <el-col :span="8">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search">
      </el-input>
    </el-col>
    <el-col :span="8">
      <el-button type="success" v-on:click="showLogin" v-if="!loginFlag">注册/登录</el-button>
      <div>
        <span style="font-size: 1.2em;line-height: 45px" v-if="loginFlag">你好，{{}}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import Login from './Login'
  // import Register from './Register'
  export default {
    data(){
      return{
        loginFlag:false,
        loginBaseData:{}
      }
    },
    methods: {
      showLogin() {
        this.$parent.$refs.diaLog.showHandle(Login);
      }
    }
  };
</script>
