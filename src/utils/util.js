/*
 * 工具函数
 * @Author: Miracle
 */

class Util {
    /**
     * @desc   判断对象是否为空
     * @param  {Object} obj
     * @return {Boolean}
     */
    isEmptyObject(obj) {
        if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
            return false;
        }
        return !Object
    }

    /**
     *
     * @desc   判断是否为邮箱地址
     * @param  {String}  str
     * @return {Boolean}
     */
    isEmail(str) {
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
    };

    /**
     * 判断是否为手机号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    isMobile(str) {
        return /^1\d{10}$/.test(str)
    };

    /**
     * 把ISO格式时间转成时间戳
     * @param isoStr
     * @returns {number}
     */
    getTimeStamp(isoStr) {
        const arr = isoStr.match(/\d+/g);
        arr[1] = arr[1]-1;      //月份要减一  因为0代表一月
        return new Date(...arr).getTime();
    };

    /**
     * 时间计算（几分钟前...）
     * @param dateTimeStamp
     * @returns {string}
     */
    timeAgo(dateTimeStamp) {   //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
        const minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
        const hour = minute * 60;
        const day = hour * 24;
        const week = day * 7;
        const month = day * 30;
        const now = new Date().getTime();   //获取当前时间毫秒
        const diffValue = now - dateTimeStamp;//时间差
        if(diffValue < 0){
            return false;
        }
        const minC = diffValue/minute;  //计算时间差的分，时，天，周，月
        const hourC = diffValue/hour;
        const dayC = diffValue/day;
        const weekC = diffValue/week;
        const monthC = diffValue/month;
        let result = '';
        if(monthC >= 1 && monthC <= 4){
            result = `${parseInt(monthC,10)}月前`
        }else if(weekC >= 1 && weekC <= 4){
            result = `${parseInt(weekC,10)}周前`
        }else if(dayC >= 1 && dayC <= 7){
            result = `${parseInt(dayC,10)}天前`
        }else if(hourC >= 1 && hourC <= 24){
            result = `${parseInt(hourC,10)}小时前`
        }else if(minC >= 1 && minC <= 60){
            result = `${parseInt(minC,10)}分钟前`
        }else if(diffValue >= 0 && diffValue <= minute){
            result = "刚刚"
        }else {  //超过三月显示日期
            const datetime = new Date(dateTimeStamp);
            const dYear = datetime.getFullYear();
            const dMonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
            const dDate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
            result = `${dYear}-${dMonth}-${dDate}`

        }
        return result;
    };

    /**
     * 数组去重
     * @param arr
     * @returns {any[]}
     */
    distinct(arr) {
        return [...new Set(arr)];
    };

    /**
     * 解析对象为get请求的参数格式
     * @param obj
     * @returns {string}
     */
    parseParams(obj){
        if(this.isEmptyObject(obj)) { // 空对象
            return;
        }
        const keyList = Object.keys(obj);
        const arr = [];
        keyList.forEach(item => {
            const str = `${item}=${obj[item]}`;
            arr.push(str)
        });
        return `?${arr.join('&')}`;
    }
}

const T = new Util();

// function linkTo(navigateTo, params) {
//     this.props.navigation.navigate(navigateTo, params);
// }

export { T };
