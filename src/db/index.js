import axios from 'axios'
// axios.post(url + '?action=' + action, JSON.stringify(params))
const url = 'http://kompis-store/db/index.php',
query  = (action, params) => axios.post(url + '?action=' + action, JSON.stringify(params))

export default {
    getContent: name => {
        return new Promise((resolve, reject) => {
            query('getPost', {name}).then(res => {
                console.log(res)
                resolve({[name]: res.data})
            })
        })
    }
}