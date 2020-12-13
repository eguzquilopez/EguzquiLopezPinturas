import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

function HomeNav() {
    return (
            <nav class="nav-container">

                <div class="container1" id="galeria">
                    <Link to="/galeria" class="overlay text">galeria</Link>
                </div>

                <div class="container1" id="aboutme">
                    <div class="overlay text">about me</div>  
                </div>

                <div class="container1" id="contacto">
                    <Link to="/contacto" class="overlay text">Escribime para encargar tu cuadro a medida!</Link>
                </div>

            </nav>
    )
}

export default HomeNav;