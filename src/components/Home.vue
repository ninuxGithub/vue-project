<template>
  <div id="home">
    <h1>{{msg}}</h1>
    <button @click="getUsers()">Get Users</button>
    <h2>userInfo:{{userInfo}}</h2>
  </div>
</template>

<script>
import auth from '../auth/auth'


var getUrlStr =  function(name) {
　　var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
　　var r = window.location.search.substr(1).match(reg);
　　if(r != null) return unescape(r[2]);
　　return null;
}

export default {
  name: 'home',
  data () {
    return {
      msg: '欢迎您登录成功',
      userInfo:''
    }
    },
    beforeCreate(){
        //如果没有token的话需要重新登录
         if(!auth.data.authenticated){
         	console.dir(getUrlStr('flag'))
         	console.dir("enter home page...." )
            //this.$router.push('login')
        }
    },
    methods:{
        getUsers(){
            this.$http.get('http://localhost/api/users/',{
                headers:auth.getAuthHeader()
            }).then(function(re){
                this.userInfo = re.bodyText
            },function(){
                console.log("get email error")
            })
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
