<template>
  <el-row>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="18">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.UserCode"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.PassWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="4">&nbsp;</el-col>
  </el-row>
</template>

<script>
import  {onLogin,loginGetter} from "../vuex/actions/AccountAction";

export default {
    data() {
      return {
        form: {
          UserCode: '',
          PassWord: ''
        }
      }
    },
  computed:{
      loginBase:loginGetter
  },
  watch:{
      loginBase:function (data) {
        this.$parent.$parent.hideHandle();//dialog隐藏
        this.$parent.$parent.$parent.$refs.headBar.loginFlag = true;//headBar修改标志位
        this.$parent.$parent.$parent.$refs.headBar.loginBaseData = data.ResultData;//赋值登录信息
        this.$router.push('/home');//路由跳转
      }
  },
    methods: {
      login() {
        onLogin(this);
      }
    }
  };
</script>
