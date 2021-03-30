import './App.css';
import React, { Component } from 'react';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>CRUD</h1>
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
        <h2>HTML</h2>
        HTML info
      </article>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <Toc></Toc>
        <Content></Content>
      </div>
    );
  }
}

export default App;