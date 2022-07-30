const BASE_URL = ''

import axios from "axios"
 import router from "../router";
import {Message} from "element-ui";

const api = axios.create({
    baseURL : BASE_URL,
    timeout :50000
})

api.interceptors.response.user(response=>{
    return response;
},(error)=>{
    return error.response;
})
// async:异步处理
api.doPost = async (url,param) =>{
    let {data} = await api.post(url,param);
    return data;
}

api.doGet = async (url) =>{
    let {data} = await api.get(url);
    return data;
}

export default api;