import './App.css';
import React, { Component } from 'react';

class Subject extends Component {
  render(){
    return (
      <header>
        {/* 속성 */}
        {/* tag : attribute */}
        {/* react : props */}
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

class Toc extends Component {
  render(){
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JS</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

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