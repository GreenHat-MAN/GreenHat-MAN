import React, {Component, Suspense , lazy} from 'react';
import {HashRouter as  Hash , BrowserRouter as History , Routes ,Route , Navigate , useRoutes,Outlet , useNavigate ,useParams,  useSearchParams  ,useLocation, Link ,NavLink   } from "react-router-dom";
class RouterIndex extends Component {
    render() {
        return (
            <div>
                <h2>React路由学习</h2>
                <hr/>
                <MyRouter></MyRouter>
            </div>
        );
    }
}

class MyRouter extends Component{
    render() {
        return(
            <div>
                <History>
                    <MainRouter></MainRouter>
                </History>
            </div>
        )
    }
}


class MainRouter extends Component{
    render() {
        return(
            <div style={{width:'80%',height:"auto",minHeight:400,padding:15,margin:15,borderRadius:10,border:"1px solid #ddd"}}>
                <Suspense fallback={<h1>loading(加载中)....</h1>}>
                    <GetRoutes></GetRoutes>
                </Suspense>
            </div>
        )
    }
}

//路由表
const GetRoutes=()=>{
    return useRoutes(
        [
            {
                path:'/',
                element:<LayOut></LayOut>,
                children:[
                    {path:'/',element:<Navigate to={'/mine'}/>},
                    {path:'/home/:title',element:<Home></Home>},
                    {path:'/find',element:<Find></Find>},
                    {path:'/goods',element:<Goods></Goods>},
                    {path:'list',element:<List></List>},
                    {path:'/mine',element:<Mine></Mine>},
                    {path:'/user',element:<User></User>}
                ]
            },
            {path:'/guide',element:<Guide></Guide>},
            {path:'/login',element:<Login></Login>},
            {path:'/register',element:<Register></Register>},
            {path:'/findpass',element:<FindPass></FindPass>},
            {path:'/503',element:<BadService></BadService>},
            {path:'/404',element:<NotFound></NotFound>},
            {path:'*',element:<Navigate to={'/404'}/>}
        ]
    )
}


const LayOut = ()=>{
    return(
        <div>
            <h3>主视图</h3>
            <hr/>
            {/*子路由出口*/}
            <Outlet></Outlet>
            <div style={{width:'80%',height:"auto",minHeight:100,padding:15,marginTop:320,borderRadius:10,border:"1px solid orange"}}>
                <NavLink to={'/home/我是首页传递的标题?msg=001'}>首页</NavLink>
                <NavLink to={'/find'}>发现</NavLink>
                <NavLink to={'/goods'}>商品</NavLink>
                <NavLink to={'/list'}>列表</NavLink>
                <NavLink to={'/mine'}>我的</NavLink>
                <NavLink to={'/user'}>用户</NavLink>
            </div>
        </div>
    )
}

class List extends Component{
    render(){
        return (
            <div>
                <h2> List - List - List 列表 </h2>
            </div>
        )
    }
}

const UserAction = ()=>{
    return (
        <div>
            <h2>UserAction - UserAction - 用户分析 </h2>
        </div>
    )
}

const UserList = ()=>{
    return (
        <div>
            <h2>UserList - UserList - 用户列表 </h2>
        </div>
    )
}

const UserSet = ()=>{
    return (
        <div>
            <h2>UserSet - UserSet - 用户设置  </h2>
        </div>
    )
}


const User = () =>{
    return(
        <div>
            <h2>用户信息 - User - User </h2>
        </div>
    )
}


const Mine = () =>{
    return(
        <div>
            <h2>Mine - Mine - 个人中心</h2>
        </div>
    )
}


const Find = () =>{
    return(
        <div>
            <h2>Find - FInd - 发现美丽</h2>
        </div>
    )
}

const Goods = () =>{
    return(
        <div>
            <h2>Good - Good - 商品列表</h2>
        </div>
    )
}

const FindPass = ()=>(
    <div>
        <h2>FindPass - FindPass - 找回密码 </h2>
    </div>
)

const BadService = ()=>{
    return (
        <div>
            <h2>503 - 503 - BadService </h2>
        </div>
    )
}

const NotFound = ()=>{
    return (
        <div>
            <h2>404 - 404 - NotFound </h2>
        </div>
    )
}

class Login extends Component{
    render(){
        return (
            <div>
                <h2> Login - Login - 登录 </h2>
            </div>
        )
    }
}

class Register extends Component{
    render(){
        return (
            <div>
                <h2> Register - Register - 注册 </h2>
            </div>
        )
    }
}

function Home() {
    const params = useParams()
    const [query,qs] = useSearchParams()
    return(
        <div>
            {/*首页*/}
            <h2>Home - Home - Home </h2>
            <h2>标题:{params.title}</h2>
            <h2>信息:{query.get('msg')}</h2>
        </div>
    )
}


function Guide(){
    return(
        <div>
            <h2>初始广告页</h2>
        </div>
    )
}

export default RouterIndex;