import React from 'react';            // We import the React library in order to code in JSX
import { render } from 'react-dom';   // The render method will put our JSX in the HTML page: index.html

// Create a basic list of programming languages
const list = [ "JavaScript", "TypeScript", "CoffeeScript", "PHP", "Python", "Go", "Ruby", "Java", "C#", "C++" ];

// Create a Component to display each programming language
function Post(){
  return <div>Title</div>
}

// Our main Application Container Component
function App(){
  return (
    <div>App</div>
  )
}

render( <App/>, document.getElementById("root") ); // Render our App Component to the index.html page