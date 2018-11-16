<template>
  <el-row>
    <el-col :span="4">
      <div class="liny-header liny-header-logo">智慧粮库管理系统</div>
    </el-col>
    <el-col :span="1" style="background:rgb(84, 92, 100);height:61px;">&nbsp;</el-col>
    <el-col :span="16">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-menu-item index="3">处理中心</el-menu-item>
        <el-menu-item index="4">处理中心</el-menu-item>
        <el-menu-item index="5">消息中心</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="2">
      <div class="liny-header liny-header-right" v-if="loginFlag">hello,linyiliang</div>
      <div class="liny-header liny-login-btn" v-if="!loginFlag">
        <el-button type="warning" @click="showLogin">登录</el-button>
      </div>
    </el-col>
    <el-col :span="1" style="background:rgb(84, 92, 100);height:61px;">&nbsp;</el-col>
  </el-row>
</template>

<style>
  .liny-header {background:rgb(84, 92, 100);height:61px;color:rgb(255, 208, 75);
    border-bottom:3px solid rgb(255, 208, 75);box-sizing:border-box;line-height:61px;text-align:center;}
  .liny-header-logo {font-size:24px;}
  .liny-header-right {font-size:16px;}
  .liny-login-btn {border:0;}
</style>

<script>
  import Login from './Login'
  // import Register from './Register'
  export default {
    data() {
      return {
        activeIndex: '1',
        loginFlag: false,
        loginBaseData: {}
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      showLogin() {
        this.$parent.$refs.diaLog.showHandle(Login);
      }
    }
  };
</script>
