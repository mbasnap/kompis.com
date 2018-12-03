import axios from 'axios'

const url = 'http://kompis-store/db/index.php',
    query  = (action, params) => axios.post(url + '?action=' + action, JSON.stringify(params)),
    data = resolve => ({data})=> resolve(data.length ? data.map(JSON.parse)  : JSON.parse(data))

export default(action, params) => new Promise((resolve, reject) => query(action, params).then(data(resolve)))