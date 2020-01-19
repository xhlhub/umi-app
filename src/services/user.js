import request from "../utils/request"


export function getUserApi(params){
    return request({
        methods:'get',
        url:'user',
        params:params
    })
}