import axios from 'axios'
import userStore from '../vuex/stores/UserStore'

export function httpPost(url, formObj, callback) {
  axios.post('http://localhost:55824' + url, formObj)
    .then(function (res) {
      callback(res.data);
    })
    .catch(function (err) {
      console.log(err);
    })
};


export function httpGet(url, callback) {
  console.log(userStore.state.loginBase.Token);
  axios.get('http://localhost:55824' + url, {
    headers: {'ApiAuthorization':userStore.state.loginBase.Token}
  }).then(function (res) {
    callback(res.data);
  })
    .catch(function (err) {
      console.log(err);
    })
};
