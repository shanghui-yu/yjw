import Api from './api';

class UserApis extends Api {
    constructor(){
        super();
        this.config={
            source:1,
            clientId:1
        }
    }
    //获取验证码
    getCodeApi(phone){
        return this.getMes('/blade-user/member/codeApp',{phone});
    }
    //注册
    registerApi(data){
        return this.postMes('/blade-user/member/registryApp',{
            ...data,
            ...this.config
        })
    }
    //忘记密码
    forgetPassword(data){
        return this.postMes('/blade-user/member/forgetPassword',{
            ...data,
            ...this.config
        })
    }
    //账号密码登录
    firstLogin(data){
        return this.postMes('/blade-user/member/login',{
            ...data,
            ...this.config
        })
    }
    //手机号登录
    phoneLogin (data) {
        return this.postMes('/blade-user/member/loginCode',{
            ...data,
            ...this.config
        })
    }
}

export default new UserApis();