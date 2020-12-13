import React from 'react';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'

function HeaderHome() {
    return (
        <div>
        <header>
            <h2>Eguzqui Lopez Pinturas</h2>
            <div class="banner" id="cf">
                <img className="top" src={banner1} alt=""></img>
                <img className="bottom" src={banner2} alt=""></img>
            </div>
        </header>
        </div>
    )
}


export default HeaderHome;