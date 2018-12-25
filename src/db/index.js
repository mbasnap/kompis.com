import axios from 'axios'
const url = 'http://kompis-store/db/index.php',
    query = (action, params) => new Promise(resolve => {
        axios.post(url, JSON.stringify({action,params})).then(res => resolve(res.data))
    }),
    reduceBy = key => arr => new Promise(resolve => {
        let res = arr.reduce((res, item) => {
            res[item[key]] = item
            return res
        },{})
        resolve(res)
    })
export  {
    query,
    reduceBy
}