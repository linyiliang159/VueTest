import axios from 'axios'

export function httpPost(url,formObj,callback){
  axios.post('/api'+url, formObj)
    .then(function (res) {
      callback(res.data);
    })
    .catch(function (err) {
      console.log(err);
    })
};


export function httpGet(url,callback,formObj={}){
  axios.get('/api'+url, formObj)
    .then(function (res) {
      callback(res.data);
    })
    .catch(function (err) {
      console.log(err);
    })
};
