/*
 * fetch请求的封装
 * @Author: Miracle
 */

export default function request(url, options){
    return new Promise((resolve, reject)=> {
        fetch(url, options).then(response => {
            return response.json();
        }).then(res=> {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })

}
