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
                        <Route path='/product' element={<NotFound/>}/>
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
