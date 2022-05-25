import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate=useNavigate();
    const [keywork,setKeyWork]=useState('');
    console.log("keywork la",keywork);
    useEffect(() => {

        
        (keywork)?navigate(`/search/${keywork}`):navigate('/');
        // if(keywork){
        //     navigate(`/search/${keywork}`);
        // }else{
        //     navigate('/');
        // }
    }, [keywork]);

    return (
        // <header>
           
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <Link to='/'>
                                            <img src="images/logo.png" alt="#" />
                                        </Link>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarsExample04"
                                    aria-controls="navbarsExample04"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link to='/' className='nav-link'>
                                                Trang chủ   
                                            </Link>
                                         
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/product'>
                                                Cửa Hàng
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/contact' className="nav-link" >
                                                    Liên Hệ
                                            </Link>
                                           
                                       
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/info-shop">
                                                Thông tin cửa hàng 
                                            </Link>
                                           
                                        </li>

                                        <li className="nav-item d_none haha">
                                            <input value={keywork} onChange={(e)=>{setKeyWork(e.target.value)}} className='search-input'/>
                                            <div className="nav-link nav-search">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </div>
                                        </li>
                                        <li className="nav-item d_none">
                                            <Link className="nav-link" to="/login">
                                                Đăng Nhập
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        // </header>
    );
}
