import React, { Component } from 'react';

// import { Container } from './styles';

import Header from './pages/Header'
import Menu from './pages/Menu'
import Footer from './pages/Footer'

export default class App extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
    );
  }
}
