import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Content from './components/Content';

class App extends Component {
  // 컴포넌트가 실행될 때 render 함수 보다 먼저 실행되서 초기화를 수행
  constructor(props){
    super(props);
    
    // state 값 초기화
    // state : 컴포넌트 내부적으로 사용하는 구현에 필요한 데이터
    this.state = {
      subject:{title: 'CRUD'},
      contents:[
        {id:1, title:'HTML', desc:'HTML info'},
        {id:2, title:'CSS', desc:'CSS info'},
        {id:3, title:'JS', desc:'JS info'}
      ]
    }
  }
  render(){
    return (
      <div className="App">

        {/* 가변적인 출력 값 */}
        {/* {} props 값을 자바스크립트의 코드로 실행 */}
        {/* props : 사용자가 컴포넌트를 조작하는 부분 */}
        {/* 상위 컴포넌트의 state 값을 하위 컴포넌트의 props 값으로 전달 */}
        <Subject title={this.state.subject.title}></Subject>
        <Toc data={this.state.contents}></Toc>
        <Content title="" desc=""></Content>
      </div>
    );
  }
}

export default App;