import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  // 컴포넌트가 실행될 때 render 함수 보다 먼저 실행되서 초기화를 수행
  constructor(props){
    super(props);

    // state : 컴포넌트 내부적으로 사용하는 구현에 필요한 데이터
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
    
    // 불필요한 렌더링 방지를 위해 maxId 을 state 밖에 생성
    // 마지막 this.state.contents.id 값과 동일
    this.maxId = 3;
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
        
        // Array.from() : 원본 불변의 법칙, 원본을 복제 후 변형
        // push 를 수행해도 Array.from 에는 원본을 갖고 있다.
        let _contents = Array.from(this.state.contents);
        _contents.push({id: this.maxId, title: _title, desc: _desc});
        
        this.setState({
          contents: _contents,
          mode: 'read',
          selectedId: this.maxId
        });
      }.bind(this)}></CreateContent>
    } else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
        this.maxId = this.maxId - 1;  
        
        // 원본을 복제한 새로운 배열
        let _contents = Array.from(this.state.contents);

        // id 값이 수정하고자 하는 id 값과 일치한지
        for(let i = 0; i < _contents.length; i++){
          if(_contents[i].id === _id){
            _contents[i] = {id: _id, title: _title, desc: _desc};
          }
        }

        this.setState({
          contents: _contents,
          mode: 'read'
        });
      }.bind(this)}></UpdateContent>;
    }
    return _article;
  }
  render(){
    return (
      <div className="App">
        {/* {} props 값을 자바스크립트의 코드로 실행 */}
        {/* 상위 컴포넌트의 state 값을 하위 컴포넌트의 props 값으로 전달 */}
        <Subject 
          title={this.state.subject.title}
          
          // 함수 안에서는 this 의 값이 아무값도 가지지 않기
          // 때문에 bind(this) 사용
          onChangePage={function(){

            // setState 함수안에 변경하고 싶은 값을 객체로 전달
            this.setState({mode: 'init'});
          }.bind(this)}>
        </Subject>
        <Toc onChangePage={function(id){
          this.setState({
            mode: 'read',
            selectedId: Number(id) // string
          });
        }.bind(this)} data={this.state.contents}>
        </Toc>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              let _contents = Array.from(this.state.contents);

              // 삭제할 대상(id)
              for(let i = 0; i < this.state.contents.length; i++){
                if(_contents[i].id === this.state.selectedId){
                  
                  // splice : 범위지정, 원본이 변경 됨
                  _contents.splice(i, 1);
                }
              }

              this.setState({
                mode: 'init',
                contents: _contents
              });

              alert('delete complete');
            }
          } else {
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;