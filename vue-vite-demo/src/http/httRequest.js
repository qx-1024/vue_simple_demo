import axios from "axios";

export function doGet(url, params){
    return axios({
        method: "get",
        url: url,
        params: params,
        dataType: "json"
    })
}

export function getImg(url, params){
    return axios({
        method: "get",
        url: url,
        params: params,
        responseType: 'blob',
        headers: {
            Accept: 'application/octet-stream', 
        }
    })
}

export function doPost(url, data){
    return axios({
        method: "post",
        url: url,
        data: data,
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function uploadFile(url, data){
    return axios({
        method: "post",
        url: url,
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export function doPut(url, data){
    return axios({
        method: "put",
        url: url,
        data: data,
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function doDelete(url, params){
    return axios({
        method: "delete",
        url: url,
        params: params,
        dataType: "json"
    })
}