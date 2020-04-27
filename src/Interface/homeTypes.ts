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
export interface ChanPinTuPu extends types.NewsListCommon {
    list: [] | types.ChanpintupuListObj[]
}
