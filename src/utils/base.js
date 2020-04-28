//一切公共的函数

//高阶组件获取名字的函数
export function getName(com){
    return com.displayName || com.name || 'Component';
}

//空格正则
export let spanceReg=/\s/;

//手机号正则
export const phoneReg = /0?(13|14|15|17|18|19)[0-9]{9}/;


export const spance = /^[^\s]*$/;  //空格

//首页轮播图的公共设置
export let settings={
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay:true,
    autoplaySpeed:5000,
    //draggable: true,
    pauseOnHover: false
};

//app下载二维码链接
export let appEwm=`https://yjw-image.oss-cn-shenzhen.aliyuncs.com/qrcode/ltyj_android.png?time=${Date.parse(new Date())}`;
//公众号二维码链接
export let wechatEwm=`https://yjw-image.oss-cn-shenzhen.aliyuncs.com/qrcode/ltyj_weixin.png?time=${Date.parse(new Date())}`

//对数组进行截取   将一个数组截取成多个数组，length截取后的每个数组长度
export function sliceArr(arr,length) {
    if( !arr instanceof Array || !arr.length  || !length ) return arr;
    let sum=arr.length,  //总长度
        start=0,
        end=length,
        need=Math.ceil(sum/length), //需要循环的次数
        newArr=[];  //新的数组  Array<Array>
    for( let i =0; i<need ; i++ ) {
        newArr[i]=arr.slice(start,end);
        start += length;
        end += length;
    }
    return newArr;
}

//获取页面的卷曲距离
export function getScrollTop(){
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}


//对用户信息存储在sesition进行加密
export function b6En(obj){
    if(typeof obj !== 'object') return;
    let str = window.btoa(encodeURIComponent(JSON.stringify(obj)));
    return str;
}

//对用户信息存储在sesition进行解密
export function b6De(str){
    let obj=JSON.parse(decodeURIComponent(window.atob(str)));
    return obj;
}

//对url进行校验
export function urlReg(url){
    if(!url) return url;
    let reg=/^http|https/;
    if(reg.test(url)){
        return url;
    }else {
        return `http://${url}`
    }
}


//截取最大的字数
export  function subContent(str,max) {
    if(!str) return '';
    let noSpance=str.replace(/\s+/g,'');
    if(noSpance.length>max){
      return noSpance.substr(0,max);
    }else {
      return noSpance;
    }
}

//首页行业智库模块数据过滤
export function sliceHomeModel (list,noTwo) {
    list.map((item) => {
        item.id = (item.miroclassId || item.reportId || item.graphId)
        item.title = (item.graphTitle || item.reportTitle || item.miroclassTitle)
        item.imgPath = (item.graphPath || item.reportPath || item.miroclassPicPath)
        item.author=item.miroclassSpeaker
        item.content = item.content
    })
    let firstModel = list.slice(0, 1);
    let twoModel=[]
    let threeModel=[]
    if (noTwo) {
       twoModel = []
       threeModel = [list.slice(1, 5), list.slice(5, 9), list.slice(9, 13)]
    }else{
       twoModel = list.slice(1, 3)
       threeModel = [list.slice(3, 7), list.slice(7, 11), list.slice(11, 15)]
    }
    let NewObj = {
        firstModel,
        twoModel,
        threeModel
    }
    return NewObj
}

//首页热门图谱和报告数据清洗
export function sliceHomeHotModel (list) {
    list.map((item) => {
        item.id = ( item.reportId || item.graphId)
        item.title = (item.graphTitle || item.reportTitle )
        item.imgPath = (item.graphPath || item.reportPath)
    })
    return list
}
// 过滤数据
export function filterCategory (data) {
    let { categoryList } = data
    let newCategoryList = {}
    categoryList.forEach(item => {
        if (newCategoryList[item.columns]) {
            newCategoryList[item.columns].push(item)
        } else {
            newCategoryList[item.columns] = [item]
        }
    })
    data.category = newCategoryList
    return data
}

