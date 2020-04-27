//消息提示
import { message } from 'antd'

message.config({
  duration: 1.5,
  maxCount: 1,
});

//type MesType = "success" | "error" | "info" | "warning" | "warn" | "loading"
const mes = (type='warning',content) => message[type](content)


export default mes;