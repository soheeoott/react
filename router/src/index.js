import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

function App(){
	return (
		<div>
			<h1>React Router Dom</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <Route exact path="/"><Home></Home></Route>
      <Route path="/topics"><Topics></Topics></Route>
      <Route path="/contact"><Contact></Contact></Route>
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