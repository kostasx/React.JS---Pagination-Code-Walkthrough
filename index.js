import React, { useState } from 'react';            
import { render } from 'react-dom';   

const list = [ "JavaScript", "TypeScript", "CoffeeScript", "PHP", "Python", "Go", "Ruby", "Java", "C#", "C++" ];

function Post({ title }){
  return <div>{ title }</div>;  
}

function App(){
  const [ posts ] = useState( list ); 
  const prev = ()=>{
  }
  const next = ()=>{

  }
  return (
    <div>
      <button onClick={ prev }>Prev</button> <span>1/4</span> <button onClick={ next }>Next</button>
      <hr/>
      {
        posts.map( ( post, index ) => <Post key={ index } title={ post } /> ) 
      }
    </div>
  )
}

render( <App/>, document.getElementById("root") );