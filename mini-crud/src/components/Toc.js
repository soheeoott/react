// react 라이브러리에서 Component 클래스를 로딩
import React, { Component } from 'react';

class Toc extends Component {

    // 컴포넌트에 아무런 값의 변화가 없음에도 render 함수로 인해 불필요한 reload 를 방지
    // render 이전에 실행되는 함수
    // return 값이 true 면 render 값이 호출되고,
    // return 값이 false 면 render 값이 호출되지 않는다.
    // 새로바뀐 값과 이전의 값에 접근할 수 있다.
    // 두개의 매개변수를 갖도록 되어 있음
    // newProps, newState = 속성값이 바뀌었을 때, state 값의 바뀌었을 때
    // push 로 새로운 값을 넣었을 때 원본의 값이 바뀌므로 render 함수가 실행되지 않는다.
    shouldComponentUpdate(newProps, newState){
        if(this.props.data === newProps.data){
            return false;
        } else {
            return true;
        }
    }
    render(){
        // 컴포넌트 안에서 this 로 전달된 props 값을 직접적인 변경은 금지
        let list = [];
        let data = this.props.data;
        for (let i = 0; i < data.length; i++){
            // 여러개의 el 을 자동으로 생성하는 경우 식별할 수 있는 key 값이 필요
            // key : 리액트 내부에서 필요로 요청하는 값
            list.push(
                <li key={data[i].id}>
                    <a 
                        href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e){ //(id, e)
                            e.preventDefault();
                            // data-id 값
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}>{data[i].title}</a> {/* bind(this, data[i].id) */}
                </li>);
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