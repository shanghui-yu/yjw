import { connect } from "react-redux";

/***
 *  封装connect函数 可以连接多个store
 *  使用方法：传入的对象和Connect组件一样，只是第一个参数需要更改为数组对象 
 * interface {
 *  name:string  @params { 需要的state名字 ，必传 }
 *  need?:Array<sting>  @params { 需要的state的详细key值，如果传入空数组获取不传,则连接所有state到props }
 *  func:Array<sting>  @params { 需要的reducers或者effects，必传 }
 * }
 * @params { component } 组件名字
 */

// 举例示范
// export default Connects(
//     [
//       {
//         name: "detailStore",
//         //need:[],
//         func: ["getDetailData"],
//       },
//       {
//         name: "homeStore",
//         need: ["homeBanner"],
//         func: ["initHomeBanner"],
//       }
//     ],
//     Detail
//   );

export  const Connects  = (stores,component) => {
    if (!stores instanceof Array || !stores.length ) return;
    const mapState = (state) => {
        let obj = {};
        stores.forEach(values=>{
            if (!values.need || !values.need.length) {
                obj = {...obj,...state[values.name]} 
            }else {
                values.need.forEach(val=>{
                    obj[val] = state[values.name][val];
                })
            }
            
        })
        return obj;
    };
    const mapDispatch = dispatch => {
        let obj = {};
        stores.forEach(values=>{
            values.func.forEach(val=>{
                obj[val] = dispatch[values.name][val];
            })
        })
        
        return obj;
    };
    return connect(mapState,mapDispatch)(component);
};