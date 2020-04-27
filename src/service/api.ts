import $ajax from "fetch";

export default class Api {
  private commonGet(
    url: string,
    data: {},
    mes: boolean,
    options: {}
  ): Promise<any> {
    return $ajax(url, data, "get", mes, options);
  }
  private commonPost(
    url: string,
    data: {},
    mes: boolean,
    options: {}
  ): Promise<any> {
    return $ajax(url, data, "post", mes, options);
  }
  //无消息提示的get请求
  public get(url: string, data = {}, options = {}): Promise<any> {
    return this.commonGet(url, data, false, options);
  }
  //有消息提示的get请求
  public getMes(url: string, data = {}, options = {}): Promise<any> {
    return this.commonGet(url, data, true, options);
  }
  //无消息提示的post请求
  public post(url: string, data = {}, options = {}): Promise<any> {
    return this.commonPost(url, data, false, options);
  }
  //有消息提示的post请求
  public postMes(url: string, data = {}, options = {}): Promise<any> {
    return this.commonPost(url, data, true, options);
  }
}
