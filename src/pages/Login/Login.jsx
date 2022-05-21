import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Form, Input, Button, Checkbox } from 'antd';
import Info from '~/components/Banner/Info';
import Mgtop from '~/components/MgTop/Mgtop';
import Introduce from '~/components/Banner/Introduce';

{
    /* <Link className='nav-link' to='/SignUp'>
Nếu chưa có tài khoản, vui lòng đăng kí tại đây
</Link> */
}

export default function Login() {
    const [isloading, SetIsLoading] = useState(false);
    const onFinish = (values) => {
        SetIsLoading(true);
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {/* <Info title="Trang chủ " body="Trang chủ / Đăng Nhập"/> */}
            <Introduce title="Trang chủ " body="Trang chủ / Đăng Nhập" />
            <Mgtop />
            <div className="container">
                <h1>Chào mừng bạn đã quay trở lại </h1>
                <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 7,
                    }}
                    initialValues={{
                        remember: true,
                        size: 'large',
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tài khoản"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng điền vào tài khoản ! Không được để trống',
                            },
                            {
                                type: 'string',
                                message: 'Tài khoản phải là dạng số',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Mật khẩu không được để trống, thử lại',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 6,
                            span: 16,
                        }}
                    >
                        <Checkbox>Lưu Mật Khẩu ?</Checkbox>
                        <Form.Item name="link">
                            <Link className="login-form-register" to="/signUp">
                                Bạn chưa có tài khoản .Vui lòng Đăng ký !
                            </Link>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 16,
                        }}
                    >
                        <Button type="danger" loading={isloading} htmlType="submit">
                           Tiến hành đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}
