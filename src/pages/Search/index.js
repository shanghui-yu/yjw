import React, {Component, Suspense} from 'react'
import http from "service/search";
import {Input, Pagination, Carousel} from 'antd';
import MyBackTop from 'components/MyBackTop';
import { spanceReg, urlReg } from 'utils/base';
import gzhImg from 'imgs/search/gzh.png';
import yjwImg from 'imgs/search/yjw.png';
import 'sass/search/style.scss'
import {Link} from "react-router-dom";
import mes from "../../components/Mes";

const { Search } = Input;

class newsSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            total: 0,
            showNum: 0,
            showKeyWord: '',
            searchKeyWord: this.props.match.params.keyWord,
            newsList: [],
            adUrl: []
        };
    }
    componentDidMount() {
        window.scrollTo(0,0);
        this.getSearchNews();
        this.getNewestNews();
    }
    getSearchNews = async () => {
        const { current, searchKeyWord } = this.state;
        if(!Boolean(searchKeyWord) || spanceReg.test(searchKeyWord) ){
            mes('warning','请输入正确的标题');
            this.setState({ showKeyWord: '' });
            return false;
        }else {
            const data = {
                current: current,
                size: 10,
                searchKeyWord: searchKeyWord
            };
            let newsData = await http.getSearchNews(data);
            let newsList = newsData.records;
            let total = newsData.total;
            // console.log(newsData);
            this.setState((prevState) => ({
                newsList,
                total,
                showNum: total,
                showKeyWord: searchKeyWord,
            }))
        }
    };
    getNewestNews = async () => {
        let newestNewsData = await http.getNewestNews();
        let adUrl = newestNewsData.adUrl;
        this.setState({ adUrl });
    };
    render() {
        const { newsList, total, searchKeyWord, current, adUrl, showNum, showKeyWord } = this.state;
        return (
            <div className='search'>
                    <div className='left'>
                        <div className='search_input'>
                            <div className='input_left'>
                                <Search
                                placeholder="雷霆应急"
                                allowClear={ true }
                                value={ searchKeyWord }
                                onChange={(event)=>{this.inputChange(event)}}
                                onSearch={ value => this.searchKeyWord(value) }
                                style={{ width: 310 , height:32}}
                            /></div>
                            {
                                showKeyWord && <div className='input_right'>共找到{showNum}个包含“{showKeyWord}”的结果</div>
                            }
                        </div>
                        <div className='recommend'>
                            {
                                !total || total === 0 ? <div className='no_result'>没有找到哦，试试其他关键词吧~</div> :
                                    newsList && newsList.map((item) => {
                                    return(
                                        <Link to={ `/home/detail/${item.id}` } target='_blank' key={item.id}>
                                            <div className='news_list'>
                                                <div className='news_content_noImg'>
                                                    <p className='news_title'>{this.limitWords(item.newsTitle,50)}</p>
                                                    <p className='news_desc'>{this.limitWords(item.newsIntroduction, 120)}</p>
                                                    <p className='release'>{item.publishTime} | {item.newsSource}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                            {
                                !total || total === 0 ? '' :
                                    <div className='page'>
                                        <Pagination defaultCurrent={current} total={total} onChange={ (page) => { this.getPage(page)} } />
                                    </div>
                            }
                        </div>
                    </div>
                    <div className='right'>
                        <div className='QR_code'>
                            <div className='title'>关注我们</div>
                            <div className='QR_code_content'>
                                <div className='QR_code_img'><img alt='' src={gzhImg} /></div>
                                <div className='QR_code_desc'>
                                    <p className='desc_title'>雷霆应急网</p>
                                    <p className='desc_content'>雷霆应急网微信公众号</p>
                                </div>
                            </div>
                            <div className='title'>客户端</div>
                            <div className='QR_code_content'>
                                <div className='QR_code_img'><img alt='' src={yjwImg} /></div>
                                <div className='QR_code_desc'>
                                    <p className='desc_title'>雷霆应急网APP</p>
                                    <p className='desc_content'>应急行业专业门户</p>
                                </div>
                            </div>
                        </div>
                        {
                            adUrl.length && <div className='ad'>
                                <Carousel autoplay dots={false}>
                                    {
                                        adUrl.map((item,index) => {
                                            return(
                                                <a href={ this.jump(item.jumpLink) } target='_blank' key={index}>
                                                    <div>
                                                        <img alt='' src={item.picUrl} />
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        }
                        <MyBackTop />
                    </div>
            </div>
        )
    }

    // 搜索
    searchKeyWord = (value)=> {
        this.setState((prevState) => ({
            current: 1,
            total: 0,
            searchKeyWord: value,
            newsList: [],
        }),()=> {
            this.getSearchNews();
        });
    };
    // 翻页
    getPage = (page)=> {
        this.setState((prevState) => ({
            current: page,
            newsList: []
        }),()=> {
            this.getSearchNews();
        });
    };
    // 新闻字数限制
    limitWords= (Words,limit)=> {
        let length = Words.length;
        if( length > limit ){
            return Words.substring(0,limit)+"...";
        }
        return Words
    };
    // 输入框输入值
    inputChange = (e) => {
        let searchKeyWord = e.target.value;
        this.setState((prevState) => ({
            searchKeyWord
        }))
    };
    // 广告跳转
    jump = (url) => {
        if(!Boolean(url)) return;
        let newUlr = urlReg(url);
        return newUlr;
    }
}

export default newsSearch