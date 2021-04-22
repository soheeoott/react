import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  let [funcShow, setFuncShow] = useState(true);
  let [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <input type="button" value="remove func" onClick={function(){
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove class" onClick={function(){
        setClassShow(false);
      }}></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null} {/* 삼항 연산자 */}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

let funcStyle = 'color:orange';
let funcId = 0;
function FuncComp(props){
  let numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];

  // 방법1
  // let dateState = useState((new Date()).toString());
  // let _date = dateState[0];
  // let setDate = dateState[1];

  // 방법2
  let [_date, setDate] = useState((new Date()).toString());
  
  console.log('%cfunc => render '+(++funcId), funcStyle);
  
  useEffect(function(){
    console.log('%cfunc => useEffect (componentDidMount)' +(++funcId), funcStyle);
    document.title = number;
    return function(){
      console.log('%cfunc => useEffect return = clean up (componentWillUnmount)' +(++funcId), funcStyle);
    }
  }, []); // 빈 배열을 줌으로써 componentDidMount 역할만 수행

  useEffect(function(){
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate)' +(++funcId), funcStyle);
    document.title = number;
    return function(){
      console.log('%cfunc => useEffect number return = clean up (componentWillUnmount)' +(++funcId), funcStyle);
    }
  }, [number]); // skipping effect

  useEffect(function(){
    console.log('%cfunc => useEffect date (componentDidMount & componentDidUpdate)' +(++funcId), funcStyle);
    document.title = _date;
    return function(){
      console.log('%cfunc => useEffect date return = clean up (componentWillUnmount)' +(++funcId), funcStyle);
    }
  }, [_date]); // skipping effect
  return (
    <div className="container">
      <h2>Function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random());
          }}>
      </input>
      <input type="button" value="date" onClick={
          function(){
            setDate((new Date()).toString());
          }}>
      </input>
    </div>
  )
}

// console.log 로 출력되는 글씨 색상을 빨강으로
let classStyle = 'color:red';
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState){
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  componentWillUnmount(nextProps, nextState){
    console.log('%cclass => componentWillUnmount', classStyle);
  }
  render(){
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>Class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }>
        </input>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date: (new Date()).toString()});
          }.bind(this)
        }>
        </input>
      </div>
    )
  }
}

export default App;