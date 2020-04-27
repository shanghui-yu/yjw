import React, { Component, Suspense, Fragment } from "react";
import { Link } from "react-router-dom";
import { Connect } from "hoc/Connect";
import { urlReg } from "utils/base";
import { Carousel, Modal } from "antd";
import MyBackTop from "components/MyBackTop";
import "sass/detail/style.scss";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      typeList: [],
      // newsDetail: {},
      // recommendList: [],
      // newestRecommendNews: [],
      // adUrl: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
    window.scrollTo(0, 0);
    console.log(this.props)
    this.props.getDetailData(this.props.match.params.id);
  }

  render() {
    const {
      newsDetail,
      recommendList,
      newestRecommendNews,
      adUrl,
      navName,
    } = this.props;
    return (
      <div className="detail">
        <div className="header">
          当前位置：
          <Link to={`/news/${newsDetail.newsCategory}`}>
            <span className="default_font">{navName}</span>
          </Link>{" "}
          > <span className="nav_font">详情</span>
        </div>
        <div className="left">
          {newsDetail && (
            <Fragment>
              <div className="title">{newsDetail.newsTitle}</div>
              <div className="channel">
                来源：{newsDetail.newsSource}
                {newsDetail.newsAuthor && (
                  <span className="font_margin">
                    作者：{newsDetail.newsAuthor}{" "}
                  </span>
                )}
                <span className="font_margin">
                  发布时间：{newsDetail.publishTime}{" "}
                </span>
              </div>
              {newsDetail.newsTranscriptTitle && (
                <div className="subtitle">{newsDetail.newsTranscriptTitle}</div>
              )}
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: decodeURIComponent(newsDetail.newsContent),
                }}
              ></div>
              <div className="bottom_bar">
                <p className="editor">责任编辑：{newsDetail.newsEditer}</p>
                <p className="report">
                  <span onClick={this.showModal}>
                    <img alt="" src={require("imgs/detail/report.png")} />
                    举报
                  </span>
                </p>
                <Modal
                  title="侵权举报"
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                  footer={null}
                >
                  <p>若您发现该内容涉及到侵权行为，请与我司联系！</p>
                  <p>联系电话：0755-22222222</p>
                  <p>举报邮箱：editor@86yingji.com</p>
                </Modal>
              </div>
              <div className="disclaimer">
                免责声明：
                本网站所刊载信息，不代表雷霆观点。刊用本站稿件，务经书面授权。未经授权禁止转载、摘编、复制、翻译及建立镜像，违者将依法追究法律责任。
              </div>
            </Fragment>
          )}
          <div className="recommend">
            {recommendList && (
              <Fragment>
                <div className="section">| 推荐新闻</div>
                {recommendList &&
                  recommendList.map((item) => {
                    if (item.imgUrl) {
                      return (
                        <Link
                          to={`/home/detail/${item.id}`}
                          target="_blank"
                          key={item.id}
                        >
                          <div className="news_list">
                            <div className="news_img">
                              <img alt="" src={item.imgUrl} />
                            </div>
                            <div className="news_content">
                              <p className="news_title">
                                {this.limitWords(item.newsTitle, 35)}
                              </p>
                              <p className="news_desc">
                                {this.limitWords(item.newsIntroduction, 90)}
                              </p>
                              <p className="release">{item.publishTime}</p>
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
                              <p className="release">{item.publishTime}</p>
                            </div>
                          </div>
                        </Link>
                      );
                    }
                  })}
              </Fragment>
            )}
          </div>
        </div>
        <div className="right">
          {newestRecommendNews && (
            <Fragment>
              <div className="section">| 最新发布</div>
              <ul className="latest_news">
                {newestRecommendNews &&
                  newestRecommendNews.map((item) => {
                    return (
                      <Link
                        to={`/home/detail/${item.id}`}
                        target="_blank"
                        key={item.id}
                      >
                        <li>
                          <i className="point" />
                          {this.limitWords(item.newsTitle, 36)}
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </Fragment>
          )}
          {!!adUrl.length && (
            <div className="ad">
              <Carousel autoplay dots={false}>
                {adUrl.map((item, index) => {
                  return (
                    <a
                      href={this.jump(item.jumpLink)}
                      target="_blank"
                      key={index}
                    >
                      <div>
                        <img alt="" src={item.picUrl} />
                      </div>
                    </a>
                  );
                })}
              </Carousel>
            </div>
          )}
          <MyBackTop />
        </div>
      </div>
    );
  }

  // 新闻字数限制
  limitWords = (Words, limit) => {
    let length = Words.length;
    if (length > limit) {
      return Words.substring(0, limit) + "...";
    }
    return Words;
  };
  // 显示举报弹框
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  // 取消弹框
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };
  // 广告跳转
  jump = (url) => {
    if (!Boolean(url)) return;
    let newUlr = urlReg(url);
    return newUlr;
  };
}


export default Connect({
  name:'detailStore',
  //need:[],
  func:['getDetailData']
},Detail)


