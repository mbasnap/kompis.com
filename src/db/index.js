import axios from 'axios'

const url = 'http://kompis-store/db/index.php',
    query  = (action, params) => axios.post(url + action, JSON.stringify(params))

export default {    
    get: (action, params) =>  new Promise((resolve, reject) => query('?get=' + action, params)
        .then(res => { console.log(res)
           resolve(res.data)
        }))
}