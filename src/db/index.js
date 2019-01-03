import {post} from 'axios'
const url = 'http://kompis-store/api.php',
query = (action, params) => post(url + '?' + action, JSON.stringify(params))

export default class  {
    constructor(obj, params){
        this.obj = obj
        this.params = params
    }
    update = (id, params) =>{
        let action = 'update=' + this.obj + '&id=' + id 
        return query(action, params)
        .then(res => {
            console.log(res)
           return res.data
       }) 
    }
    get = (params) =>{
        let action = 'get=' + this.obj
        return query(action, {...this.params, ...params})
        .then(res => {
            //  console.log(res)
           return res.data
       }) 
        

    }
}