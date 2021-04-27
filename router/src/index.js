import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

function App(){
	return (
		<div>
			<h1>React Router Dom</h1>
      <Home></Home>
      <Topics></Topics>
      <Contact></Contact>
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
  <App />,
  document.getElementById('root')
);

reportWebVitals();