import React from 'react';
import './ProductItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function ProductItem() {
    return (
        <div className="swiper-item">
            <div className="swiper-item-img">
                <img src="./images/about.jpg" alt='"Ảnh sản phẩm loading....' />
            </div>
            <div className="swiper-item-body">
                <div className="title">
                    <h5 className="text-item">Bộ mặc nhà bé gái hello Kitty</h5>
                    <h2 className="text-item price-sale">29900</h2>
                </div>
                <div className="love">
                    <div className="vote text-item">
                        <FontAwesomeIcon icon={faStar} color="green" />
                        <FontAwesomeIcon icon={faStar} color="green" />
                        <FontAwesomeIcon icon={faStar} color="green" />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h3 className="price-old text-item">2490</h3>
                </div>
            </div>
        </div>
    );
}
