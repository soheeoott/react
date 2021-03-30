import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Content from './components/Content';

class App extends Component {
  render(){
    return (
      <div className="App">

        {/* 가변적인 출력 값 */}
        <Subject title="CRUD"></Subject>
        <Toc></Toc>
        <Content title="" desc=""></Content>
      </div>
    );
  }
}

export default App;