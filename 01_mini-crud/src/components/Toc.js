// react 라이브러리에서 Component 클래스를 로딩
import React, { Component } from 'react';

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

// 클래스를 외부에서 사용
export default Toc;