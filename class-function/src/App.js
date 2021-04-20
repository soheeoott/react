import './App.css';
import React from 'react';

function App() {
  return (
    <div className="container">
      <FuncComp></FuncComp>
      <ClassComp></ClassComp>
    </div>
  );
}

function FuncComp(props){
  return (
    <div className="container">
      <h2>Function style component</h2>
    </div>
  )
}

class ClassComp extends React.Component {
  render(){
    return (
      <div className="container">
        <h2>Class style component</h2>
      </div>
    )
  }
}

export default App;