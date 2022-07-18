import React, { useState, useEffect } from 'react';
import Introduce from '~/components/Banner/Introduce';
import { Link } from 'react-router-dom';
import './MyOrder.scss';
import { methodGet } from '~/Utils/Request';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { NotifyError, NotifySuccess } from '~/Utils/Notice';
import { Popconfirm } from 'antd';
export default function MyOrder() {
    const [quantity, setQuantity] = useState(1);
    const [listOder, SetListOrder] = useState([]);
    const handleConfirm = async (item) => {
        console.log('item', item);
        const result = await methodGet(`/order/cancel/${item?.orderId}`);
        if (result?.data) {
            NotifySuccess('Hủy thành công');
            getData();
        } else {
            NotifyError('Hủy thất bại' + result?.data?.message);
        }
    };
    const getData = async () => {
        const rs = await methodGet('/order/listOrder');
        if (!rs?.data) {
            NotifyError('Kiểm tra kết nối mạng');
        }
        console.log('get my order', rs?.data);
        SetListOrder(rs?.data);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Introduce title="Trang chủ" body={'Trang chủ / Giỏ hàng của tôi'} />
            <div className="container">
                {listOder &&
                    listOder?.map((item, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-md-12 col-sm-12">
                                    <form action="#">
                                        <div>
                                            <h1>
                                                Đơn hàng số {item?.orderId} , Thời gian mua : {item?.timemua}
                                            </h1>
                                            <Popconfirm
                                                onConfirm={() => {
                                                    handleConfirm(item);
                                                }}
                                                title="Xác nhận Hủy đơn hàng？"
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <a href="#">Hủy đơn hàng</a>
                                            </Popconfirm>
                                        </div>

                                        <div className="table-content table-responsive mb-45">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="product-thumbnail">Ảnh</th>
                                                        <th className="product-name">Tên sản phẩm</th>
                                                        <th className="product-price">Giá</th>
                                                        <th className="product-quantity">Số lượng mua</th>
                                                        <th className="product-subtotal">Tổng tiền</th>
                                                        <th className="product-remove">Tình trạng</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {item?.listoderDetail?.map((OrderDetail, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="product-thumbnail">
                                                                    <Link
                                                                        to={`/product-detail/${OrderDetail?.product?.id}`}
                                                                    >
                                                                        <img
                                                                            src={OrderDetail?.product?.image}
                                                                            alt="cart-image"
                                                                        />
                                                                    </Link>
                                                                </td>
                                                                <td className="product-name">
                                                                    <a href='"/#"'>{OrderDetail?.product?.name}</a>
                                                                </td>
                                                                <td className="product-price">
                                                                    <span className="amount">
                                                                        {OrderDetail?.product?.price} vnđ
                                                                    </span>
                                                                </td>
                                                                <td className="product-quantity">
                                                                    <input
                                                                        type="number"
                                                                        value={OrderDetail?.quantity}
                                                                    />
                                                                </td>
                                                                <td className="product-subtotal">
                                                                    {OrderDetail?.totalPrice} vnđ
                                                                </td>
                                                                <td className="product-remove">
                                                                    <a href='"/#"'>
                                                                        <i
                                                                            className="fa fa-check"
                                                                            aria-hidden="true"
                                                                        ></i>
                                                                        {OrderDetail?.status}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 col-sm-12">
                                                <div className="buttons-cart">
                                                    <Link to="/product">Tiếp tục mua sắm</Link>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        );
                    })}
                {listOder.length <= 0 ? <h1>Bạn chưa có đơn hàng nào hoặc đã hủy </h1> : ''}
            </div>
        </div>
    );
}
