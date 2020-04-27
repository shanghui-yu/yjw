import React,{ useEffect ,useState } from 'react';
import { getScrollTop ,wechatEwm } from 'utils/base';
import 'sass/MyBackTop.scss';

export default function MyBackTop(){
    const [flag,newFlag] = useState(true); //scroll函数的节流阀,防止开启多个定时器
    const [show,newShow] = useState(false); //是否需要显示该组件

    useEffect(()=>{
        window.addEventListener('scroll',getTopNumber);
        return ()=> window.removeEventListener('scroll',getTopNumber);
    },[])

    //监听页面的滚动距离
    function getTopNumber () {
        let top=getScrollTop();
        if(top>=200) {
            newShow(true);
        }else {
            newShow(false);
        }
    }

    //通过计时器，实现滚动动画
    function backTop () {
        if(!flag) return;
        newFlag(flag);
        let basic=100,
            top=getScrollTop();
        let timer=setInterval(()=>{
            top-=basic;
            if(top <= basic ){
                top=0;
                roll(top);
                newFlag(true);
                clearInterval(timer);
            }else {
                roll(top);
            }
        },10);
    }

    function roll (number){
        document.body.scrollTop=number;
        document.documentElement.scrollTop =number;
    }

    return(
        <div className={`MyBackTop-box ${show?'':'fadeOut'} `}>
            <div className='MyBackTop-top' onClick={ backTop } ></div>
            <div className='MyBackTop-bottom'>
                <img  src={wechatEwm} />
                <h6>官方微信</h6>
            </div>
        </div>
    )
}