
//const SERVER_URL = 'http://localhost:8080'
//const LOGIN_URL = SERVER_URL + '/login2'
const SERVER_URL = 'http://localhost'
const LOGIN_URL = SERVER_URL + '/oauth/token'

export default{
    data: {
        authenticated: false
    },
    login(context,info){
        context.$http.post(LOGIN_URL,info).then(function(data){
//            console.log(data.bodyText)
//            console.log(JSON.parse(data.bodyText))
            var jsonData = JSON.parse(data.bodyText);
//            console.dir(jsonData['access_token'])
            localStorage.setItem('token',jsonData['access_token']);
//            var header ="'Authorization':'Bearer ' "+localStorage.getItem('token')
//            console.dir(header)
            this.authenticated = true
            this.$router.push({path:'/home', query:{'flag': this.authenticated}})
//            this.$router.push({path:'/home?flag='+this.authenticated})
        },function(err){
            console.log(err + "," +err.body.message)
            context.error = err.body.message
        })
    },
    getAuthHeader(){
    	console.dir('Authorization:Bearer ' + localStorage.getItem('token'))
        return {
            'Authorization':'Bearer ' + localStorage.getItem('token')
        }
    },
    
    getAuthenticated(){
    	return this.authenticated;
    },
    checkAuth(){
        var token = localStorage.getItem('token')
        if(token){
            this.authenticated = true
        }else{
            this.authenticated = false
        }
    }
}
