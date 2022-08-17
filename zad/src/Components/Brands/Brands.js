import React, {useState} from 'react';
import './Brands.css';

function Brands() {
    return <div className="Brands">
        <div className="Container">
            <div className="Brands-inner">
                <img src="/slider-image-v1.1.jpg" alt="" width="20%" loading="lazy" />
                <img src="/slider-image-v1.3.jpg" alt="" width="20%" loading="lazy" />
                <img src="/slider-image-v1.2.jpg" alt="" width="20%" loading="lazy" />
                <img src="/slider-image-v1.3.jpg" alt="" width="20%" loading="lazy" />
                <img src="/slider-image-v1.2.jpg" alt="" width="20%" loading="lazy" />
            </div>
        </div>
    </div>
}

export default Brands