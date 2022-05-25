import '~/Global.scss';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import Info_shop from './pages/Info_shop/Info_shop';
import Header from './components/Header/Header';
import Mgtop from './components/MgTop/Mgtop';
import SingnUp from './pages/SignUp/SingnUp';
import Account_info from './pages/Account_info/Account_info';
import Product from './pages/Product/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import React from 'react';
import Search from './pages/Search/Search';
export default function App() {
    return (
        <BrowserRouter>
        <div className='app'>
            <div className='main-layout'>
                    <div className="loader_bg">
                        <div className="loader">
                            <img src="images/loading.gif" alt="#" />
                        </div>
                    </div>
                    <Header/>
                    <Mgtop/>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/signUp' element={<SingnUp/>}/>
                        <Route path='/search/:keywork' element={<Search/>}/>
                        <Route path='/account_info' element={<Account_info/>}/>
                        <Route exact path='/product_detail' element={<ProductDetail/>}/>
                        <Route path='/product' element={<Product/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/info-shop' element={<Info_shop/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}
