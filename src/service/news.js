import Api from './api';


class NewsApis extends Api {
    constructor(){
        super();
    }

    //获取新闻分类
    getNewsType(){
        return this.get('/lter-web/v1/news/queryNewsTypeList').then(({data})=>{
            if(!data.length) return [];
            return data;
        })
    }
    //获取新闻列表
    getNewsList(query){
        return this.get('/lter-web/v1/news/getEachTypeNews', query).then(({data})=>{
            return data;
        })
    }
    //获取最新发布
    getNewestNews(){
        return this.get('/lter-web/v1/news/queryNewestNews').then(({data})=>{
            return data;
        })
    }
    //获取新闻栏目轮播图
    getSwiperList(query){
        return this.post('/lter-web/v1/scrollbanner/list',query).then(({data})=>{
            return data;
        })
    }
}

export default new NewsApis();