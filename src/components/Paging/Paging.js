import { Pagination } from 'antd';
import React, { useState } from 'react';

export default function Paging({ size }) {
    const [current, setCurrent] = useState(1);

    const Change = (e) => {
        console.log(e);
        setCurrent(e);
    };
    return (
        <div className="phan-trang" style={{ textAlign: 'center' }}>
            <Pagination
                current={current}
                total={size}
                onChange={Change}
                showLessItems
                showSizeChanger={false}
            ></Pagination>
        </div>
    );
}
