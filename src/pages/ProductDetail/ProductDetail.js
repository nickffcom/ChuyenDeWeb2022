import React from 'react';
import { Col, Divider, Form, InputNumber, Rate, Row, Space } from 'antd';

import '~/pages/ProductDetail/ProductDetail.scss';
import Introduce from '~/components/Banner/Introduce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcaseClock,
    faFaceAngry,
    faFaceDizzy,
    faFaceGrinHearts,
    faFaceGrinTears,
    faHeart,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { Radio, Button } from 'antd';
import Mgtop from '~/components/MgTop/Mgtop';
import { Link, Routes, Route } from 'react-router-dom';
import MoreInformation from '~/components/ProductDetail/MoreInformation';
import Vote from '~/components/ProductDetail/Vote';
import Description from '~/components/ProductDetail/Description';
import SwiperCustom from '~/components/SwiperCustom.js/SwiperCustom';
import Avatar from '~/components/Avatar/Avatar'
import Footer from '~/components/Footer/Footer';
export default function ProductDetail() {
    const onFinish = (values) => {
        console.log(values);
    };
    const initialValue = {
        amount: 1,
        mausac: 'xanh',
    };
    return (
        <>
            <Introduce title="Chi tiết sản phẩm" body="Trang chủ / Chi tiết sản phẩm" />
            {/* <Mgtop/> */}
            <div className="container">
                <Row gutter={5}>
                    <Col xs={24} sm={24} md={10} lg={10} xxl={10}>
                        <div className="img-product">
                            <img src="images/about.jpg" alt="Image Product Load Failed" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14} xxl={14}>
                        <Form onFinish={onFinish} initialValues={initialValue}>
                            <Space direction="vertical" size="small">
                                <div className="product_detail">
                                    <h1 className="title">
                                        Quần Kaki bé trai cạp thun 100% cotton <span className="Price">2990k</span>
                                    </h1>
                                    <div className="vote">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>

                                    <h3 className="description">
                                        Quần khaki dáng regular cạp chung, có túi chéo 2 bên
                                    </h3>
                                    <div className="stt">
                                        <p className="">
                                            Tình trạng : <span className="status">Còn hàng</span>
                                        </p>
                                    </div>
                                    {/* <Form onFinish={onFinish} initialValues={initialValue}> */}
                                    <Space size="large">
                                        <Form.Item
                                            label="Số lượng"
                                            name="amount"
                                            rules={[{ type: 'number', max: 10, min: 1, required: true }]}
                                        >
                                            <InputNumber />
                                            <Form.Item name="mausac" label="Màu sắc" rules={[{ required: true }]}>
                                                <Radio.Group>
                                                    <Radio value="trang">Trắng</Radio>
                                                    <Radio value="xanh">Xanh</Radio>
                                                    <Radio value="den">Đen</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Form.Item>
                                    </Space>
                                    <Form.Item wrapperCol={{ span: 1, offset: 2 }}>
                                        <Button type="danger" htmlType="submit">
                                            Thêm vào giỏ hàng{' '}
                                            <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faHeart} />
                                        </Button>
                                    </Form.Item>
                                    <div className="product_social">
                                        <span className="title">Chia sẻ </span>
                                        <div className="product_social_icon">
                                            <FontAwesomeIcon icon={faBriefcaseClock} />
                                            <FontAwesomeIcon icon={faFaceAngry} />
                                            <FontAwesomeIcon icon={faFaceGrinHearts} />
                                            <FontAwesomeIcon icon={faFaceGrinTears} />
                                        </div>
                                    </div>
                                </div>
                            </Space>
                        </Form>
                    </Col>
                </Row>
                <Divider style={{ backgroundColor: '#c3c3c3' }}></Divider>
                <Link to="/product_detail/themthongtin">Thêm thông tin</Link>
                <Link to="/product_detail/mieuta">Miêu tả</Link>
                <Link to="/product_detail/danhgia">Đánh giá</Link>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24}></Col>
                    <Routes>
                        <Route path="/product_detail/themthongtin" element={<MoreInformation />}></Route>
                        <Route path="/product_detail/mieuta" element={<Description />}></Route>
                        <Route path="/product_detail/danhgia" element={<Vote />}></Route>
                    </Routes>
                </Row>
                <Row>
                    <Col>
                        <div className="relative">
                            <h1 className="relative-title">Sản phẩm liên quan</h1>

                            <SwiperCustom />
                        </div>
                    </Col>
                </Row>
                <Mgtop/>
                <Row gutter={10}>
                    <Col xs={8} sm={8} md={8} lg={4} xxl={4} >
                    <Avatar src='./images/about.jpg'/>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={4} xxl={4} >
                    <Avatar src='./images/about.jpg'/>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={4} xxl={4} >
                    <Avatar src='./images/about.jpg'/>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={4} xxl={4} >
                    <Avatar src='./images/about.jpg'/>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={4} xxl={4} >
                    <Avatar src='./images/about.jpg'/>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={4} xxl={4} >
                    <Avatar src='./images/about.jpg'/>
                    </Col>
                </Row>
            </div>
            <Mgtop/>
            <Footer/>
        </>
    );
}
