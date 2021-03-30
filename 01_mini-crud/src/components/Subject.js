import React, { Component } from 'react';

class Subject extends Component {
    render(){
        return (
        <header>
            {/* 속성 */}
            {/* tag : attribute */}
            {/* react : props */}
            <h1><a href="/">{this.props.title}</a></h1>
        </header>
        );
    }
}

export default Subject;