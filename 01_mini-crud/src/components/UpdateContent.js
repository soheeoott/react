import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return (
        <article>
            <h2>Update</h2>
            <form action="/create_process" method="post" 
                onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                    this.state.id,

                    // state 와 동기화 되기 때문에
                    this.state.title,
                    this.state.desc
                    // e.target.title.value,
                    // e.target.desc.value
                );
            }.bind(this)}>
                {/* 식별자 역할 */}
                <input type="hidden" name="id" value={this.state.id}></input>
                
                <p>
                    <input type="text"
                        name="title" 
                        placeholder="title" 
                        
                        // props 값은 read-only → state 로 변형
                        // value={this.props.state.title}>
                        // input 값을 바꿨을 때 state 값을 바뀌게하면 read-only 가 아니게 된다.
                        value={this.state.title}

                        // state 에 동기화
                        // 내용이 바뀌면서 state 값이 동적으로 바뀐다.
                        onChange={this.inputFormHandler}>
                    </input>
                </p>
                <p>
                    {/* react html : textarea 값을 value 안에 넣어야 한다. */}
                    <textarea name="desc" 
                        placeholder="desc"
                        value={this.state.desc}
                        // onChange={this.inputFormHandler.bind(this)}>
                        onChange={this.inputFormHandler}>
                    </textarea>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
        );
    }
}

export default UpdateContent;