import Api from './api';


class SearchApis extends Api {
    constructor(){
        super();
    }

    //获取搜索新闻
    getSearchNews(query){
        return this.get('/lter-web/v1/search/searchNews',query).then(({data})=>{
            return data;
        })
    }
    //获取最新发布
    getNewestNews(){
        return this.get('/lter-web/v1/news/queryNewestNews').then(({data})=>{
            return data;
        })
    }

}

export default new SearchApis();