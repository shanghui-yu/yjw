import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import http from "service/news";
import { urlReg } from "utils/base";
import { Carousel } from "antd";
import MyBackTop from "components/MyBackTop";
import "sass/news/style.scss";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperList: [],
      typeList: [],
      typeActive: this.props.match.params.type,
      size: 10,
      current: 1,
      total: 0,
      newsList: [],
      newestNews: [],
      adUrl: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getSwiperList();
    this.getTypeList();
    this.getNewsList("list");
    this.getNewestNews();
  }
  getSwiperList = async () => {
    const data = {
      appId: "yjw",
      clientId: 1,
      showPos: 6,
      language: "cn"
    };
    let swiperData = await http.getSwiperList(data);
    let swiperList = swiperData.records;
    this.setState({ swiperList });
  };
  getTypeList = async () => {
    if (!sessionStorage.getItem("typeList")) {
      const typeList = await http.getNewsType();
      this.setState({ typeList });
      sessionStorage.setItem("typeList", JSON.stringify(typeList));
    } else {
      const typeList = JSON.parse(sessionStorage.getItem("typeList"));
      this.setState({ typeList });
    }
  };
  getNewestNews = async () => {
    let newestNewsData = await http.getNewestNews();
    let newestNews = newestNewsData.newestNews;
    let adUrl = newestNewsData.adUrl;
    this.setState({ newestNews, adUrl });
  };
  getNewsList = async tab => {
    const { typeActive, current, size } = this.state;
    const query = {
      current,
      size,
      newsCategory: typeActive
    };
    let newsData = await http.getNewsList(query);
    // console.log(newsData);
    let newsList = newsData.records;
    let total = newsData.total;
    if (tab === "tab") {
      this.setState({
        newsList: []
      });
    }
    this.setState(prevState => ({
      newsList: [...prevState.newsList, ...newsList],
      total
    }));
  };
  render() {
    const {
      swiperList,
      typeList,
      typeActive,
      newsList,
      total,
      current,
      size,
      newestNews,
      adUrl
    } = this.state;
    return (
      <div className="news">
        <div className="left">
          <div className="swiper">
            {swiperList.length > 1 && (
              <Fragment>
                <img
                  className="swiper_left"
                  onClick={() => {
                    this.refs.swiper.prev();
                  }}
                  alt=""
                  src={require("imgs/news/left.png")}
                />
                <img
                  className="swiper_right"
                  onClick={() => {
                    this.refs.swiper.next();
                  }}
                  alt=""
                  src={require("imgs/news/right.png")}
                />
              </Fragment>
            )}
            {swiperList.length && (
              <Carousel autoplay ref="swiper">
                {
                  swiperList.map(item => {
                    return (
                      <a
                        href={this.jump(item.jumpLink)}
                        target="_blank"
                        key={item.id}
                      >
                        <div>
                          <img alt="" src={item.picUrl} />
                        </div>
                      </a>
                    );
                  })}
              </Carousel>
            )}
          </div>
          <div className="recommend">
            <ul className="option_bar">
              {typeList &&
                typeList.map(item => {
                  return (
                    <li
                      className={+typeActive === item.type ? "active" : ""}
                      onClick={this.changeType.bind(this, item.type)}
                      key={item.type}
                    >
                      {item.description}
                    </li>
                  );
                })}
            </ul>
            {newsList &&
              newsList.map((item, index) => {
                if (item.coverUrl) {
                  return (
                    <Link
                      to={`/home/detail/${item.id}`}
                      target="_blank"
                      key={item.id}
                    >
                      <div className="news_list">
                        <div className="news_img">
                          <img alt="" src={item.coverUrl} />
                        </div>
                        <div className="news_content">
                          <p className="news_title">
                            {this.limitWords(item.newsTitle, 35)}
                          </p>
                          <p className="news_desc">
                            {this.limitWords(item.newsIntroduction, 90)}
                          </p>
                          <p className="release">
                            {item.publishTime} | {item.newsSource}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      to={`/home/detail/${item.id}`}
                      target="_blank"
                      key={item.id}
                    >
                      <div className="news_list">
                        <div className="news_content_noImg">
                          <p className="news_title">
                            {this.limitWords(item.newsTitle, 50)}
                          </p>
                          <p className="news_desc">
                            {this.limitWords(item.newsIntroduction, 120)}
                          </p>
                          <p className="release">
                            {item.publishTime} | {item.newsSource}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            {this.pageTotal(total, size) === current || total === 0 ? (
              <div className="more">我也是有底线的~</div>
            ) : (
              <div onClick={this.hanldMoreClick.bind(this)} className="more">
                加载更多......
              </div>
            )}
          </div>
        </div>
        <div className="right">
          <div className="section">| 最新发布</div>
          <ul className="latest_news">
            {newestNews &&
              newestNews.map(item => {
                return (
                  <Link to={`/home/detail/${item.id}`} target="_blank" key={item.id}>
                    <li>
                      <i className="point" />
                      {this.limitWords(item.newsTitle, 36)}
                    </li>
                  </Link>
                );
              })}
          </ul>
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
    );
  }
  // 切换新闻栏目
  changeType = (type, e) => {
    this.setState(
      {
        typeActive: type,
        current: 1
      },
      () => {
        this.getNewsList("tab");
      }
    );
  };
  // 加载更多
  hanldMoreClick = () => {
    this.setState(
      prevState => ({
        current: prevState.current + 1
      }),
      () => {
        this.getNewsList("more");
      }
    );
  };
  // 总数量转化成总页数
  pageTotal = (rowCount, pageSize) => {
    if (rowCount == null || rowCount == "") {
      return 0;
    } else {
      if (pageSize != 0 && rowCount % pageSize == 0) {
        return parseInt(rowCount / pageSize);
      }
      if (pageSize != 0 && rowCount % pageSize != 0) {
        return parseInt(rowCount / pageSize) + 1;
      }
    }
  };
  // 新闻字数限制
  limitWords = (Words, limit) => {
    let length = Words.length;
    if (length > limit) {
      return Words.substring(0, limit) + "...";
    }
    return Words;
  };
  // 广告跳转
  jump = url => {
    if (!Boolean(url)) return;
    let newUlr = urlReg(url);
    return newUlr;
  };
}

export default News;
