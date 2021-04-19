// import React, {Component} from 'react';
import { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
  state = {number : 0}
  render(){
    return (
      <div className="App">
        <h1>Root</h1>
        {/* 이벤트 버블링을 통해서 root 부모에 props 로 전달한 값을 다시 호출 */}
        <AddNumberRoot onClick={function(size){
          this.setState({number: this.state.number + size});
        }.bind(this)}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;