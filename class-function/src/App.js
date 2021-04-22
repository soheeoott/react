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
  return (
    <div className="container">
      <h2>Function style component</h2>
      <p>Number: {number}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random());
          }}></input>
    </div>
  )
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  render(){
    return (
      <div className="container">
        <h2>Class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date : {this.state.date}</p>

        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
        
        <input type="button" value="date" onClick={
          function(){
            this.setState({date: (new Date()).toString()});
          }.bind(this)
        }></input>
      </div>
    )
  }
}

export default App;