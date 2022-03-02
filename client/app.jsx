import React, { Component } from 'react';
// import { Canvas } from 'react-three-fiber';
// import { OrbitControls } from 'drei';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Card from './components/card/card';


// TODO: create a src dir
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // TODO: method binds for handle click go here
  }

  componentDidMount() {

  }

  render() {
    const login = <Login key="login" className="login" />
    return (
      <div className="app-component">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ } />
            <Route path="/menu" element={<Menu key="menu" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;