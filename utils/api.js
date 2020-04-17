const axios = require("axios");
const api = {
    getUser (username) {
        return axios.get(`https://api.github.com/users/${username}`)
.catch(err =>  {
    console.log('user not found')
    process.exit(1)})

    } 
        
    }
 module.exports=api