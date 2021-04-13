import React, { Component } from 'react';

class Toc extends Component {

    // shouldComponentUpdate 의 매개변수는 newProps, newState로 정해져 있다.
    // newProps, newState = 속성값이 바뀌었을 때, state 값의 바뀌었을 때
    shouldComponentUpdate(newProps, newState){
        
        // 새로바뀐 값과 이전의 값에 접근할 수 있다.
        // push 로 새로운 값을 넣었을 때 원본의 값이 바뀌므로 render() 함수가 실행되지 않는다.
        if(this.props.data === newProps.data){
            return false; // render() 함수 호출
        } else {
            return true; // render() 함수가 호출되지 않는다.
        }
    }
    render(){
        // 컴포넌트 안(상위)에서 this 로 전달된 props 값을 직접적인 변경은 금지되어 있다.
        let list = [];
        let data = this.props.data;
        for (let i = 0; i < data.length; i++){
            // 여러개의 el 을 자동으로 생성하는 경우 식별할 수 있는 key 값이 필요
            list.push(
                <li key={data[i].id}>
                    <a 
                        href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick={function(e){
                            e.preventDefault();
                            
                            // data-id(접두사) 속성은 dataset 로 접근 
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}>{data[i].title}</a>
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

export default Toc;