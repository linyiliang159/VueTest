import {httpPost} from '../../common/HttpBean'
import userStore from '../stores/UserStore'

export function onLogin(vm) {
  function callback(data) {
    if(data.ResultMsg=='登录成功') {
      userStore.commit('login',data.ResultData);
    }
    else {
      alert(data.ResultMsg);
    }
  };
  httpPost('/api/Account/Login', vm.form, callback);
};

export function loginGetter() {
  return userStore.state.loginBase;
}
