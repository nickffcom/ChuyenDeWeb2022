import { Form, Input, InputNumber, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Introduce from '~/components/Banner/Introduce';
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} là bắt buộc!',
    types: {
        email: '${label} ko phải định dạng email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} phải nằm trong khoảng ${min} và ${max}',
    },
};
export default function SingnUp() {
    const tailLayout = {
        wrapperCol: { offset: 0, span: 16 },
    };
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div>
            <Introduce title="Đăng ký" body="Trang chủ / Đăng ký" />
            <div className="resgiter">
                <div className="container">
                    <h1 className="">Đăng ký tài khoản</h1>
                    <div className="">
                        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                            <Form.Item
                                name={['user', 'name']}
                                label="Họ và tên"
                                wrapperCol={{
                                  span:11
                                }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'username']}
                                label="Tài khoản đăng nhập"
                                wrapperCol={{
                                  span:11
                                }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'email']}
                                wrapperCol={{
                                  span:11
                                }}
                                label="Email"
                                rules={[
                                    {
                                        type: 'email',
                                        required:true
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        
                            <Form.Item name={['user', 'sodienthoai']} label="Số điện thoại"
                             labelCol={{
                              span:4
                            }}
                            wrapperCol={{
                              span:5
                            }}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'address']} label="Địa chỉ">
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item
                              // labelCol={{
                              //   span:0
                              // }}
                              // wrapperCol={{
                              //   span:5
                              // }}
                                name={['user', 'password']}
                                label="Mật khẩu"
                                rules={[
                                    {   required:true,
                                        type: 'number',
                                        min: 18,
                                        max: 99,
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                <Button type="primary" htmlType="submit">
                                    Đăng ký
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
