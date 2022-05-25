import React from 'react';
import './SlideBar.scss';
export default function SlideBar() {
    return (
        <div className="slidebar">
            <h2 className="slidebar-title">Tổng quan</h2>
            <div id="shop-cate-toggle" className="category-menu sidebar-menu sidbar-style">
                <ul>
                    <li className="has-sub">
                        <a href="#">Dành cho Nam</a>
                        <ul className="category-sub">
                            <li>
                                <a href="cart.html">Áo ( Len, Khoác,Phông ,Sơ mi)</a>
                            </li>
                            <li>
                                <a href="shop.html">Quần(Kaki, Jean)</a>
                            </li>
                            <li>
                                <a href="shop.html">Combo(Ngẫu nhiên)</a>
                            </li>
                        </ul>
                        {/* <!-- category submenu end--> */}
                    </li>
                    <li className="has-sub">
                        <a href="#">Dành cho nữ</a>
                        <ul className="category-sub">
                            <li>
                                <a href="cart.html">Áo( Ni,Khoác,Len )</a>
                            </li>
                            <li>
                                <a href="shop.html">Quần</a>
                            </li>
                            <li>
                                <a href="shop.html">Váy Liền</a>
                            </li>
                            <li>
                                <a href="shop.html">Combo ngẫu nhiên</a>
                            </li>
                        </ul>
                        {/* <!-- category submenu end--> */}
                    </li>
                    <li className="has-sub">
                        <a href="#">Dịch Vụ</a>
                        <ul className="category-sub">
                            <li>
                                <a href="shop.html">Cho Vay Trả Góp</a>
                            </li>
                            <li>
                                <a href="shop.html">Đăng Kí Bảo Hiểm Xe</a>
                            </li>
                            <li>
                                <a href="shop.html">Làm Biển Số Theo Tỉnh</a>
                            </li>
                            <li>
                                <a href="shop.html"></a>
                            </li>
                        </ul>
                        {/* <!-- category submenu end--> */}
                    </li>
                    <li className="has-sub">
                        <a href="#">Tin Tức Khuyến Mãi</a>
                        <ul className="category-sub">
                            <li>
                                <a href="shop.html">Khuyến Mãi Mới Nhất</a>
                            </li>
                            <li>
                                <a href="shop.html">Sale 30% Nhân Sự Kiện 20/10</a>
                            </li>
                            <li>
                                <a href="shop.html">Giờ Vàng, Mua Xe trả góp Giá 0d</a>
                            </li>
                            <li>
                                <a href="shop.html"></a>
                            </li>
                        </ul>
                        {/* <!-- category submenu end--> */}
                    </li>
                </ul>
            </div>
        </div>
    );
}
