import React, {useState} from 'react';
import './Hero.css';

function Hero() {
    const style = {
        "background-image": `url("ZAD-Hero-Icon-v1.png")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        height: "100vh",
        overflow: "hidden",
        width: "100%"
    }
    const styleinner = {
        width: "60%",
        position: "relative",
        float: "right",
        height: "100%"
    }
    const styleoverlay1 = {
        position: "absolute",
        height: "50%",
        width: "90%",
        right: "0"
    }
    const styleoverlay2 = {
        position: "absolute",
        width: "40%",
        left: "-16%",
        margin: "0 auto",
        bottom: "50%",
    }
    const styleoverlay3 = {
        position: "absolute",
        height: "50%",
        right: "0",
        bottom:"0",
        width: "100%"
    }
    return <div className="hero"  style={style}>
        <div className="hero-inner" style={styleinner}>
            <div style={styleoverlay1}><img src="/slider-image-v1.1.jpg" alt="" width="100%" height="100%" class="hero-overlay-1" loading="lazy" /></div>
            <div style={styleoverlay2}><img src="/slider-image-v1.3.jpg" alt="" width="300" height="300" class="hero-overlay-2" loading="lazy" /></div>
            <div style={styleoverlay3}><img src="/slider-image-v1.2.jpg" alt="" width="100%" height="100%" class="hero-overlay-3" loading="lazy" /></div>
        </div>
    </div>
}

export default Hero