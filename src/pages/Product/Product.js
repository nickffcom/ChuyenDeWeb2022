import React from 'react';
import Introduce from '~/components/Banner/Introduce';
import { Row, Col } from 'antd';
import SlideBar from '~/components/Products/SlideBar/SlideBar';
import ProductItem from '~/components/Products/ProductItem/ProductItem';
import Paging from '~/components/Paging/Paging';
export default function Product() {
    return (
        <div>
            <Introduce title="Trang chủ" body={'Trang chủ / Danh sách sản phẩm'} />
            <div className="container">
                <Row>
                    <Col xs={8} sm={8} md={8} lg={8} xxl={8}>
                        <SlideBar />
                    </Col>

                    <Col xs={16} m={16} md={16} lg={16} xxl={16}>
                        <Row gutter={20}>
                            <Col xs={12} m={12} md={8} lg={8} xxl={8}>
                                <ProductItem />
                            </Col>
                            <Col xs={12} m={12} md={8} lg={8} xxl={8}>
                                <ProductItem />
                            </Col>
                            <Col xs={12} m={12} md={8} lg={8} xxl={8}>
                                <ProductItem />
                            </Col>
                            <Col xs={12} m={12} md={8} lg={8} xxl={8}>
                                <ProductItem />
                            </Col>
                            <Col xs={12} m={12} md={8} lg={8} xxl={8}>
                                <ProductItem />
                            </Col>
                            <Col xs={12} m={12} md={8} lg={8} xxl={8}>
                                <ProductItem />
                            </Col>
                            <Col xs={12} m={12} md={8} lg={8} xxl={8}>
                                <ProductItem />
                            </Col>
                            <Col xs={12} m={12} md={8} lg={8} xxl={8}>
                                <ProductItem />
                            </Col>
                            <Col xs={12} m={12} md={8} lg={8} xxl={8}>
                                <ProductItem />
                            </Col>
                            <Col span={24}>
                                <Paging size={80} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            {console.log('product neeee')}
        </div>
    );
}
