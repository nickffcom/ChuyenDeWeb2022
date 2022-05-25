import { Form, Input, InputNumber, Button, Select } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Introduce from '~/components/Banner/Introduce';
import Mgtop from '~/components/MgTop/Mgtop';
import { Link } from 'react-router-dom';

export default function Account_info() {
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const onFinish = (values) => {
        console.log(values);
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
    return (
        <div className="row">
            <Mgtop />
            <Introduce title="Thông tin tài khoản" body="Trang chủ / Info" />
            <div className="container">
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <div className="edit_avatar">Thông tin tài khoản </div>
                    <Form.Item
                        name={['user', 'name']}
                        label="Họ và tên"
                        wrapperCol={{
                            span: 7,
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
                        label="Tên Tài khoản "
                        wrapperCol={{
                            span: 7,
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
                            span: 10,
                        }}
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={['user', 'sodienthoai']}
                        label="Số điện thoại"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 5,
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
                        rules={[{ required: true, type: 'number', min: 18, max: 99 }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="danger" htmlType="submit">
                            Lưu lại
                        </Button>
                        <Button type="">
                            <Link to='/'>Quay lại trang chủ</Link>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
