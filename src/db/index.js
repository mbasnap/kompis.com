import {post} from 'axios'
const url = 'http://kompis-store/db/index.php',
    getPost = params => post(url, JSON.stringify(params)),
    result = key => (res, item) => res = {...res, [item[key]]: item},
    query = (action, params) => getPost({action,params}).then(res => res.data),
    reduceBy = key => arr => Promise.resolve(arr.reduce(result(key), {}))
export  {
    query,
    reduceBy
}