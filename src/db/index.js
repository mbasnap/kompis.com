import axios from 'axios'
const url = 'http://kompis-store/db/index.php'
const getUrl = (action, table) => url + "?" + action + '=' + table
const query = (action, table, params) => resolve =>{
    let resolveQuery = ({data}) => {
        console.log(action)
        console.log(data)
        resolve(data)
    }
    return    axios.post(getUrl(action, table), JSON.stringify(params))
            .then(resolveQuery)
}

export default class DataBase{
    constructor(table) {
        this.table = table
    }

    save = obj=> obj.id ? this.update(obj) : this.add(obj)
    get = obj => new Promise(query('get', this.table, obj)) 
    add = obj =>  new Promise(query('add', this.table, obj)) 
    update = obj =>  new Promise(query('update', this.table, obj)) 
}