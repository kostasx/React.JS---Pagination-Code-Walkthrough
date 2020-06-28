import React, { useState } from 'react';            // We import the useState Hook to add state to our Components
import { render } from 'react-dom';   // The render method will put our JSX in the HTML page: index.html

// Create a basic list of programming languages
const list = [ "JavaScript", "TypeScript", "CoffeeScript", "PHP", "Python", "Go", "Ruby", "Java", "C#", "C++" ];

// Create a Component to display each programming language
function Post(){
  return <div>Title</div>
}

// Our main Application Container Component
function App(){
  const [ posts ] = useState( list ); // We create a state variable and assign an initial value: list
  return (
    <div>
      {
        posts.map( ( post, index ) => <Post key={ index } /> ) /* Iterate over the posts variable and display the Post Component*/
      }
    </div>
  )
}

render( <App/>, document.getElementById("root") ); // Render our App Component to the index.html page