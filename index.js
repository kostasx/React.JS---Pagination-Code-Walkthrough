import React, { useState } from 'react';            
import { render } from 'react-dom';   

const list = [ "JavaScript", "TypeScript", "CoffeeScript", "PHP", "Python", "Go", "Ruby", "Java", "C#", "C++" ];

function Post({ title }){
  return <div>{ title }</div>;  
}

const postsPerPage = 3; 
const totalPages = Math.ceil( list.length / postsPerPage ); 

function App(){
  const [ posts ] = useState( list ); 
  const [ currentPage, setCurrentPage ]= useState( 1 );
  const prev = ()=>{
    if ( currentPage > 1 ){ setCurrentPage( currentPage - 1 ); } 
  }
  const next = ()=>{
    if ( currentPage < totalPages ){ setCurrentPage( currentPage + 1 ); } 
  }
  let from = ( currentPage - 1 ) * postsPerPage;
  let upTo = from + postsPerPage;

  return (
    <div>
      <button onClick={ prev }>Prev</button> <span>{currentPage}/{totalPages}</span> <button onClick={ next }>Next</button>
      <hr/>
      {
        posts.map( ( post, index ) => <Post key={ index } title={ post } /> ) 
      }
    </div>
  )
}

render( <App/>, document.getElementById("root") );