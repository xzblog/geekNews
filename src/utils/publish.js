/*
 * 发布订阅
 * @Author: Miracle
 */


const night = {
    bgColor: '#353638',
    tintColor: '#333333',
    primaryColor: '#1f2020',
    successColor: '#67c23a',
    infoColor: '#909399',
    warningColor: '#e6a23c',
    dangerColor: '#f56c6c',
    fontColor:  '#f6f6f6',
    white: '#ffffff',
};

const daytime = {
    bgColor: '#ffffff',
    tintColor: '#f6f6f6',
    primaryColor: '#409eff',
    successColor: '#67c23a',
    infoColor: '#909399',
    warningColor: '#e6a23c',
    dangerColor: '#f56c6c',
    fontColor:  '#333333',
    white: '#ffffff',
};


// const miracle = new Publish();
//
// //测试例子
// miracle.get();

// miracle.set('theme');

// const publisher = {}; // 定义发布者
//
// publisher.clientList = []; //缓存列表，存放订阅者的回调函数
//
// publisher.listen = function (key,fn) { //增加订阅者
//     if(!this.clientList[key]){
//         this.clientList[key] = [];
//     }
//     this.clientList[key].push(fn); //订阅的消息添加进缓存列表
// };
//
// publisher.trigger = function () { // 发布消息
//     const key = Array.prototype.shift.call(arguments); //取出订阅者
//     const fns = this.clientList[key]; // 得到订阅者所有的订阅方法
//     if(!fns || fns.length ===0 ){ //如果没有订阅过
//         return false;
//     }
//
//     for (let i = 0,fn; fn=fns[i++];){
//         fn.apply(this, arguments); //arguments  是发布消息时带上的参数
//     }
// };


