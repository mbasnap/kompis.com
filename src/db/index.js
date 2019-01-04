import {post} from 'axios'
const url = 'http://kompis-store/api.php',
query = (action, params) => post(url + '?' + action, JSON.stringify(params))
    .then(res => {
        if(!res.data)  throw new Error('res data false')
        else return res.data
    })

export default class  {
    constructor(obj, params){
        this.obj = obj
        this.params = params
    }
    update = (params) =>{
        let action = 'update=' + this.obj
        return query(action, params)
    }
    get = (params) =>{
        let action = 'get=' + this.obj
        return query(action, {...this.params, ...params})
        

    }
}