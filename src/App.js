import './App.css';
import React, { Component } from 'react';
import Footer from './components/footer';
import './maincss.css';
import HomeNav from './components/homeNav';
import HeaderHome from './components/headerHome';
import Bckgrnd from './components/html';
import Gallery from './components/gallery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Email from './components/email';

//version final para commiit

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
 // Instale y configure este servidor de backend, pero me resulto complicado asociarlo a un form para emails, de igual forma funciona
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <html>
        <BrowserRouter>
           {/* la idea es que se muestre siempre el inicio, y vaya intercalando cosas abajo segun interaccion */}
          <Bckgrnd />
          <HeaderHome />
          <HomeNav />
          <Footer />
          <Switch>
            <Route path="/galeria">
              <Gallery />
            </Route>
            <Route path="/contacto">
              <Email />
            </Route>
          </Switch>
        </BrowserRouter>
      </html>
    );
  }
}

export default App;
