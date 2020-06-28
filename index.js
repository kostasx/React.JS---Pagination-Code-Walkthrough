import React from 'react';            // We import the React library in order to code in JSX
import { render } from 'react-dom';   // The render method will put our JSX in the HTML page: index.html

// Our main Application Container Component
function App(){
  return (
    <div>App</div>
  )
}

render( <App/>, document.getElementById("root") ); // Render our App Component to the index.html page