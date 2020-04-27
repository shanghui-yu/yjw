import instance from "./confing";
import message from "components/Mes";

/**
 *  @params {Object} data
 * @params { number } mes
 *  default 0
 *  0====不显示提示消息 1===显示
 *  */
function fetch(url, data, methods, mes, options) {
  return new Promise((resolve, reject) => {
    let obj;
    if (methods == "get") {
      obj = {
        params: data
      };
    } else {
      obj = data;
    }
    instance[methods](url, obj, options)
      .then(({ data }) => {
        if (data.code === 200 || data.success) {
          if (mes) message("success", data.msg);
          resolve(data);
        } else if (data.code === 400) {
          if (mes) message("warning", data.msg);
          reject();
        }
      })
      .catch(err => {
        //let nowUrl=window.location.href;
        //window.location.href=`${nowUrl}/error`
        message("warning", "服务器忙，请稍后再试");
        reject();
      });
  });
}

export default fetch;
