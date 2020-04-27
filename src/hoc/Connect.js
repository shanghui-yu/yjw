import { connect } from "react-redux";

/***
 *  封装connect函数
 *  第一个参数是一个对象 
 * interface {
 *  name:string  @params { 需要的state名字 ，必传 }
 *  need?:Array<sting>  @params { 需要的state的详细key值，如果传入空数组获取不传,则连接所有state到props }
 *  func:Array<sting>  @params { 需要的reducers或者effects，必传 }
 * }
 * @params { component } 组件名字
 */

 // 举例示范
 // export default Connect({
//   name:'detailStore',
//   need:[],
//   func:['getDetailData']
// },Detail)

export  const Connect  = ({name,need=[],func},component) => {
    const mapState = (state) => {
        if (!need.length) return state[name];
        let obj = {};
        need.forEach(val=>{
            obj[val] = state[name][val];
        })
        return obj;
    };
    const mapDispatch = dispatch => {
        let obj = {};
        func.forEach(val=>{
            obj[val] = dispatch[name][val];
        })
        return obj;
    };
    return connect(mapState,mapDispatch)(component);
};