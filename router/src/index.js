import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, NavLink, useParams} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App(){
	return (
		<div>
			<h1>React Router Dom</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/"><h2>Not Found</h2></Route>
      </Switch>
		</div>
	)
}

function Home(){
	return (
		<div>
			<h2>Home</h2>
      Home-Component Page
		</div>
	)
}

let contents = [
  {id: 1, title: 'HTML', desc: 'HTML is...'},
  {id: 2, title: 'CSS', desc: 'CSS is...'},
  {id: 3, title: 'JS', desc: 'JS is...'}
]

function Topic(){
  let params = useParams();
  let topic_id = params.topic_id;
  let sel_topic = {
    title: 'Not Found',
    desc: 'sorry..'
  };
  for(let i=0; i<contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      sel_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{sel_topic.title}</h3>
      {sel_topic.desc}
    </div>
  )
}

function Topics(){
  let list = [];
  for(let i=0; i<contents.length; i++){
    list.push(<li key={contents[i].id}><NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink></li>);
  }
	return (
		<div>
			<h2>Topics</h2>
      <ul>
        {list}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
		</div>
	)
}

function Contact(){
	return (
		<div>
			<h2>Contact</h2>
      Contact-Component Page
		</div>
	)
}

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();