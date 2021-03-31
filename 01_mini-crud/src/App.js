import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

// debugger
// 개발자 도구의 디버거 프로그램 실행
// 작성한 부분에서 실행이 멈춘다.
// Scope : this 의 값이 있는지 확인할 수 있다.
// Source : 여러가지 정보들을 보기 쉽게 알려준다.
class App extends Component {
  // 컴포넌트가 실행될 때 render 함수 보다 먼저 실행되서 초기화를 수행
  constructor(props){
    super(props);
    
    // state 값 초기화
    // state : 컴포넌트 내부적으로 사용하는 구현에 필요한 데이터
    // 값이 변동되면 render 함수가 다시 호출된다.
    this.state = {
      mode: 'init',
      subject:{title: 'CRUD'},
      init:{title:'', desc:'항목을 선택'},
      selectedId: 0,
      contents:[
        {id:1, title:'HTML', desc:'HTML info'},
        {id:2, title:'CSS', desc:'CSS info'},
        {id:3, title:'JS', desc:'JS info'}
      ]
    }
    // 불필요한 렌더링 방지를 위해 maxId 생성
    this.maxId = 3;
    // state.contents.id.length;
  }
  getReadContent(){
    for(let i=0; i < this.state.contents.length; i++){
      let data = this.state.contents[i];
      if(data.id === this.state.selectedId){
        return data;
      }
    }
  }
  getContent(){
    let _title, _desc, _article, _content = null;
    if(this.state.mode === 'init'){
      _title = this.state.init.title;
      _desc = this.state.init.desc;
    } else if(this.state.mode === 'read'){
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.maxId = this.maxId + 1;

        // push : 새로운 데이터를 추가할 때 원본의 값이 변경된다.
        ///         성능을 개선할 때 까다로움
        // concat : 새로운 데이터를 추가할 때 원본을 바뀌지 않고, 값을 변수에 담아 사용
        //          유지보수 유용
        // let _contents = this.state.contents.concat (
        //   {id: this.maxId, title: _title, desc: _desc}
        // )

        // Array.from() : 원본 불변의 법칙, 원본을 복제 후 변형
        // Object.assign(빈 객체 | 새로운 객체 | 복제한 값을 추가할 객체, 복제할 대상) : 복제된 객체를 만들 때
        
        // immutable : 유사 배열, 유사 객체를 제어하는 방법
        // 모든 명령어들이 불변하기 때문에 일관된 코드를 사용할 수 있다.

        // a = {name: 'test'};
        // Object.assign({region: 'korea'}, a);
        // {region: 'korea', name: 'test'}
        let _contents = Array.from(this.state.contents);
        _contents.push({id: this.maxId, title: _title, desc: _desc});
        
        this.setState({
          contents: _contents,
          mode: 'read',
          selectedId: this.maxId
        });
      }.bind(this)}></CreateContent>
    } else if(this.state.mode === 'update'){
      _content = this.getReadContent(); // error
      let _id = _content.id;
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){

          // 원본을 복제한 새로운 배열
          let _contents = Array.from(this.state.contents); // TypeError: Cannot read property 'contents' of undefined
          
          for(let i = 0; i < _contents.length; i++){
            if(_contents[i].id === _id){
              _contents[i] = {id: _id, title: _title, desc: _desc};
            }
          }

          this.setState({
            contents: _contents,
            mode: 'read'
          });
        }
      }></UpdateContent>;
    }
    return _article;
  }
  render(){
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
          }.bind(this)}>
        </Subject>
        <Toc onChangePage={function(id){
          this.setState({
            mode: 'read',
            // string
            selectedId: Number(id)  
          });
        }.bind(this)} data={this.state.contents}>
        </Toc>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;