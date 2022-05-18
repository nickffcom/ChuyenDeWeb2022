import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <img className="logo1" src="images/logo1.png" alt="#" />
                            <ul className="social_icon">
                                <li>
                                    <a href="fb.com/noname2d">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="fb.com/noname2d">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="fb.com/noname2d">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="fb.com/noname2d">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <h3>Về chúng tôi</h3>
                            <ul className="about_us">
                                <li>
                                    dolor sit amet, consectetur
                                    <br /> magna aliqua. Ut enim ad <br />
                                    minim veniam, <br /> quisdotempor incididunt r
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <h3>Liên hệ</h3>
                            <ul className="conta">
                                <li>
                                    dolor sit amet,
                                    <br /> consectetur <br />
                                    magna aliqua.
                                    <br /> quisdotempor <br />
                                    incididunt ut e{' '}
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <form className="bottom_form">
                                <h3>Đăng ký để nhận các thông tin ưu đãi</h3>
                                <input
                                    className="enter"
                                    placeholder="Enter your email"
                                    type="text"
                                    name="Enter your email"
                                />
                                <button className="sub_btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>
                                    © 2022 design and develop by @Project CD Web Nông Lâm 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
