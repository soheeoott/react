import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
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

function Topics(){
	return (
		<div>
			<h2>Topics</h2>
      Topics-Component Page
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