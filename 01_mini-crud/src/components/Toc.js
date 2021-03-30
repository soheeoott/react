// react 라이브러리에서 Component 클래스를 로딩
import React, { Component } from 'react';

class Toc extends Component {
    render(){
        let list = [];
        let data = this.props.data;
        for (let i = 0; i < data.length; i++){
            // 여러개의 el 을 자동으로 생성하는 경우 식별할 수 있는 key 값이 필요
            // key : 리액트 내부에서 필요로 요청하는 값
            list.push(<li key={data[i].id}><a href={"/content"+data[i].id}>{data[i].title}</a></li>);
        }

        return (
        <nav>
            <ul>
                {list}
            </ul>
        </nav>
        );
    }
}

// 클래스를 외부에서 사용
export default Toc;