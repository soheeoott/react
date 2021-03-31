import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Content from './components/Content';

{/*
실행을 멈추고 - 개발자 도구 - Source (여러가지 정보들을 보기 쉽게 알려준다.)
debugger;
*/}

class App extends Component {
  // 컴포넌트가 실행될 때 render 함수 보다 먼저 실행되서 초기화를 수행
  constructor(props){
    super(props);
    
    // state 값 초기화
    // state : 컴포넌트 내부적으로 사용하는 구현에 필요한 데이터
    // 값이 변동되면 render 함수가 다시 호출된다.
    this.state = {
      mode: 'read',
      subject:{title: 'CRUD'},
      init:{title:'', desc:'항목을 선택'},
      selectedId: 2,
      contents:[
        {id:1, title:'HTML', desc:'HTML info'},
        {id:2, title:'CSS', desc:'CSS info'},
        {id:3, title:'JS', desc:'JS info'}
      ]
    }
  }
  render(){
    let _title, _desc = null;
    if(this.state.mode === 'init'){
      _title = this.state.init.title;
      _desc = this.state.init.desc;
    } else if(this.state.mode === 'read'){
      for(let i=0; i < this.state.contents.length; i++){
        let data = this.state.contents[i];
        if(data.id === this.state.selectedId){
          _title = data.title;
          _desc = data.desc;
        }
      }
    }
    return (
      <div className="App">

        {/* 가변적인 출력 값 */}
        {/* {} props 값을 자바스크립트의 코드로 실행 */}
        {/* props : 사용자가 컴포넌트를 조작하는 부분 */}
        {/* 컴포넌트 밖에서 props 변경은 허용 */}
        {/* 상위 컴포넌트의 state 값을 하위 컴포넌트의 props 값으로 전달 */}
        <Subject 
          title={this.state.subject.title}
          
          // 이벤트에 함수를 설치
          // 함수 안에서는 this 의 값이 아무값도 가지지 않는다.
          // .bind(this)
          onChangePage={function(){

            // state 값 설정
            // 이미 컴포넌트가 생성된 다음에 동적으로 state 값으로 변경할 때
            // setState 함수안에 변경하고 싶은 값을 객체로 전달
            this.setState({mode: 'init'});
          }.bind(this)}
        >
        </Subject>
        <Toc onChangePage={function(id){
          this.setState({
            mode: 'read',
            // string
            selectedId: Number(id)  
          });
        }.bind(this)} data={this.state.contents}></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;