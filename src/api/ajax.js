// ajax 请求模块，返回promise.data
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return new promise(function(resolve, reject) {
        //执行ajax请求
        let promise;
        if (type === 'GET') {
            // 准备URL query参数数据
            let dataStr = '' //拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + "&"
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            } //发送GET请求
            promise = axios.get(url)

        } else {
            promise = axios.post(url, data)

        }
        promise.then(function(response) {
            resolve(response.data)
        }).catch(function(error) {
            reject(error)
        })
    })


}