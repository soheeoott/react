import React, { Component } from 'react';

class Subject extends Component {
    render(){
        return (
        <header>
            <h1><a href="/" onClick={function(e){
                e.preventDefault();                  
                this.props.onChangePage(); // 함수를 호출
            }.bind(this)}>{this.props.title}</a></h1>
        </header>
        );
    }
}

export default Subject;