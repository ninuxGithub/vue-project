<template>
  <div>
    <h2>不完善的登录 Deprecated</h2>
    <p>{{ error }}</p>
    
    <div>
      <input type="text"  placeholder="clientId" v-model="info.client_id" >
    </div>
    <div>
      <input type="text"  placeholder="clientSecret" v-model="info.client_secret"  >
    </div>
    <div>
      <input type="text"  placeholder="grantType" v-model="info.grant_type"  >
    </div>
    <div>
      <input type="text"  placeholder="username" v-model="info.username"  >
    </div>
    <div>
      <input type="text"  placeholder="password" v-model="info.password"  >
    </div>
    <button @click="submit()">登录</button>
  </div>
</template>

<script>
import auth from '../auth/auth'

export default {

  data () {
    return {
      info: {
        client_id: 'password_auth_mode',
        client_secret: '123456',
        grant_type: 'password',
        username: 'admin',
        password: 'password'
      },
      error: ''
    }
  },
  methods: {
    submit () {
      var info = {
      	client_id: this.info.client_id,
      	client_secret: this.info.client_secret,
      	grant_type: this.info.grant_type,
        username: this.info.username,
        password: this.info.password
      }
      auth.login(this, info)
    }
  }
}
</script>
