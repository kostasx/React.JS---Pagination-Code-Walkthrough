import React, { useState } from 'react';            // We import the useState Hook to add state to our Components
import { render } from 'react-dom';   // The render method will put our JSX in the HTML page: index.html

// Create a basic list of programming languages
const list = [ "JavaScript", "TypeScript", "CoffeeScript", "PHP", "Python", "Go", "Ruby", "Java", "C#", "C++" ];

// Create a Component to display each programming language
function Post({ title }){
  return <div>{ title }</div>;  // Display the title Prop value
}

// Our main Application Container Component
function App(){
  const [ posts ] = useState( list ); // We create a state variable and assign an initial value: list
  const prev = ()=>{
  }
  const next = ()=>{

  }
  return (
    <div>
      {/* Creating Next & Previous buttons along with a current page indicator */}
      <button onClick={ prev }>Prev</button> <span>1/4</span> <button onClick={ next }>Next</button>
      <hr/>
      {
        posts.map( ( post, index ) => <Post key={ index } title={ post } /> ) /* Pass each list value to the Component as a Prop */
      }
    </div>
  )
}

render( <App/>, document.getElementById("root") ); // Render our App Component to the index.html page