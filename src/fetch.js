const axios = require('axios')

axios.get('http://172.16.107.15:4001')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
 })