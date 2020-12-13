import React from 'react';
import cuadro1 from '../images/8.jpg'
import cuadro2 from '../images/9.jpg'
import cuadro3 from '../images/10.jpg'
import cuadro4 from '../images/1.jpg'
import cuadro5 from '../images/3.jpg'
import cuadro6 from '../images/10.jpg'
import cuadro7 from '../images/11.jpg'
import cuadro8 from '../images/2.jpg'
import cuadro9 from '../images/4.jpg'

function Gallery() {
    return (          
            <div class="container">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div class="gallery">
                    <div class="gallery-item">
                        <img className="gallery-image" src={cuadro1} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img className="gallery-image" src={cuadro2} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img className="gallery-image" src={cuadro3} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img className="gallery-image" src={cuadro4} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img className="gallery-image" src={cuadro5} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img className="gallery-image" src={cuadro6} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img className="gallery-image" src={cuadro7} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img className="gallery-image" src={cuadro8} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img className="gallery-image" src={cuadro9} alt=""></img>
                    </div>
                </div>
            </div>     
    )
}

export default Gallery