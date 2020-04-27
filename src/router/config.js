import React from 'react';
const RootHome = React.lazy(() => import("pages/RootHome"));
const User = React.lazy(() => import("pages/User"));
const Home = React.lazy(() => import("pages/Home"));
const News = React.lazy(() => import("pages/News"));

const Detail = React.lazy(() => import("pages/Detail"));
const newsSearch = React.lazy(() => import("pages/Search"));
const Login = React.lazy(() => import("pages/User/Login"));
const Register = React.lazy(() => import("pages/User/Register"));
const ForGetPwd = React.lazy(() => import("pages/User/ForGetPwd"));
const NewPage = React.lazy(() => import("pages/NewPage")); // 做的一个静态页面，以后要去掉的，随便搞一下

const Stands = React.lazy(() => import("pages/stands")); //行业智酷
const ChanPinTuPu = React.lazy(() => import("pages/stands/chanpintupu")); //产品图库
const ChanPinTuPuDetail = React.lazy(() => import("pages/stands/chanpintupuDetail")); //产品图库
const WeiKeTang = React.lazy(() => import("pages/stands/weiketang")); //微课堂
const WeiketangList = React.lazy(() => import("pages/stands/weiketangList")); //微课堂列表
const WeiketangDetail = React.lazy(() => import("pages/stands/weiketangDetail")); //微课堂详情
const YanJiuBaoGao = React.lazy(() => import("pages/stands/yanjiubaogao")); //研究报告
const YanJiuBaogaoList = React.lazy(() => import("pages/stands/yanjiubaogaoList")); //研究报告列表
const YanJiuBaogaoDetail = React.lazy(() => import("pages/stands/yanjiubaogaoDetail")); //研究报告详情

const UserInfo = React.lazy(() => import("pages/UserInfo")); //个人中心
const My = React.lazy(() => import("pages/UserInfo/My")); //个人中心信息
const MyManage = React.lazy(() => import("pages/UserInfo/MyManage")); //个人中心信息
const MySet = React.lazy(() => import("pages/UserInfo/MySet")); //个人中心信息
const EditPhone = React.lazy(() => import("pages/UserInfo/EditPhone")); //个人中心信息

//品牌展厅
const ExhibitionHall = React.lazy(() => import("pages/ExhibitionHall"));
const ExhibitionHallHome = React.lazy(() => import("pages/ExhibitionHall/Home")); //品牌展厅
const ExhibitionHallList = React.lazy(() => import("pages/ExhibitionHall/List")); //产品列表

const routers =[
    {
        path:'/',
        redirect: "/home"
    },
    {
        path:'/home',
        component:RootHome,
        children:[
            {
                path:'/home',
                component:Home,
                exact: true
            } ,
            {
                path:'/home/news/:type',
                component:News, 
            } ,
            {
                path:'/home/detail/:id',
                component:Detail, 
            },
            {
                path:'/home/search/:keyWord',
                component:newsSearch, 
            },
            {
                path:'/home/brandHall',
                component:NewPage, 
            }
        ]
    },
    {
        path:'/user',
        component:User,
        children:[
            {
                path:'/user',
                redirect: "/user/login"
            },
            {
                path:'/user/login',
                component:Login, 
            },
            {
                path:'/user/register',
                component:Register, 
            },
            {
                path:'/user/forget',
                component:ForGetPwd, 
            }
        ],
    },
    {
        path: '/stands',
        component: Stands,
        children: [
            {
                path: '/stands',
                redirect: "/stands/chanpintupu"
            },
            {
                path: '/stands/chanpintupu',
                component: ChanPinTuPu,
            },
            {
                path: '/stands/chanpintupuDetail',
                component: ChanPinTuPuDetail,
            },
            {
                path: '/stands/yanjiubaogao',
                component: YanJiuBaoGao
            },
            {
                path: '/stands/yanjiubaogaoList/:type',
                component: YanJiuBaogaoList
            },
            {
                path: '/stands/yanjiubaogaoDetail',
                component: YanJiuBaogaoDetail
            },
            {
                path: '/stands/weiketang',
                component: WeiKeTang
            },
            {
                path: '/stands/weiketangList',
                component: WeiketangList
            },
            {
                path: '/stands/weiketangDetail',
                component: WeiketangDetail
            }
        ],
    },
    {
        path:'/exhibitionHall',
        component:ExhibitionHall,
        children:[
            {
                path: '/exhibitionHall',
                redirect: "/exhibitionHall/home"
            },
            {
                path:'/exhibitionHall/home',
                component:ExhibitionHallHome,
            },
            {
                path: '/exhibitionHall/list',
                component: ExhibitionHallList,
            }
        ]
    },
    //针对个人中心，需要生成路由列表的navLink,所以新增了key和title两个字段
    {
        path: '/userInfo',
        component: UserInfo,
        children: [
            {
                path: '/userInfo',
                redirect: "/userInfo/me"
            },
            {
                path: '/userInfo/me',
                component: My,
                key: "userInfo",
                title:'首页'
            },
            {
                path: '/userInfo/myManage',
                component: MyManage,
                key: "information",
                title:'会员信息管理',
            },
            
            {
                path: '/userInfo/mySet',
                component: MySet,
                key: "information",
                title:'账户设置',
            },
            {
                path: '/userInfo/editPhone',
                component: EditPhone,
            },
        ],
    }
];

export default routers;