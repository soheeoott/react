import React, { Component } from 'react';

class Control extends Component {
    render(){
        return (
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>create</a></li>

                <li><a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a></li>

                {/* 삭제는 a 와 같은 페이지의 개념이 아닌 버튼으로 수행되는것이 맞는 표현방식 */}
                <li><input type="button" value="delete" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}></input></li>
            </ul>
        );
    }
}

export default Control;