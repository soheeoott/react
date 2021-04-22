import './App.css';
import React, {useState} from 'react';

function App() {
  return (
    <div className="container">
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

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