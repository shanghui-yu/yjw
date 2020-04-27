import * as types from './commonList';

export interface LeftRightNews extends types.NewsListCommon {
    newsResult: {
        leftResult: types.NewsListLeft[];
        rightResult: Array<Array<types.NewsListObj>>;
      };
}

export interface RightNews extends types.NewsListCommon {
    list: [] | types.NewsListObj[]
}
export interface HomeZhiKu extends types.homeList {
    firstModel: types.HangyezhikuObj[];
    twoModel: types.HangyezhikuObj[];
    threeModel: types.HangyezhikuObj[];
}
export interface HomeHot extends types.HangyezhikuObj {
    list: [] | types.HangyezhikuObj[]
}
